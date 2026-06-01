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
        <div className="fixed top-0 left-0 w-full h-[3px] z-[100] bg-[#abb4ac]/20">
            <div
                className="h-full bg-gradient-to-r from-[#386948] to-[#b9efc5] transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
