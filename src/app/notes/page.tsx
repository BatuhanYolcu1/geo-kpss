'use client';

import { useState, useEffect } from 'react';
import { lectureNotes } from '@/data/notes-content';
import NotesSidebar from '@/components/notes/NotesSidebar';
import NoteContent from '@/components/notes/NoteContent';
import { Home, Menu, X, ArrowLeft, BookOpen, ChevronRight, Mountain, CloudRain, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function NotesPage() {
    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Find current section
    const currentSection = lectureNotes
        .flatMap(u => u.sections)
        .find(s => s.id === activeSectionId) || null;

    const handleSelectSection = (id: string | null) => {
        setActiveSectionId(id);
        setIsSidebarOpen(false); // Close on mobile
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen bg-[#050505] text-slate-200 flex overflow-hidden">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
                <NotesSidebar
                    units={lectureNotes}
                    activeSectionId={activeSectionId}
                    onSelectSection={handleSelectSection}
                />
            </div>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-[100] lg:hidden">
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                    <div className="absolute inset-y-0 left-0 w-80 bg-slate-900 border-r border-slate-700 animate-in slide-in-from-left duration-300">
                        <NotesSidebar
                            units={lectureNotes}
                            activeSectionId={activeSectionId}
                            onSelectSection={handleSelectSection}
                        />
                    </div>
                </div>
            )}

            {/* Content Area */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header / Mobile Nav */}
                <header className="h-16 border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-50">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="lg:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
                        >
                            <Menu size={24} />
                        </button>
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                        >
                            <ArrowLeft size={18} />
                            <span className="font-medium hidden sm:inline">Ana Sayfa</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-sm font-bold text-slate-400">Canlı Müfredat</span>
                    </div>
                </header>

                {/* Main Content Body */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="relative">
                        {/* Abstract Background Gradients */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute bottom-40 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

                        {currentSection ? (
                            <NoteContent section={currentSection} />
                        ) : (
                            /* Overview State */
                            <div className="max-w-5xl mx-auto px-6 py-12 animate-in fade-in duration-500">
                                <header className="mb-12">
                                    <h1 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                                        Müfredat Rehberi
                                    </h1>
                                    <p className="text-slate-400 text-lg max-w-2xl">
                                        KPSS Coğrafya konularını ünite bazlı inceleyin. Harita destekli notlar ve özel kodlamalarla çalışın.
                                    </p>
                                </header>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {lectureNotes.map((unit) => (
                                        <div
                                            key={unit.id}
                                            className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 hover:border-indigo-500/30 transition-all group"
                                        >
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                                    {unit.icon === 'Mountain' ? <Mountain size={24} /> : <CloudRain size={24} />}
                                                </div>
                                                <h2 className="text-2xl font-bold text-white leading-tight">
                                                    {unit.title}
                                                </h2>
                                            </div>

                                            <div className="space-y-3">
                                                {unit.sections.map((section) => (
                                                    <button
                                                        key={section.id}
                                                        onClick={() => handleSelectSection(section.id)}
                                                        className="w-full flex items-center justify-between p-4 bg-slate-800/30 border border-slate-700/30 rounded-2xl hover:bg-slate-800 hover:border-indigo-500/50 transition-all text-left"
                                                    >
                                                        <span className="font-medium text-slate-300 group-hover:text-white">{section.title}</span>
                                                        <ChevronRight size={18} className="text-slate-600" />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Pagination / Next */}
                        <div className="max-w-4xl mx-auto px-6 pb-20">
                            <footer className="pt-10 border-t border-slate-800 flex justify-between items-center text-sm text-slate-500">
                                <span>Geo-KPSS © 2026</span>
                                <div className="flex gap-4">
                                    <button className="hover:text-white transition-colors">KVKK</button>
                                    <button className="hover:text-white transition-colors">Geri Bildirim</button>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
