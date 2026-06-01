'use client';

import { AlertTriangle, Target } from 'lucide-react';

interface ExamAlertProps {
    title?: string;
    children: React.ReactNode;
}

export default function ExamAlert({ title = 'ÖSYM Uyarısı', children }: ExamAlertProps) {
    return (
        <div className="my-10 p-6 rounded-2xl border-2 border-rose-500/30 bg-rose-500/5 backdrop-blur-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500" />

            <div className="flex items-center gap-2 text-rose-500 font-black mb-4 uppercase tracking-widest text-sm">
                <Target size={20} />
                <span>{title}</span>
            </div>

            <div className="text-[#2c342e] font-medium leading-relaxed italic">
                {children}
            </div>
        </div>
    );
}
