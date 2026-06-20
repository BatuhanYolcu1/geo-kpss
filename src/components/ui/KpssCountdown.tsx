'use client';

import { useState, useEffect } from 'react';
import { Timer, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface ExamDate {
    label: string;
    date: Date;
    color: string;
    textColor: string;
    borderColor: string;
}

const EXAM_DATES: ExamDate[] = [
    {
        label: 'KPSS Lisans',
        date: new Date('2026-06-28T09:00:00'),
        color: 'bg-rose-50',
        textColor: 'text-rose-700',
        borderColor: 'border-rose-200',
    },
    {
        label: 'KPSS Önlisans',
        date: new Date('2026-09-27T09:00:00'),
        color: 'bg-amber-50',
        textColor: 'text-amber-700',
        borderColor: 'border-amber-200',
    },
];

function pad(n: number) {
    return String(n).padStart(2, '0');
}

function getTimeLeft(target: Date) {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return null;
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    return { days, hours, minutes, seconds };
}

export default function KpssCountdown() {
    const [ticks, setTicks] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setTicks(t => t + 1), 1000);
        return () => clearInterval(id);
    }, []);

    const upcoming = EXAM_DATES.map(e => ({ ...e, left: getTimeLeft(e.date) })).filter(e => e.left !== null);
    if (upcoming.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-3 justify-center">
            {upcoming.map(exam => {
                const { days, hours, minutes, seconds } = exam.left!;
                const isUrgent = days < 30;
                return (
                    <div
                        key={exam.label}
                        className={`flex items-center gap-3 px-4 py-3 rounded-2xl border ${exam.color} ${exam.borderColor} min-w-0`}
                    >
                        <div className={`flex items-center gap-1.5 shrink-0`}>
                            <Timer size={14} className={exam.textColor} />
                            <span className={`text-xs font-black uppercase tracking-widest ${exam.textColor}`}>
                                {exam.label}
                            </span>
                        </div>

                        <div className="flex items-center gap-1 font-black tabular-nums">
                            {days > 0 && (
                                <>
                                    <span className={`text-lg sm:text-xl ${isUrgent ? 'text-rose-600 animate-pulse' : exam.textColor}`}>
                                        {days}
                                    </span>
                                    <span className={`text-xs ${exam.textColor} opacity-70 mr-1`}>gün</span>
                                </>
                            )}
                            <span className={`text-base sm:text-lg ${exam.textColor}`}>{pad(hours)}</span>
                            <span className={`text-base opacity-60 ${exam.textColor}`}>:</span>
                            <span className={`text-base sm:text-lg ${exam.textColor}`}>{pad(minutes)}</span>
                            <span className={`text-base opacity-60 ${exam.textColor}`}>:</span>
                            <span className={`text-base sm:text-lg ${exam.textColor}`}>{pad(seconds)}</span>
                        </div>

                        <Link
                            href="/quiz"
                            className={`shrink-0 flex items-center gap-1 text-xs font-bold ${exam.textColor} hover:opacity-70 transition-opacity`}
                        >
                            Çalış <ChevronRight size={12} />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
