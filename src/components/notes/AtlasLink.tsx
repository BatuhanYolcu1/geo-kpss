'use client';

import Link from 'next/link';
import { Map } from 'lucide-react';

interface AtlasLinkProps {
    layer?: string;
    focus?: string;
    children: React.ReactNode;
}

export default function AtlasLink({ layer, focus, children }: AtlasLinkProps) {
    const params = new URLSearchParams();
    if (layer) params.append('layer', layer);
    if (focus) params.append('focus', focus);

    const href = `/atlas${params.toString() ? `?${params.toString()}` : ''}`;

    return (
        <Link
            href={href}
            className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded-md text-indigo-400 font-bold hover:bg-indigo-500 hover:text-white transition-all no-underline align-middle group"
        >
            <Map size={14} className="group-hover:rotate-12 transition-transform" />
            <span>{children}</span>
        </Link>
    );
}
