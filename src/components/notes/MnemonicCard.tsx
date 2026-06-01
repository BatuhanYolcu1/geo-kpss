'use client';

import { Lightbulb } from 'lucide-react';

interface MnemonicCardProps {
    title: string;
    text: string;
}

export default function MnemonicCard({ title, text }: MnemonicCardProps) {
    return (
        <div className="my-8 p-6 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-500/5 border border-amber-500/30 shadow-xl shadow-amber-950/10 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                <Lightbulb size={96} />
            </div>

            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/30">
                    <Lightbulb size={24} />
                </div>
                <h5 className="text-lg font-black text-amber-500 tracking-tight uppercase">
                    {title} (KODLAMA)
                </h5>
            </div>

            <div className="bg-white/60 backdrop-blur-md p-5 rounded-xl border border-amber-500/10">
                <p className="text-xl font-black text-[#2c342e] leading-relaxed tracking-wide text-center">
                    {text}
                </p>
            </div>
        </div>
    );
}
