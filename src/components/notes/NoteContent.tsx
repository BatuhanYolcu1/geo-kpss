'use client';

import {
    Map as MapIcon,
    ArrowRight,
    ExternalLink,
    Lightbulb,
    Target,
    CheckCircle2,
    CheckCircle,
    ChevronRight,
    Check
} from 'lucide-react';
import { NoteSection } from '@/types/notes';
import MnemonicCard from './MnemonicCard';
import ExamAlert from './ExamAlert';
import Link from 'next/link';
import { useNotesStore } from '@/stores/notesStore';

interface NoteContentProps {
    section: NoteSection | null;
}

export default function NoteContent({ section }: NoteContentProps) {
    const { markAsRead, completedSectionIds } = useNotesStore();

    if (!section) return null;

    const isRead = completedSectionIds.includes(section.id);

    const renderAtlasButton = () => {
        if (!section.atlasLink) return null;

        const params = new URLSearchParams();
        if (section.atlasLink.layerId) params.append('layer', section.atlasLink.layerId);
        if (section.atlasLink.focus) params.append('focus', section.atlasLink.focus);
        if (section.atlasLink.coords) {
            params.append('lat', section.atlasLink.coords.lat.toString());
            params.append('lng', section.atlasLink.coords.lng.toString());
            params.append('zoom', section.atlasLink.coords.zoom.toString());
        }

        const fullHref = `/atlas?${params.toString()}`;

        return (
            <Link
                href={fullHref}
                className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black transition-all shadow-xl shadow-indigo-500/30 group no-underline"
            >
                <MapIcon size={24} className="group-hover:rotate-12 transition-transform" />
                <span>KONUYU HARİTADA GÖR</span>
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        );
    };

    return (
        <article className="max-w-4xl mx-auto py-12 px-6 animate-in fade-in duration-700">
            {/* Header */}
            <header className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                    <div className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] font-black uppercase tracking-widest">
                        KPSS 2026 MÜFREDATI
                    </div>
                    {isRead && (
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                            <Check size={12} />
                            TAMAMLANDI
                        </div>
                    )}
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                    {section.title}
                </h1>
                <div className="h-2 w-32 bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.5)]" />
            </header>

            {/* Main Reading Area - Prosed optimized for readability */}
            <div className="prose prose-slate dark:prose-invert prose-lg max-w-none 
                prose-headings:text-indigo-400 prose-headings:font-black
                prose-p:text-slate-300 prose-p:leading-[1.8]
                prose-strong:text-white prose-strong:font-black
                prose-blockquote:border-indigo-500 prose-blockquote:bg-indigo-500/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
                mb-16"
            >
                <div dangerouslySetInnerHTML={{
                    __html: section.content
                        .replace(/^### (.*$)/gim, '<h3 class="mt-12 mb-6">$1</h3>')
                        .replace(/^## (.*$)/gim, '<h2 class="mt-16 mb-8 text-3xl font-black text-white">$1</h2>')
                        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
                        .replace(/\n/gim, '<br />')
                }} />
            </div>

            {/* Mnemonic Cards */}
            {section.mnemonics?.map((mnemonic, idx) => (
                <MnemonicCard key={idx} title={mnemonic.title} text={mnemonic.text} />
            ))}

            {/* Warnings / Exam Alerts */}
            {section.warnings?.map((warning, i) => (
                <ExamAlert key={i}>{warning}</ExamAlert>
            ))}

            {/* Teacher Notes */}
            {section.teacherNotes && section.teacherNotes.length > 0 && (
                <div className="my-12 p-8 rounded-3xl bg-indigo-500/5 border border-indigo-500/20 relative overflow-hidden group">
                    <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                        <Lightbulb size={200} className="text-indigo-400" />
                    </div>
                    <h5 className="flex items-center gap-3 text-indigo-400 font-black mb-6 text-xl uppercase tracking-tighter">
                        <Lightbulb size={28} />
                        HOCA NOTLARI & TÜYOLAR
                    </h5>
                    <div className="space-y-6">
                        {section.teacherNotes.map((note, i) => (
                            <div key={i} className="flex gap-4 group/item">
                                <div className="mt-2 w-2 h-2 rounded-full bg-indigo-500 shrink-0 group-hover/item:scale-150 transition-transform" />
                                <p className="text-slate-200 text-lg leading-relaxed italic">{note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Key Points Checklist */}
            {section.keyPoints && section.keyPoints.length > 0 && (
                <div className="my-12 p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-emerald-500 rounded-full text-white text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-emerald-500/40">
                        KRİTİK ÖZET
                    </div>
                    <h5 className="text-2xl font-black text-white mb-8 text-center">Bu Konuda Bunları Bilelim</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                        {section.keyPoints.map((point, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-emerald-500/5">
                                <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span className="text-slate-300 font-bold leading-snug">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Action Area: Mark as Read & Atlas */}
            <div className="mt-20 flex flex-col items-center gap-12 py-16 border-t border-slate-800">
                {!isRead ? (
                    <button
                        onClick={() => markAsRead(section.id)}
                        className="w-full max-w-sm py-5 bg-white text-slate-950 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all shadow-xl shadow-white/5 active:scale-95 flex items-center justify-center gap-3"
                    >
                        KONUYU BİTİRDİM <CheckCircle size={24} />
                    </button>
                ) : (
                    <div className="flex items-center gap-3 text-emerald-500 font-black text-lg bg-emerald-500/10 px-8 py-4 rounded-2xl border border-emerald-500/30">
                        <CheckCircle2 size={24} /> BU KONU ÇALIŞILDI
                    </div>
                )}

                <div className="text-center">
                    <p className="text-slate-500 font-bold mb-6 text-sm tracking-widest uppercase">HARİTA ENTEGRASYONU</p>
                    {renderAtlasButton()}
                </div>
            </div>
        </article>
    );
}
