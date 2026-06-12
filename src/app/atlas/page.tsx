import type { Metadata } from 'next';
import MapEngine from '@/components/map/MapEngine';
import Link from 'next/link';
import { Home } from 'lucide-react';

export const metadata: Metadata = {
    title: 'İnteraktif Atlas',
    description: 'Türkiye coğrafyasını 12+ katmanlı interaktif haritalarla keşfedin. Dağlar, göller, nehirler, madenler, şehirler ve daha fazlası.',
};

export default function AtlasPage() {
    return (
        <main className="relative w-full h-screen overflow-hidden">
            {/* Back to Dashboard Button */}
            <Link
                href="/"
                className="fixed top-4 right-4 z-[1001] flex items-center gap-2 px-3 sm:px-4 py-2.5 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl shadow-lg hover:bg-slate-800 transition-all group"
            >
                <Home size={18} className="text-indigo-400 group-hover:text-indigo-300" />
                <span className="text-sm font-medium text-white hidden sm:inline">Ana Sayfa</span>
            </Link>

            <MapEngine />
        </main>
    );
}
