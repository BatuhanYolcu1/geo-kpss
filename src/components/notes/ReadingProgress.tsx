'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const currentScrollY = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (scrollHeight > 0) {
                const calculatedProgress = (currentScrollY / scrollHeight) * 100;
                setProgress(Math.min(100, Math.max(0, calculatedProgress)));
            } else {
                setProgress(0);
            }
        };

        window.addEventListener('scroll', updateProgress, { passive: true });
        // Initial call
        updateProgress();

        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[3px] z-[100] bg-slate-800/50">
            <div
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
