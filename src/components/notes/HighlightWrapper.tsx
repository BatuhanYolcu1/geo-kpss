'use client';

import { useState, useEffect, useRef } from 'react';
import { useUserStore } from '@/stores/userStore';
import { Plus, Trash2 } from 'lucide-react';
import type { Highlight } from '@/types';

interface HighlightWrapperProps {
    sectionId: string;
    contentHtml: string;
}

const COLORS = {
    yellow: 'bg-yellow-500/30 text-yellow-200 border-yellow-500/50',
    green: 'bg-emerald-500/30 text-emerald-200 border-emerald-500/50',
    pink: 'bg-rose-500/30 text-rose-200 border-rose-500/50',
};

export default function HighlightWrapper({ sectionId, contentHtml }: HighlightWrapperProps) {
    const { highlights, addHighlight, removeHighlight } = useUserStore();
    const [menuPos, setMenuPos] = useState<{ x: number; y: number } | null>(null);
    const [selectedText, setSelectedText] = useState('');
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [activeHighlightId, setActiveHighlightId] = useState<string | null>(null);
    const [deleteMenuPos, setDeleteMenuPos] = useState<{ x: number; y: number } | null>(null);

    // Filter highlights for this section
    const sectionHighlights = highlights.filter(h => h.sectionId === sectionId);

    // Apply highlights to HTML string
    // This is a naive approach: it replaces raw text in HTML, but we must be careful not to break tags.
    // For safety, we only replace text contents, not HTML tags. But using regex to avoid tags is tricky.
    // A safer way: we rely on users selecting normal text sentences that don't span across HTML structures.
    let processedHtml = contentHtml;

    sectionHighlights.forEach(hl => {
        // Escape regex characters in text
        const safeText = hl.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Simple replace - might fail if HTML intersects, but good enough for simple text blocks
        const regex = new RegExp(`(${safeText})`, 'g');
        const colorClass = COLORS[hl.color];

        processedHtml = processedHtml.replace(
            regex,
            `<mark data-hl-id="${hl.id}" class="${colorClass} px-1 rounded-md border-b-2 cursor-pointer transition-colors hover:brightness-110 bg-transparent" style="background-color: var(--tw-bg-opacity, 0.3) !important;">$1</mark>`
        );
    });

    // Handle text selection
    useEffect(() => {
        const handleMouseUp = (e: MouseEvent) => {
            const selection = window.getSelection();
            if (!selection || selection.isCollapsed) {
                // Determine if we clicked outside or on a highlight
                if (menuPos) {
                    setTimeout(() => setMenuPos(null), 100);
                }
                return;
            }

            // Only allow selection inside our wrapper
            if (wrapperRef.current && wrapperRef.current.contains(selection.anchorNode)) {
                const text = selection.toString().trim();
                // Minimum 5 chars to highlight
                if (text.length > 5) {
                    const range = selection.getRangeAt(0);
                    const rect = range.getBoundingClientRect();

                    setSelectedText(text);
                    setMenuPos({
                        x: rect.left + rect.width / 2,
                        y: rect.top - 10 + window.scrollY, // Position slightly above the selection
                    });
                }
            } else {
                setMenuPos(null);
            }
        };

        document.addEventListener('mouseup', handleMouseUp);
        return () => document.removeEventListener('mouseup', handleMouseUp);
    }, [menuPos]);

    // Handle highlight click for deletion
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName.toLowerCase() === 'mark' && target.hasAttribute('data-hl-id')) {
                const hlId = target.getAttribute('data-hl-id');
                if (hlId) {
                    const rect = target.getBoundingClientRect();
                    setActiveHighlightId(hlId);
                    setDeleteMenuPos({
                        x: rect.left + rect.width / 2,
                        y: rect.top - 10 + window.scrollY,
                    });
                }
            } else if (deleteMenuPos) {
                setDeleteMenuPos(null);
                setActiveHighlightId(null);
            }
        };

        const wrapper = wrapperRef.current;
        if (wrapper) {
            wrapper.addEventListener('click', handleClick);
        }

        return () => {
            if (wrapper) {
                wrapper.removeEventListener('click', handleClick);
            }
        };
    }, [deleteMenuPos]);


    const handleAddHighlight = (color: Highlight['color']) => {
        if (!selectedText) return;

        addHighlight({
            sectionId,
            text: selectedText,
            color,
        });

        // Clear selection
        window.getSelection()?.removeAllRanges();
        setMenuPos(null);
    };

    const handleDeleteHighlight = () => {
        if (activeHighlightId) {
            removeHighlight(activeHighlightId);
            setDeleteMenuPos(null);
            setActiveHighlightId(null);
        }
    };

    return (
        <div className="relative">
            <div
                ref={wrapperRef}
                dangerouslySetInnerHTML={{ __html: processedHtml }}
            />

            {/* Selection Popup Menu */}
            {menuPos && (
                <div
                    className="absolute z-[150] -translate-x-1/2 -translate-y-full bg-slate-800 border border-slate-700 p-2 rounded-xl shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200"
                    style={{ left: menuPos.x, top: menuPos.y }}
                >
                    <div className="text-xs font-bold text-slate-400 mr-2 flex items-center gap-1">
                        <Plus size={12} />
                        Vurgula
                    </div>
                    <button
                        onClick={() => handleAddHighlight('yellow')}
                        className="w-6 h-6 rounded-full bg-yellow-400 hover:scale-110 transition-transform shadow-lg shadow-yellow-500/30 border-2 border-slate-800"
                    />
                    <button
                        onClick={() => handleAddHighlight('green')}
                        className="w-6 h-6 rounded-full bg-emerald-400 hover:scale-110 transition-transform shadow-lg shadow-emerald-500/30 border-2 border-slate-800"
                    />
                    <button
                        onClick={() => handleAddHighlight('pink')}
                        className="w-6 h-6 rounded-full bg-rose-400 hover:scale-110 transition-transform shadow-lg shadow-rose-500/30 border-2 border-slate-800"
                    />
                    <div className="absolute w-3 h-3 bg-slate-800 border-b border-r border-slate-700 rotate-45 left-1/2 -translate-x-1/2 -bottom-1.5" />
                </div>
            )}

            {/* Delete Highlight Menu */}
            {deleteMenuPos && activeHighlightId && (
                <div
                    className="absolute z-[150] -translate-x-1/2 -translate-y-full bg-slate-800 border border-rose-500/30 p-2 rounded-xl shadow-2xl flex items-center gap-2 animate-in zoom-in-95 duration-200"
                    style={{ left: deleteMenuPos.x, top: deleteMenuPos.y }}
                >
                    <button
                        onClick={handleDeleteHighlight}
                        className="flex items-center gap-2 px-3 py-1.5 bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white rounded-lg transition-colors text-sm font-bold"
                    >
                        <Trash2 size={14} />
                        Vurguyu Kaldır
                    </button>
                    <div className="absolute w-3 h-3 bg-slate-800 border-b border-r border-rose-500/30 rotate-45 left-1/2 -translate-x-1/2 -bottom-1.5" />
                </div>
            )}
        </div>
    );
}
