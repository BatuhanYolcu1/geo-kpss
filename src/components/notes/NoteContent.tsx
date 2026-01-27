'use client';

import {
    Map as MapIcon,
    AlertTriangle,
    ArrowRight,
    ExternalLink,
    Lightbulb,
    Target,
    CheckCircle2,
    CheckCircle
} from 'lucide-react';
import { NoteSection } from '@/types/notes';
import MnemonicBox from './MnemonicBox';
import Link from 'next/link';

interface NoteContentProps {
    section: NoteSection | null;
}

export default function NoteContent({ section }: NoteContentProps) {
    if (!section) return null;

    const renderAtlasButton = () => {
        if (!section.atlasLink) return null;

        const href = '/atlas';
        const params = new URLSearchParams();

        if (section.atlasLink.layerId) params.append('layer', section.atlasLink.layerId);
        if (section.atlasLink.featureId) params.append('focus', section.atlasLink.featureId);
        if (section.atlasLink.coords) {
            params.append('lat', section.atlasLink.coords.lat.toString());
            params.append('lng', section.atlasLink.coords.lng.toString());
            params.append('zoom', section.atlasLink.coords.zoom.toString());
        }

        const fullHref = `${href}?${params.toString()}`;

        return (
            <Link
                href={fullHref}
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 group no-underline"
            >
                <MapIcon size={20} className="group-hover:rotate-12 transition-transform" />
                <span>Bu Konuyu Atlas&apos;ta Gör</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        );
    };

    return (
        <article className="max-w-4xl mx-auto py-12 px-6 animate-in fade-in duration-500">
            {/* Header */}
            <header className="mb-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
                    <ExternalLink size={14} />
                    <span>Ders Notları</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white bg-gradient-to-r from-white via-white to-slate-500 bg-clip-text text-transparent mb-4">
                    {section.title}
                </h1>
                <div className="h-1.5 w-24 bg-indigo-500 mx-auto rounded-full" />
            </header>

            {/* Main Reading Area */}
            <div className="prose prose-invert prose-lg max-w-none 
                prose-headings:text-indigo-300 prose-headings:font-bold
                prose-p:text-slate-300 prose-p:leading-relaxed
                prose-strong:text-white prose-strong:font-black
                prose-li:text-slate-300
                prose-code:text-indigo-400
                mb-12"
            >
                {/* Simplified Markdown-like rendering (using dangerouslySetInnerHTML for the mock content strings) */}
                {/* In a real app, you'd use a markdown parser here. We'll format the string slightly. */}
                <div dangerouslySetInnerHTML={{
                    __html: section.content
                        .replace(/^### (.*$)/gim, '<h3 class="mt-8 mb-4 text-2xl">$1</h3>')
                        .replace(/^## (.*$)/gim, '<h2 class="mt-10 mb-6 text-3xl">$1</h2>')
                        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
                        .replace(/\n/gim, '<br />')
                }} />
            </div>

            {/* Mnemonic Boxes */}
            {section.mnemonics?.map((mnemonic, idx) => (
                <MnemonicBox key={idx} title={mnemonic.title} text={mnemonic.text} />
            ))}

            {/* Warnings */}
            {section.warnings && section.warnings.length > 0 && (
                <div className="my-10 p-6 rounded-2xl border-l-4 border-rose-500 bg-rose-500/5 backdrop-blur-sm shadow-lg shadow-rose-950/10">
                    <h5 className="flex items-center gap-2 text-rose-400 font-bold mb-4 text-lg">
                        <AlertTriangle size={20} />
                        Dikkat! Sınavda Çıkabilir
                    </h5>
                    <ul className="space-y-3">
                        {section.warnings.map((warning, i) => (
                            <li key={i} className="flex gap-3 text-slate-300">
                                <span className="text-rose-500 mt-1">•</span>
                                <span>{warning}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Teacher Notes (Hoca Notu) */}
            {section.teacherNotes && section.teacherNotes.length > 0 && (
                <div className="my-10 p-6 rounded-2xl border-l-4 border-indigo-500 bg-indigo-500/5 backdrop-blur-sm shadow-lg shadow-indigo-950/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 opacity-10">
                        <Lightbulb size={64} className="text-indigo-400" />
                    </div>
                    <h5 className="flex items-center gap-2 text-indigo-400 font-bold mb-4 text-lg">
                        <Lightbulb size={20} />
                        Hoca Notu & Püf Noktaları
                    </h5>
                    <ul className="space-y-4">
                        {section.teacherNotes.map((note, i) => (
                            <li key={i} className="flex gap-3 text-slate-200">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                                <span className="italic">{note}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Exam Analysis (Soru Analizi) */}
            {section.examAnalysis && (
                <div className="my-10 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 shadow-lg shadow-amber-950/10">
                    <h5 className="flex items-center gap-2 text-amber-500 font-bold mb-4 text-lg">
                        <Target size={20} />
                        KPSS Soru Analizi
                    </h5>
                    <div className="text-slate-300 leading-relaxed bg-amber-500/5 p-4 rounded-xl border border-amber-500/10">
                        {section.examAnalysis}
                    </div>
                </div>
            )}

            {/* Key Points Checklist (Kritik Özet) */}
            {section.keyPoints && section.keyPoints.length > 0 && (
                <div className="my-10 p-8 rounded-3xl bg-slate-900/60 border border-slate-700/50 shadow-2xl">
                    <h5 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                        <CheckCircle2 size={24} className="text-emerald-500" />
                        Bu Konuda Bunları Bilelim
                    </h5>
                    <div className="grid md:grid-cols-2 gap-4">
                        {section.keyPoints.map((point, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/5 group hover:border-emerald-500/30 transition-all">
                                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                    <CheckCircle size={14} />
                                </div>
                                <span className="text-slate-300 text-sm font-medium">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Atlas Integration Button */}
            <div className="mt-12 p-8 rounded-3xl bg-slate-800/50 border border-slate-700/50 text-center">
                <h4 className="text-xl font-bold text-white mb-2">Harita Üzerinden Çalışın</h4>
                <p className="text-slate-400 mb-8 max-w-sm mx-auto">
                    Bu konudaki tüm coğrafi özellikleri interaktif harita üzerinde inceleyerek görsel hafızanızı güçlendirin.
                </p>
                {renderAtlasButton()}
            </div>
        </article>
    );
}
