import type { Metadata } from 'next';
import StatsDashboard from '@/components/stats/StatsDashboard';

export const metadata: Metadata = {
    title: 'İstatistikler',
    description: 'Quiz performansınızı takip edin. Doğruluk oranı, kategori bazlı istatistikler ve quiz geçmişinizi görüntüleyin.',
};

export default function StatsPage() {
    return <StatsDashboard />;
}
