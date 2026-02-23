'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, Settings2, Loader2, Volume2 } from 'lucide-react';

interface TextToSpeechProps {
    contentHtml: string;
    title: string;
}

export default function TextToSpeech({ contentHtml, title }: TextToSpeechProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [speed, setSpeed] = useState(1);
    const [showSettings, setShowSettings] = useState(false);
    const [isSupported, setIsSupported] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined' || !window.speechSynthesis) {
            // eslint-disable-next-line
            setIsSupported(false);
            return;
        }

        // Initialize utterance
        const synth = window.speechSynthesis;
        utteranceRef.current = new SpeechSynthesisUtterance();
        utteranceRef.current.lang = 'tr-TR';

        // Ensure voice is loaded (Chrome quirk)
        const initVoices = () => {
            const voices = synth.getVoices();
            const turkishVoice = voices.find(v => v.lang.includes('tr')) || voices[0];
            if (utteranceRef.current && turkishVoice) {
                utteranceRef.current.voice = turkishVoice;
            }
        };

        initVoices();
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = initVoices;
        }

        // Handlers
        utteranceRef.current.onend = () => {
            setIsPlaying(false);
            setIsPaused(false);
        };

        // Cleanup on unmount
        return () => {
            if (synth.speaking) {
                synth.cancel();
            }
        };
    }, []);

    // Strip HTML to get raw text for speech
    const stripHtml = (html: string) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

    const handlePlayPause = () => {
        const synth = window.speechSynthesis;

        if (isPlaying) {
            if (isPaused) {
                synth.resume();
                setIsPaused(false);
            } else {
                synth.pause();
                setIsPaused(true);
            }
        } else {
            setIsLoading(true);
            const rawText = `${title}. ${stripHtml(contentHtml)}`;

            if (utteranceRef.current) {
                utteranceRef.current.text = rawText;
                utteranceRef.current.rate = speed;
                synth.speak(utteranceRef.current);
                setIsPlaying(true);
                setIsPaused(false);
                setTimeout(() => setIsLoading(false), 300); // UI feedback
            }
        }
    };

    const handleStop = () => {
        const synth = window.speechSynthesis;
        synth.cancel();
        setIsPlaying(false);
        setIsPaused(false);
    };

    const handleSpeedChange = (newSpeed: number) => {
        setSpeed(newSpeed);
        if (isPlaying && !isPaused && utteranceRef.current) {
            // Need to restart for speed change to take effect immediately in most browsers
            const synth = window.speechSynthesis;
            synth.cancel();
            utteranceRef.current.rate = newSpeed;
            synth.speak(utteranceRef.current);
        } else if (utteranceRef.current) {
            utteranceRef.current.rate = newSpeed;
        }
        setShowSettings(false);
    };

    if (!isSupported) return null;

    return (
        <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-md p-2 px-3 rounded-2xl border border-slate-700/50 shadow-lg mb-8 relative">
            <div className="flex items-center gap-2 text-indigo-400 mr-2 border-r border-slate-700/50 pr-4">
                {isPlaying && !isPaused ? (
                    <Volume2 size={18} className="animate-pulse" />
                ) : (
                    <Volume2 size={18} />
                )}
                <span className="text-sm font-bold hidden sm:inline">Sesli Okuma</span>
            </div>

            <button
                onClick={handlePlayPause}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isPlaying && !isPaused
                    ? 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30'
                    : 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-400'
                    }`}
            >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : (
                    isPlaying && !isPaused ? <Pause size={18} className="fill-current" /> : <Play size={18} className="fill-current ml-1" />
                )}
            </button>

            {isPlaying && (
                <button
                    onClick={handleStop}
                    className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 flex items-center justify-center transition-all"
                >
                    <Square size={16} className="fill-current" />
                </button>
            )}

            <div className="relative ml-auto">
                <button
                    onClick={() => setShowSettings(!showSettings)}
                    className={`px-3 h-10 rounded-xl flex items-center gap-2 text-sm font-bold transition-all border ${showSettings ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10' : 'border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white'
                        }`}
                >
                    <Settings2 size={16} />
                    {speed}x
                </button>

                {showSettings && (
                    <div className="absolute right-0 top-12 bg-slate-800 border border-slate-700 rounded-xl p-2 shadow-2xl flex flex-col gap-1 z-50 min-w-[120px]">
                        {[0.75, 1, 1.25, 1.5, 2].map((s) => (
                            <button
                                key={s}
                                onClick={() => handleSpeedChange(s)}
                                className={`px-4 py-2 text-sm font-bold rounded-lg text-left transition-colors ${speed === s ? 'bg-indigo-500/20 text-indigo-400' : 'text-slate-300 hover:bg-slate-700'
                                    }`}
                            >
                                {s}x
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
