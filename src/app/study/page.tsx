import { BookOpen, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import StudyModule from '@/components/study/StudyModule';

export default function StudyPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4 group"
                        >
                            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            Ana Sayfa&apos;ya Dön
                        </Link>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent flex items-center gap-3">
                            <BookOpen size={32} className="text-indigo-400" />
                            Ders Notları
                        </h1>
                        <p className="text-slate-400 mt-2 text-lg">
                            KPSS Coğrafya için kapsamlı konu anlatımı ve önemli notlar.
                        </p>
                    </div>
                </header>

                <StudyModule />
            </div>
        </main>
    );
}
