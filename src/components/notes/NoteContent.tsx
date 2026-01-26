'use client';

import {
    Map as MapIcon,
    AlertTriangle,
    ArrowRight,
    ExternalLink
} from 'lucide-react';
import { NoteSection } from '@/types/notes';
import MnemonicBox from './MnemonicBox';
import Link from 'next/link';

interface NoteContentProps {
    section: NoteSection;
}

export default function NoteContent({ section }: NoteContentProps) {

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
                <div className="my-10 p-6 rounded-2xl border-l-4 border-rose-500 bg-rose-500/5 backdrop-blur-sm">
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
