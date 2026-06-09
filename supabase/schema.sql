-- =============================================================
-- GEO-KPSS — Supabase Şeması
-- Supabase Dashboard → SQL Editor → New Query → Çalıştır
-- =============================================================

-- ─── 1. TABLOLAR ──────────────────────────────────────────────

-- Kullanıcı profilleri (auth.users'ı genişletir)
create table if not exists public.profiles (
    id         uuid references auth.users on delete cascade not null primary key,
    email      text,
    streak_days    integer default 0,
    last_study_date text,
    total_reviewed  integer default 0,
    total_correct   integer default 0,
    created_at timestamp with time zone default timezone('utc', now()) not null,
    updated_at timestamp with time zone default timezone('utc', now()) not null
);

-- Quiz sonuçları
create table if not exists public.quiz_results (
    id               uuid primary key default gen_random_uuid(),
    user_id          uuid references auth.users on delete cascade not null,
    date             text not null,
    mode             text not null,
    score            integer not null default 0,
    total_questions  integer not null default 0,
    correct_count    integer not null default 0,
    accuracy         integer not null default 0,
    duration         integer not null default 0,
    category_breakdown jsonb default '{}',
    created_at       timestamp with time zone default timezone('utc', now()) not null
);

-- Flashcard ilerleme (Leitner kutu sistemi)
create table if not exists public.flashcard_progress (
    user_id      uuid references auth.users on delete cascade not null,
    card_id      text not null,
    box          integer not null default 1 check (box between 1 and 5),
    last_reviewed text not null,
    review_count integer not null default 0,
    correct_count integer not null default 0,
    primary key (user_id, card_id)
);

-- Görülen quiz soruları (tekrar önleme)
create table if not exists public.seen_questions (
    user_id      uuid references auth.users on delete cascade not null primary key,
    question_ids text[] default '{}',
    updated_at   timestamp with time zone default timezone('utc', now()) not null
);


-- ─── 2. ROW LEVEL SECURITY ───────────────────────────────────

alter table public.profiles        enable row level security;
alter table public.quiz_results     enable row level security;
alter table public.flashcard_progress enable row level security;
alter table public.seen_questions   enable row level security;

-- profiles
create policy "profiles: kendi satırını gör"    on public.profiles for select using (auth.uid() = id);
create policy "profiles: kendi satırını ekle"   on public.profiles for insert with check (auth.uid() = id);
create policy "profiles: kendi satırını güncelle" on public.profiles for update using (auth.uid() = id);

-- quiz_results
create policy "quiz: kendi sonuçlarını gör"    on public.quiz_results for select using (auth.uid() = user_id);
create policy "quiz: kendi sonuçlarını ekle"   on public.quiz_results for insert with check (auth.uid() = user_id);
create policy "quiz: kendi sonuçlarını sil"    on public.quiz_results for delete using (auth.uid() = user_id);

-- flashcard_progress
create policy "fc: kendi ilerlemesini gör"       on public.flashcard_progress for select using (auth.uid() = user_id);
create policy "fc: kendi ilerlemesini ekle"      on public.flashcard_progress for insert with check (auth.uid() = user_id);
create policy "fc: kendi ilerlemesini güncelle"  on public.flashcard_progress for update using (auth.uid() = user_id);
create policy "fc: kendi ilerlemesini sil"       on public.flashcard_progress for delete using (auth.uid() = user_id);

-- seen_questions
create policy "seen: kendi kaydını gör"       on public.seen_questions for select using (auth.uid() = user_id);
create policy "seen: kendi kaydını ekle"      on public.seen_questions for insert with check (auth.uid() = user_id);
create policy "seen: kendi kaydını güncelle"  on public.seen_questions for update using (auth.uid() = user_id);


-- ─── 3. OTOMATİK PROFİL OLUŞTURMA ───────────────────────────
-- Yeni kullanıcı kaydı olunca profiles tablosuna satır ekler.

create or replace function public.handle_new_user()
returns trigger as $$
begin
    insert into public.profiles (id, email)
    values (new.id, new.email)
    on conflict (id) do nothing;
    return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
    after insert on auth.users
    for each row execute procedure public.handle_new_user();


-- ─── 4. İNDEKSLER ────────────────────────────────────────────

create index if not exists idx_quiz_results_user_id on public.quiz_results(user_id);
create index if not exists idx_quiz_results_date    on public.quiz_results(date desc);
create index if not exists idx_fc_progress_user_id  on public.flashcard_progress(user_id);
