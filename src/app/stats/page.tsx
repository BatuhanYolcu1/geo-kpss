import type { Metadata } from 'next';
import StatsDashboard from '@/components/stats/StatsDashboard';

export const metadata: Metadata = {
    title: 'İstatistikler',
    description: 'Quiz performansınızı takip edin. Doğruluk oranı, kategori bazlı istatistikler ve quiz geçmişinizi görüntüleyin.',
};

export default function StatsPage() {
    return (
        <main className="min-h-screen bg-[#f7faf4] text-[#2c342e]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-28 sm:pb-16">
                <h1 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8 text-[#2c342e]">İstatistiklerim</h1>
                <StatsDashboard />
            </div>
        </main>
    );
}
