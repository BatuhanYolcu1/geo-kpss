'use client';

import { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { StickyNote, Trash2, Edit3, X, Check } from 'lucide-react';
import { useUserStore } from '@/stores/userStore';
import type { GeoNote } from '@/types';

// Custom note marker icon
const createNoteIcon = (color: string = '#F59E0B') => {
    return L.divIcon({
        className: 'geo-note-icon',
        html: `
      <div class="geo-note-marker" style="background: ${color};">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
          <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"/>
          <path d="M15 3v6h6"/>
        </svg>
      </div>
    `,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
    });
};

function NotePopup({ note }: { note: GeoNote }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(note.text);
    const updateNote = useUserStore((state) => state.updateNote);
    const deleteNote = useUserStore((state) => state.deleteNote);

    const handleSave = () => {
        if (editText.trim()) {
            updateNote(note.id, editText.trim());
            setIsEditing(false);
        }
    };

    const handleDelete = () => {
        if (confirm('Bu notu silmek istediğinize emin misiniz?')) {
            deleteNote(note.id);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('tr-TR', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <div className="min-w-[220px] max-w-[280px]">
            {/* Header */}
            <div className="flex items-center justify-between p-2 bg-amber-500 text-white rounded-t-lg">
                <div className="flex items-center gap-2">
                    <StickyNote size={16} />
                    <span className="font-semibold text-sm">Kişisel Not</span>
                </div>
                <div className="flex gap-1">
                    {!isEditing && (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="p-1 hover:bg-white/20 rounded transition-colors"
                            title="Düzenle"
                        >
                            <Edit3 size={14} />
                        </button>
                    )}
                    <button
                        onClick={handleDelete}
                        className="p-1 hover:bg-white/20 rounded transition-colors"
                        title="Sil"
                    >
                        <Trash2 size={14} />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-3">
                {isEditing ? (
                    <div>
                        <textarea
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="w-full h-24 px-2 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white dark:bg-slate-900"
                            autoFocus
                        />
                        <div className="flex gap-2 mt-2">
                            <button
                                onClick={() => {
                                    setEditText(note.text);
                                    setIsEditing(false);
                                }}
                                className="flex-1 flex items-center justify-center gap-1 px-2 py-1 border border-slate-200 rounded text-xs hover:bg-slate-50 transition-colors"
                            >
                                <X size={12} />
                                İptal
                            </button>
                            <button
                                onClick={handleSave}
                                className="flex-1 flex items-center justify-center gap-1 px-2 py-1 bg-amber-500 text-white rounded text-xs hover:bg-amber-600 transition-colors"
                            >
                                <Check size={12} />
                                Kaydet
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <p className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
                            {note.text}
                        </p>
                        <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                            <p className="text-xs text-slate-400">
                                {formatDate(note.createdAt)}
                                {note.updatedAt && (
                                    <span className="ml-1">(düzenlendi)</span>
                                )}
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default function GeoNoteMarkers() {
    const notes = useUserStore((state) => state.notes);

    return (
        <>
            {notes.map((note) => (
                <Marker
                    key={note.id}
                    position={[note.lat, note.lng]}
                    icon={createNoteIcon(note.color || '#F59E0B')}
                >
                    <Popup>
                        <NotePopup note={note} />
                    </Popup>
                </Marker>
            ))}
        </>
    );
}
