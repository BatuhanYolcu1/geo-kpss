'use client';

import { useEffect, useState } from 'react';
import { List } from 'lucide-react';

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    contentHtml: string;
}

export default function TableOfContents({ contentHtml }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>('');
    const [headings, setHeadings] = useState<TOCItem[]>([]);

    useEffect(() => {
        // Parse the markdown-like content to find headers
        const lines = contentHtml.split('\n');
        const extractedHeadings: TOCItem[] = [];

        lines.forEach(line => {
            const h2Match = line.match(/^##\s+(.+)$/);
            const h3Match = line.match(/^###\s+(.+)$/);

            if (h2Match) {
                const text = h2Match[1];
                extractedHeadings.push({ id: text.trim().replace(/\s+/g, '-').toLowerCase(), text, level: 2 });
            } else if (h3Match) {
                const text = h3Match[1];
                extractedHeadings.push({ id: text.trim().replace(/\s+/g, '-').toLowerCase(), text, level: 3 });
            }
        });

        setHeadings(extractedHeadings);
    }, [contentHtml]);

    useEffect(() => {
        if (headings.length === 0) return;

        const handleScroll = () => {
            const headingElements = headings.map(h => document.getElementById(h.id)).filter(Boolean) as HTMLElement[];
            if (headingElements.length === 0) return;

            // Find the heading that is closest to the top of the viewport
            let currentActiveId = headingElements[0].id;
            for (const el of headingElements) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 100) {
                    currentActiveId = el.id;
                } else {
                    break;
                }
            }
            setActiveId(currentActiveId);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, [headings]);

    const scrollToHeading = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80; // offset for sticky header
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    if (headings.length === 0) return null;

    return (
        <div className="hidden xl:block fixed top-32 right-8 w-64 max-h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar p-6 bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-700/50 shadow-2xl animate-in fade-in slide-in-from-right-8 duration-700">
            <h4 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2 mb-6">
                <List size={16} className="text-indigo-400" />
                İÇİNDEKİLER
            </h4>
            <nav className="flex flex-col gap-3">
                {headings.map((heading) => {
                    const isActive = activeId === heading.id;
                    return (
                        <a
                            key={heading.id}
                            href={`#${heading.id}`}
                            onClick={(e) => scrollToHeading(e, heading.id)}
                            className={`
                                text-sm transition-all duration-300 block line-clamp-2
                                ${heading.level === 3 ? 'ml-4' : 'font-bold'}
                                ${isActive
                                    ? 'text-indigo-400 translate-x-1'
                                    : 'text-slate-500 hover:text-slate-300'}
                            `}
                        >
                            {heading.text}
                        </a>
                    );
                })}
            </nav>
        </div>
    );
}
