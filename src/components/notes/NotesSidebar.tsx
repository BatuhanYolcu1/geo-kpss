'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen, Mountain, CloudRain, Users, TrendingUp, Globe, Waves, Zap, Factory, MapPin, AlertTriangle } from 'lucide-react';
import { NoteUnit } from '@/types/notes';

interface NotesSidebarProps {
    units: NoteUnit[];
    activeSectionId: string | null;
    onSelectSection: (id: string | null) => void;
}

export default function NotesSidebar({ units, activeSectionId, onSelectSection }: NotesSidebarProps) {
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
            case 'Globe': return <Globe size={18} />;
            case 'Waves': return <Waves size={18} />;
            case 'Zap': return <Zap size={18} />;
            case 'Factory': return <Factory size={18} />;
            case 'MapPin': return <MapPin size={18} />;
            case 'AlertTriangle': return <AlertTriangle size={18} />;
            default: return <BookOpen size={18} />;
        }
    };

    return (
        <aside className="w-full h-full bg-white border-r border-[#abb4ac]/40 flex flex-col">
            <div className="p-6 border-b border-[#abb4ac]/40">
                <h2 className="text-xl font-bold text-[#2c342e] flex items-center gap-2">
                    <BookOpen className="text-[#386948]" />
                    Müfredat
                </h2>
                <p className="text-xs text-[#59615a] mt-1 uppercase tracking-widest font-semibold italic">KPSS 2026 Hazırlık</p>
            </div>

            <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                <div className="space-y-4">
                    {/* General Overview Button */}
                    <button
                        onClick={() => onSelectSection(null)}
                        className={`
                            w-full flex items-center justify-between p-3 rounded-xl transition-all
                            ${activeSectionId === null
                                ? 'bg-[#386948] text-white shadow-lg shadow-[#386948]/20'
                                : 'text-[#59615a] hover:bg-[#f0f5ee] hover:text-[#2c342e]'}
                        `}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${activeSectionId === null ? 'bg-white/20' : 'bg-[#e9f0e8]'}`}>
                                <TrendingUp size={18} />
                            </div>
                            <span className="font-bold text-sm">Müfredat Özeti</span>
                        </div>
                    </button>

                    <div className="h-px bg-[#abb4ac]/30 mx-2" />

                    {units.map((unit) => {
                        const isExpanded = expandedUnits[unit.id];
                        return (
                            <div key={unit.id} className="space-y-1">
                                <button
                                    onClick={() => toggleUnit(unit.id)}
                                    className={`
                                        w-full flex items-center justify-between p-3 rounded-xl transition-all
                                        ${isExpanded ? 'bg-[#f0f5ee] text-[#2c342e] border border-[#abb4ac]/30' : 'hover:bg-[#f0f5ee] text-[#59615a]'}
                                    `}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg ${isExpanded ? 'bg-[#386948] text-white' : 'bg-[#e9f0e8] text-[#59615a]'}`}>
                                            {getIcon(unit.icon)}
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <span className="font-bold text-sm text-center">{unit.title}</span>
                                        </div>
                                    </div>
                                    {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                </button>

                                {isExpanded && (
                                    <div className="pl-12 pr-2 py-1 space-y-1">
                                        {unit.sections.map((section) => (
                                            <button
                                                key={section.id}
                                                onClick={() => onSelectSection(section.id)}
                                                className={`
                                                    w-full text-left p-2.5 rounded-lg text-sm transition-all flex items-center justify-between
                                                    ${activeSectionId === section.id
                                                        ? 'bg-[#386948]/10 text-[#386948] font-bold border-l-2 border-[#386948] pl-4'
                                                        : 'text-[#59615a] hover:text-[#2c342e] hover:pl-4'}
                                                `}
                                            >
                                                <span>{section.title}</span>
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
