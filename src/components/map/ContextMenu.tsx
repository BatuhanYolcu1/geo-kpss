'use client';

import { useEffect, useRef, useState } from 'react';
import { StickyNote, MapPin, X } from 'lucide-react';
import { useUserStore } from '@/stores/userStore';

interface ContextMenuProps {
    x: number;
    y: number;
    lat: number;
    lng: number;
    onClose: () => void;
}

export default function ContextMenu({ x, y, lat, lng, onClose }: ContextMenuProps) {
    const menuRef = useRef<HTMLDivElement>(null);
    const [showNoteForm, setShowNoteForm] = useState(false);
    const [noteText, setNoteText] = useState('');
    const addNote = useUserStore((state) => state.addNote);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    // Adjust position to stay within viewport
    const adjustedX = Math.min(x, window.innerWidth - 220);
    const adjustedY = Math.min(y, window.innerHeight - (showNoteForm ? 200 : 120));

    const handleAddNote = () => {
        if (noteText.trim()) {
            addNote({
                lat,
                lng,
                text: noteText.trim(),
            });
            setNoteText('');
            onClose();
        }
    };

    return (
        <div
            ref={menuRef}
            className="context-menu glass rounded-xl shadow-2xl overflow-hidden"
            style={{
                left: adjustedX,
                top: adjustedY,
            }}
        >
            {!showNoteForm ? (
                <>
                    {/* Header with coordinates */}
                    <div className="px-3 py-2 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <MapPin size={12} />
                            <span>{lat.toFixed(4)}, {lng.toFixed(4)}</span>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="p-1">
                        <button
                            onClick={() => setShowNoteForm(true)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-primary/10 rounded-lg transition-colors text-left"
                        >
                            <StickyNote size={18} className="text-amber-500" />
                            <div>
                                <p className="font-medium text-sm">Not Ekle</p>
                                <p className="text-xs text-slate-500">Bu konuma not bırak</p>
                            </div>
                        </button>
                    </div>
                </>
            ) : (
                /* Note Form */
                <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm flex items-center gap-2">
                            <StickyNote size={16} className="text-amber-500" />
                            Yeni Not
                        </h4>
                        <button
                            onClick={() => setShowNoteForm(false)}
                            className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                        >
                            <X size={16} />
                        </button>
                    </div>

                    <div className="text-xs text-slate-500 mb-2 flex items-center gap-1">
                        <MapPin size={10} />
                        {lat.toFixed(4)}, {lng.toFixed(4)}
                    </div>

                    <textarea
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                        placeholder="Notunuzu yazın..."
                        className="w-full h-20 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-900"
                        autoFocus
                    />

                    <div className="flex gap-2 mt-2">
                        <button
                            onClick={() => setShowNoteForm(false)}
                            className="flex-1 px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        >
                            İptal
                        </button>
                        <button
                            onClick={handleAddNote}
                            disabled={!noteText.trim()}
                            className="flex-1 px-3 py-1.5 bg-primary text-white rounded-lg text-sm hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Kaydet
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
