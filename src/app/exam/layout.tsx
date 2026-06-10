import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sınav Simülasyonu',
    description: 'KPSS formatında zamanlı sınav simülasyonu. 20, 40 veya 80 soruluk mini/pratik/tam sınav modlarıyla kendinizi test edin.',
};

export default function ExamLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
