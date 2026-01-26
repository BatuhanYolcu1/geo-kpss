'use client';

import { useState } from 'react';
import {
    BookOpen,
    ChevronRight,
    Map as MapIcon,
    Zap,
    Info,
    ArrowLeft,
    TrendingUp,
    Users,
    Mountain
} from 'lucide-react';
import { studyCategories } from '@/data/study-data';
import { StudyCategory, StudyTopic } from '@/types/quiz';
import Link from 'next/link';

export default function StudyModule() {
    const [selectedCategory, setSelectedCategory] = useState<StudyCategory | null>(null);
    const [selectedTopic, setSelectedTopic] = useState<StudyTopic | null>(null);

    const handleBack = () => {
        if (selectedTopic) {
            setSelectedTopic(null);
        } else if (selectedCategory) {
            setSelectedCategory(null);
        }
    };

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Map': return <Mountain size={24} />;
            case 'Users': return <Users size={24} />;
            case 'TrendingUp': return <TrendingUp size={24} />;
            default: return <BookOpen size={24} />;
        }
    };

    if (selectedTopic) {
        return (
            <div className="flex flex-col h-full bg-slate-900/50 rounded-2xl border border-slate-700/50 overflow-hidden animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="p-4 border-b border-slate-700/50 flex items-center justify-between bg-slate-800/50">
                    <button
                        onClick={() => setSelectedTopic(null)}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span className="font-medium">{selectedCategory?.title}</span>
                    </button>
                    <div className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs text-indigo-400 font-bold uppercase tracking-wider">
                        Konu Notu
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                    <h1 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        {selectedTopic.title}
                    </h1>

                    <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-lg mb-10">
                        {selectedTopic.content}
                    </div>

                    {selectedTopic.keyFacts && selectedTopic.keyFacts.length > 0 && (
                        <div className="space-y-4">
                            <h3 className="flex items-center gap-2 text-amber-400 font-bold text-xl mb-4">
                                <Zap size={20} fill="currentColor" />
                                Önemli Bilgiler (KPSS Notları)
                            </h3>
                            <div className="grid gap-3">
                                {selectedTopic.keyFacts.map((fact, i) => (
                                    <div
                                        key={i}
                                        className="flex gap-4 p-4 bg-slate-800/40 rounded-xl border border-slate-700/30 hover:border-amber-500/30 transition-colors group"
                                    >
                                        <div className="mt-1 w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                                            {i + 1}
                                        </div>
                                        <p className="text-slate-300 group-hover:text-white transition-colors">{fact}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {selectedTopic.relatedCoordinates && (
                        <div className="mt-10 p-6 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                    <MapIcon size={24} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-indigo-300">Haritada Görün</h4>
                                    <p className="text-sm text-indigo-200/60">Bu konuyu interaktif atlas üzerinde inceleyin.</p>
                                </div>
                            </div>
                            <Link
                                href="/atlas"
                                className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2"
                            >
                                Atlasa Git
                                <ChevronRight size={18} />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    if (selectedCategory) {
        return (
            <div className="flex flex-col h-full bg-slate-900/50 rounded-2xl border border-slate-700/50 overflow-hidden animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="p-4 border-b border-slate-700/50 flex items-center justify-between bg-slate-800/50">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span className="font-medium">Kategoriler</span>
                    </button>
                    <div className="flex items-center gap-2 text-indigo-400">
                        {getIcon(selectedCategory.icon)}
                        <span className="font-bold text-sm tracking-widest uppercase">{selectedCategory.title}</span>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 md:p-8 grid gap-4 custom-scrollbar">
                    {selectedCategory.topics.map((topic) => (
                        <button
                            key={topic.id}
                            onClick={() => setSelectedTopic(topic)}
                            className="group flex items-center justify-between p-6 bg-slate-800/40 border border-slate-700/50 rounded-2xl hover:bg-slate-800 hover:border-indigo-500/50 hover:scale-[1.01] transition-all"
                        >
                            <div className="text-left">
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                                    {topic.title}
                                </h3>
                                <p className="text-slate-400 text-sm line-clamp-1">
                                    {topic.content}
                                </p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                <ChevronRight size={20} />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="grid md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {studyCategories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category)}
                    className="group relative overflow-hidden rounded-3xl p-8 bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-indigo-500/50 hover:scale-[1.02] shadow-xl hover:shadow-indigo-500/10 transition-all text-left"
                >
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <BookOpen size={80} className="text-indigo-400" />
                    </div>

                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                            {getIcon(category.icon)}
                        </div>

                        <h2 className="text-2xl font-black text-white mb-2 tracking-tight">
                            {category.title}
                        </h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {category.topics.length} ana konu ve güncel KPSS notları.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {category.topics.slice(0, 3).map(t => (
                                <span key={t.id} className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">
                                    {t.title}
                                </span>
                            ))}
                        </div>
                    </div>
                </button>
            ))}
        </div>
    );
}
