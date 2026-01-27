'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen, Mountain, CloudRain, Users, TrendingUp } from 'lucide-react';
import { NoteUnit } from '@/types/notes';
import { useNotesStore } from '@/stores/notesStore';

interface NotesSidebarProps {
    units: NoteUnit[];
}

export default function NotesSidebar({ units }: NotesSidebarProps) {
    const { activeSectionId, setActiveSection, getProgress, completedSectionIds } = useNotesStore();
    const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({
        [units[0]?.id]: true
    });

    const toggleUnit = (unitId: string) => {
        setExpandedUnits(prev => ({
            ...prev,
            [unitId]: !prev[unitId]
        }));
    };

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Mountain': return <Mountain size={18} />;
            case 'CloudRain': return <CloudRain size={18} />;
            case 'Users': return <Users size={18} />;
            case 'TrendingUp': return <TrendingUp size={18} />;
            case 'Globe': return <BookOpen size={18} />;
            default: return <BookOpen size={18} />;
        }
    };

    return (
        <aside className="w-full h-full bg-slate-900/30 border-r border-slate-700/50 flex flex-col">
            <div className="p-6 border-b border-slate-700/50">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <BookOpen className="text-indigo-400" />
                    Müfredat
                </h2>
                <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-semibold italic">KPSS 2026 Hazırlık</p>
            </div>

            <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                <div className="space-y-4">
                    {/* General Overview Button */}
                    <button
                        onClick={() => setActiveSection(null)}
                        className={`
                            w-full flex items-center justify-between p-3 rounded-xl transition-all
                            ${activeSectionId === null
                                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                                : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}
                        `}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${activeSectionId === null ? 'bg-white/20' : 'bg-slate-700/50'}`}>
                                <TrendingUp size={18} />
                            </div>
                            <span className="font-bold text-sm">Müfredat Özeti</span>
                        </div>
                    </button>

                    <div className="h-px bg-slate-800/50 mx-2" />

                    {units.map((unit) => {
                        const isExpanded = expandedUnits[unit.id];
                        return (
                            <div key={unit.id} className="space-y-1">
                                <button
                                    onClick={() => toggleUnit(unit.id)}
                                    className={`
                                        w-full flex items-center justify-between p-3 rounded-xl transition-all
                                        ${isExpanded ? 'bg-slate-800/50 text-white border border-white/5' : 'hover:bg-slate-800/30 text-slate-400'}
                                    `}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg ${isExpanded ? 'bg-indigo-500 text-white' : 'bg-slate-700/50 text-slate-400'}`}>
                                            {getIcon(unit.icon)}
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <span className="font-bold text-sm text-left">{unit.title}</span>
                                            <div className="flex items-center gap-1.5 mt-0.5">
                                                <div className="w-12 h-1 bg-slate-700 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-emerald-500 transition-all duration-500"
                                                        style={{ width: `${getProgress(unit.sections)}%` }}
                                                    />
                                                </div>
                                                <span className="text-[10px] text-slate-500 font-bold">{getProgress(unit.sections)}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                </button>

                                {isExpanded && (
                                    <div className="pl-12 pr-2 py-1 space-y-1">
                                        {unit.sections.map((section) => (
                                            <button
                                                key={section.id}
                                                onClick={() => setActiveSection(section.id)}
                                                className={`
                                                    w-full text-left p-2.5 rounded-lg text-sm transition-all flex items-center justify-between
                                                    ${activeSectionId === section.id
                                                        ? 'bg-indigo-500/10 text-indigo-400 font-bold border-l-2 border-indigo-500 pl-4'
                                                        : 'text-slate-500 hover:text-slate-300 hover:pl-4'}
                                                `}
                                            >
                                                <span>{section.title}</span>
                                                {completedSectionIds.includes(section.id) && (
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </nav>
        </aside>
    );
}
