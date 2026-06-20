'use client';

import { useState, useEffect } from 'react';
import { Flame, Target, CheckCircle2 } from 'lucide-react';
import { getStreak, getDailyProgress, type StreakData, type DailyProgress } from '@/lib/streak';

interface Props {
    compact?: boolean;
}

export default function StreakWidget({ compact = false }: Props) {
    const [streak, setStreak] = useState<StreakData | null>(null);
    const [progress, setProgress] = useState<DailyProgress | null>(null);

    useEffect(() => {
        const load = () => {
            setStreak(getStreak());
            setProgress(getDailyProgress());
        };
        load();

        window.addEventListener('storage', load);
        window.addEventListener('geo_goal_complete', load);
        window.addEventListener('geo_progress_update', load);
        return () => {
            window.removeEventListener('storage', load);
            window.removeEventListener('geo_goal_complete', load);
            window.removeEventListener('geo_progress_update', load);
        };
    }, []);

    if (!streak || !progress) return null;

    const pct = Math.min(100, Math.round((progress.answered / progress.goal) * 100));
    const done = progress.answered >= progress.goal;

    if (compact) {
        return (
            <div className="flex items-center gap-3">
                {/* Streak */}
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${streak.current > 0 ? 'bg-orange-50 border-orange-200' : 'bg-[#f0f5ee] border-[#abb4ac]/30'}`}>
                    <Flame size={14} className={streak.current > 0 ? 'text-orange-500' : 'text-[#747d75]'} />
                    <span className={`text-xs font-black tabular-nums ${streak.current > 0 ? 'text-orange-600' : 'text-[#747d75]'}`}>
                        {streak.current}
                    </span>
                </div>

                {/* Daily goal pill */}
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${done ? 'bg-emerald-50 border-emerald-200' : 'bg-[#f0f5ee] border-[#abb4ac]/30'}`}>
                    {done
                        ? <CheckCircle2 size={14} className="text-emerald-500" />
                        : <Target size={14} className="text-[#747d75]" />
                    }
                    <span className={`text-xs font-black tabular-nums ${done ? 'text-emerald-600' : 'text-[#747d75]'}`}>
                        {progress.answered}/{progress.goal}
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-[#abb4ac]/40 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-black text-[#2c342e] uppercase tracking-widest">Günlük Hedef</h3>
                {done && (
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Tamamlandı!
                    </span>
                )}
            </div>

            {/* Progress bar */}
            <div className="mb-4">
                <div className="flex justify-between text-xs text-[#59615a] font-semibold mb-1.5">
                    <span>{progress.answered} soru cevaplandı</span>
                    <span>Hedef: {progress.goal}</span>
                </div>
                <div className="h-2.5 bg-[#f0f5ee] rounded-full overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-500 ${done ? 'bg-emerald-500' : 'bg-[#386948]'}`}
                        style={{ width: `${pct}%` }}
                    />
                </div>
            </div>

            {/* Streak */}
            <div className="flex items-center gap-3 pt-3 border-t border-[#abb4ac]/20">
                <div className={`flex items-center gap-2 px-3 py-2 rounded-xl flex-1 ${streak.current > 0 ? 'bg-orange-50 border border-orange-200' : 'bg-[#f0f5ee]'}`}>
                    <Flame size={18} className={streak.current > 0 ? 'text-orange-500' : 'text-[#747d75]'} />
                    <div>
                        <div className={`text-lg font-black tabular-nums leading-none ${streak.current > 0 ? 'text-orange-600' : 'text-[#2c342e]'}`}>
                            {streak.current}
                        </div>
                        <div className="text-[10px] text-[#59615a] font-semibold">günlük seri</div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-xs text-[#747d75] font-semibold">En iyi</div>
                    <div className="text-base font-black text-[#2c342e]">{streak.longest}</div>
                </div>
            </div>
        </div>
    );
}
