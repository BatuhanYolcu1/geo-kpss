-- ============================================================
-- Geo-KPSS Subscription & Payment Tables
-- ============================================================

-- Kullanıcı abonelik planı
CREATE TABLE IF NOT EXISTS subscriptions (
    id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    plan            text NOT NULL DEFAULT 'free'
                        CHECK (plan IN ('free', 'pro_monthly', 'pro_yearly')),
    status          text NOT NULL DEFAULT 'active'
                        CHECK (status IN ('active', 'cancelled', 'expired', 'past_due')),
    period_start    timestamptz,
    period_end      timestamptz,
    cancel_at_period_end boolean NOT NULL DEFAULT false,
    iyzico_sub_ref  text,              -- iyzico abonelik referans kodu
    created_at      timestamptz NOT NULL DEFAULT now(),
    updated_at      timestamptz NOT NULL DEFAULT now()
);

-- Her kullanıcının en fazla bir aktif aboneliği olsun
CREATE UNIQUE INDEX IF NOT EXISTS subscriptions_user_active
    ON subscriptions (user_id)
    WHERE status = 'active';

-- Ödeme geçmişi
CREATE TABLE IF NOT EXISTS payments (
    id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    subscription_id uuid REFERENCES subscriptions(id),
    amount_kurus    integer NOT NULL,   -- TL kuruş cinsinden (79 TL = 7900)
    currency        text NOT NULL DEFAULT 'TRY',
    status          text NOT NULL DEFAULT 'pending'
                        CHECK (status IN ('pending', 'success', 'failed', 'refunded')),
    iyzico_token    text,               -- iyzicoPay token
    iyzico_payment_id text,             -- iyzico payment ID
    error_message   text,
    created_at      timestamptz NOT NULL DEFAULT now()
);

-- updated_at otomatik güncelleme
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

CREATE TRIGGER subscriptions_updated_at
    BEFORE UPDATE ON subscriptions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- RLS
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Kullanıcı kendi aboneliğini okuyabilir
CREATE POLICY "user_read_own_subscription"
    ON subscriptions FOR SELECT
    USING (auth.uid() = user_id);

-- Kullanıcı kendi ödemelerini okuyabilir
CREATE POLICY "user_read_own_payments"
    ON payments FOR SELECT
    USING (auth.uid() = user_id);

-- Sadece service_role insert/update yapabilir (webhook üzerinden)
CREATE POLICY "service_role_manage_subscriptions"
    ON subscriptions FOR ALL
    USING (auth.role() = 'service_role');

CREATE POLICY "service_role_manage_payments"
    ON payments FOR ALL
    USING (auth.role() = 'service_role');

-- Kullanıcının aktif planını kolayca sorgulayan view
CREATE OR REPLACE VIEW user_plan AS
    SELECT
        u.id AS user_id,
        COALESCE(s.plan, 'free') AS plan,
        COALESCE(s.status, 'active') AS status,
        s.period_end,
        s.cancel_at_period_end
    FROM auth.users u
    LEFT JOIN subscriptions s
        ON s.user_id = u.id AND s.status = 'active';
