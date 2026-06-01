'use client';

import { Zap, Key } from 'lucide-react';

interface MnemonicBoxProps {
    title: string;
    text: string;
}

export default function MnemonicBox({ title, text }: MnemonicBoxProps) {
    return (
        <div className="my-8 relative overflow-hidden rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 backdrop-blur-sm group hover:bg-amber-500/10 transition-colors">
            {/* Background Icon */}
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Key size={120} className="text-amber-400" />
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-2 text-amber-500 font-bold mb-3 uppercase tracking-wider text-sm">
                    <Zap size={18} fill="currentColor" />
                    <span>Hafıza Teknikleri (Şifre)</span>
                </div>

                <h4 className="text-xl font-bold text-amber-700 mb-2">
                    {title}
                </h4>

                <p className="text-amber-800/80 font-medium italic leading-relaxed">
                    {text}
                </p>
            </div>
        </div>
    );
}
