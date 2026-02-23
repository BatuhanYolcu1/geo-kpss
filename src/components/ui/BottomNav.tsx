'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Map, Brain, BookOpen, Sparkles, BarChart3 } from 'lucide-react';

const navItems = [
    { href: '/atlas', label: 'Atlas', icon: Map },
    { href: '/quiz', label: 'Quiz', icon: Brain },
    { href: '/notes', label: 'Notlar', icon: BookOpen },
    { href: '/flashcards', label: 'Kartlar', icon: Sparkles },
    { href: '/stats', label: 'İstatistik', icon: BarChart3 },
];

export default function BottomNav() {
    const pathname = usePathname();

    // Don't show on homepage or atlas (full screen map)
    if (pathname === '/' || pathname === '/atlas') return null;

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-[999] md:hidden">
            {/* Gradient fade */}
            <div className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

            <div className="bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/50 px-2 pb-[env(safe-area-inset-bottom)]">
                <div className="flex items-center justify-around py-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 min-w-[56px] ${isActive
                                        ? 'text-indigo-400'
                                        : 'text-slate-500 active:text-slate-300'
                                    }`}
                            >
                                <div className={`relative ${isActive ? 'scale-110' : ''} transition-transform`}>
                                    <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                                    {isActive && (
                                        <div className="absolute -inset-2 bg-indigo-500/10 rounded-xl -z-10" />
                                    )}
                                </div>
                                <span className={`text-[10px] font-bold ${isActive ? 'text-indigo-300' : ''}`}>
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
