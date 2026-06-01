'use client';

import { useState, useEffect } from 'react';
import { curriculum } from '@/data/curriculum';
import NotesSidebar from '@/components/notes/NotesSidebar';
import NoteContent from '@/components/notes/NoteContent';
import { Home, Menu, X, ArrowLeft, BookOpen, ChevronRight, Mountain, CloudRain, TrendingUp, Globe } from 'lucide-react';
import Link from 'next/link';

export default function NotesPage() {
    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Find current section
    const currentSection = curriculum
        .flatMap(u => u.sections)
        .find(s => s.id === activeSectionId) || null;

    const handleSelectSection = (id: string | null) => {
        setActiveSectionId(id);
        setIsSidebarOpen(false); // Close on mobile
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen bg-[#f7faf4] text-[#2c342e] flex overflow-hidden">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
                <NotesSidebar
                    units={curriculum}
                    activeSectionId={activeSectionId}
                    onSelectSection={handleSelectSection}
                />
            </div>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-[100] lg:hidden">
                    <div
                        className="absolute inset-0 bg-[#2c342e]/40 backdrop-blur-sm"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                    <div className="absolute inset-y-0 left-0 w-80 bg-white border-r border-[#abb4ac]/40 animate-in slide-in-from-left duration-300">
                        <NotesSidebar
                            units={curriculum}
                            activeSectionId={activeSectionId}
                            onSelectSection={handleSelectSection}
                        />
                    </div>
                </div>
            )}

            {/* Content Area */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header / Mobile Nav */}
                <header className="h-16 border-b border-[#abb4ac]/40 bg-white/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-50">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="lg:hidden p-2 hover:bg-[#f0f5ee] rounded-lg transition-colors"
                        >
                            <Menu size={24} />
                        </button>
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-[#59615a] hover:text-[#2c342e] transition-colors"
                        >
                            <ArrowLeft size={18} />
                            <span className="font-medium hidden sm:inline">Ana Sayfa</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-sm font-bold text-[#59615a]">Canlı Müfredat</span>
                    </div>
                </header>

                {/* Main Content Body */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="relative">
                        {/* Abstract Background Gradients */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#b9efc5]/20 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute bottom-40 left-0 w-96 h-96 bg-[#e9f0e8]/40 rounded-full blur-[120px] pointer-events-none" />

                        {currentSection ? (
                            <NoteContent section={currentSection} />
                        ) : (
                            /* Overview State */
                            <div className="max-w-5xl mx-auto px-6 py-12 animate-in fade-in duration-500">
                                <header className="mb-12">
                                    <h1 className="text-4xl font-black mb-4 bg-gradient-to-r from-[#2c342e] to-[#59615a] bg-clip-text text-transparent">
                                        Müfredat Rehberi
                                    </h1>
                                    <p className="text-[#59615a] text-lg max-w-2xl">
                                        KPSS Coğrafya konularını ünite bazlı inceleyin. Harita destekli notlar ve özel kodlamalarla çalışın.
                                    </p>
                                </header>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {curriculum.map((unit) => (
                                        <div
                                            key={unit.id}
                                            className="bg-white border border-[#abb4ac]/40 rounded-3xl p-8 hover:border-[#386948]/30 transition-all group"
                                        >
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 bg-[#386948]/10 rounded-2xl flex items-center justify-center text-[#386948] group-hover:bg-[#386948] group-hover:text-white transition-all">
                                                    {unit.icon === 'Mountain' ? <Mountain size={24} /> : unit.icon === 'Globe' ? <Globe size={24} /> : <CloudRain size={24} />}
                                                </div>
                                                <h2 className="text-2xl font-bold text-[#2c342e] leading-tight">
                                                    {unit.title}
                                                </h2>
                                            </div>

                                            <div className="space-y-3">
                                                {unit.sections.map((section) => (
                                                    <button
                                                        key={section.id}
                                                        onClick={() => handleSelectSection(section.id)}
                                                        className="w-full flex items-center justify-between p-4 bg-[#f0f5ee] border border-[#abb4ac]/30 rounded-2xl hover:bg-[#e9f0e8] hover:border-[#386948]/50 transition-all text-left"
                                                    >
                                                        <span className="font-medium text-[#2c342e]">{section.title}</span>
                                                        <ChevronRight size={18} className="text-[#747d75]" />
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
                            <footer className="pt-10 border-t border-[#abb4ac]/40 flex justify-between items-center text-sm text-[#59615a]">
                                <span>Geo-KPSS © 2026</span>
                                <div className="flex gap-4">
                                    <button className="hover:text-[#2c342e] transition-colors">KVKK</button>
                                    <button className="hover:text-[#2c342e] transition-colors">Geri Bildirim</button>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
