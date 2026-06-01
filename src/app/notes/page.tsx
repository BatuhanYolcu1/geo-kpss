'use client';

import { useState, useEffect } from 'react';
import { curriculum } from '@/data/curriculum';
import NotesSidebar from '@/components/notes/NotesSidebar';
import NoteContent from '@/components/notes/NoteContent';
import { Home, Menu, X, ArrowLeft, BookOpen, ChevronRight, Mountain, CloudRain, TrendingUp, Globe, Waves, Zap, Factory, MapPin, AlertTriangle, Users, Search } from 'lucide-react';
import Link from 'next/link';

const unitIconMap: Record<string, React.ReactNode> = {
    Globe: <Globe size={20} />,
    Mountain: <Mountain size={20} />,
    CloudRain: <CloudRain size={20} />,
    Users: <Users size={20} />,
    TrendingUp: <TrendingUp size={20} />,
    Zap: <Zap size={20} />,
    Factory: <Factory size={20} />,
    MapPin: <MapPin size={20} />,
    Waves: <Waves size={20} />,
    AlertTriangle: <AlertTriangle size={20} />,
};

export default function NotesPage() {
    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Tüm section'ları düz liste olarak al (arama için)
    const allSections = curriculum.flatMap(u =>
        u.sections.map(s => ({ ...s, unitTitle: u.title, unitIcon: u.icon }))
    );

    // Arama sonuçları
    const searchResults = searchQuery.trim().length > 1
        ? allSections.filter(s =>
            s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.content.toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 12)
        : [];

    // Find current section
    const currentSection = curriculum
        .flatMap(u => u.sections)
        .find(s => s.id === activeSectionId) || null;

    const handleSelectSection = (id: string | null) => {
        setActiveSectionId(id);
        setSearchQuery('');
        setIsSidebarOpen(false);
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
                <header className="border-b border-[#abb4ac]/40 bg-white/80 backdrop-blur-md px-4 lg:px-6 sticky top-0 z-50">
                    <div className="h-14 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 shrink-0">
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="lg:hidden p-2 hover:bg-[#f0f5ee] rounded-lg transition-colors"
                            >
                                <Menu size={22} />
                            </button>
                            <Link
                                href="/"
                                className="flex items-center gap-1.5 text-[#59615a] hover:text-[#2c342e] transition-colors"
                            >
                                <ArrowLeft size={16} />
                                <span className="font-medium text-sm hidden sm:inline">Ana Sayfa</span>
                            </Link>
                        </div>

                        {/* Arama Kutusu */}
                        <div className="flex-1 max-w-md relative">
                            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#747d75]" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={e => { setSearchQuery(e.target.value); setActiveSectionId(null); }}
                                placeholder="Konu ara... (Kızılırmak, horst, nadas...)"
                                className="w-full pl-8 pr-8 py-2 text-sm bg-[#f0f5ee] border border-[#abb4ac]/40 rounded-xl focus:outline-none focus:border-[#386948]/60 focus:bg-white transition-all text-[#2c342e] placeholder:text-[#747d75]"
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#747d75] hover:text-[#2c342e]">
                                    <X size={14} />
                                </button>
                            )}
                        </div>

                        <div className="hidden sm:flex items-center gap-2 shrink-0">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <span className="text-xs font-bold text-[#59615a]">Canlı</span>
                        </div>
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
                        ) : searchResults.length > 0 ? (
                            /* Arama Sonuçları */
                            <div className="max-w-3xl mx-auto px-6 py-8 animate-in fade-in duration-300">
                                <p className="text-sm text-[#59615a] mb-4 font-medium">
                                    <span className="text-[#386948] font-bold">{searchResults.length}</span> sonuç bulundu: &ldquo;{searchQuery}&rdquo;
                                </p>
                                <div className="space-y-2">
                                    {searchResults.map(s => (
                                        <button
                                            key={s.id}
                                            onClick={() => handleSelectSection(s.id)}
                                            className="w-full flex items-center gap-3 p-4 bg-white border border-[#abb4ac]/40 rounded-2xl hover:border-[#386948]/50 hover:bg-[#f0f5ee] transition-all text-left group"
                                        >
                                            <div className="w-8 h-8 bg-[#386948]/10 rounded-xl flex items-center justify-center text-[#386948] shrink-0">
                                                {unitIconMap[s.unitIcon] ?? <BookOpen size={16} />}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="font-semibold text-[#2c342e] text-sm truncate">{s.title}</div>
                                                <div className="text-xs text-[#747d75]">{s.unitTitle}</div>
                                            </div>
                                            <ChevronRight size={16} className="text-[#747d75] group-hover:text-[#386948] shrink-0 transition-colors" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : searchQuery.trim().length > 1 ? (
                            /* Sonuç Yok */
                            <div className="max-w-3xl mx-auto px-6 py-16 text-center animate-in fade-in duration-300">
                                <Search size={40} className="mx-auto text-[#abb4ac] mb-4" />
                                <p className="text-[#59615a] font-medium">&ldquo;{searchQuery}&rdquo; için sonuç bulunamadı.</p>
                                <p className="text-sm text-[#747d75] mt-1">Farklı anahtar kelimeler deneyin.</p>
                            </div>
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
                                                    {unitIconMap[unit.icon] ?? <BookOpen size={24} />}
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
