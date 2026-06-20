export interface StreakData {
    current: number;
    longest: number;
    lastActive: string; // 'YYYY-MM-DD'
}

export interface DailyProgress {
    date: string;
    answered: number;
    goal: number;
}

const STREAK_KEY = 'geo_streak';
const PROGRESS_KEY = 'geo_daily_progress';
const DEFAULT_GOAL = 10;

function today(): string {
    return new Date().toISOString().slice(0, 10);
}

function yesterday(): string {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().slice(0, 10);
}

export function getStreak(): StreakData {
    if (typeof window === 'undefined') return { current: 0, longest: 0, lastActive: '' };
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return { current: 0, longest: 0, lastActive: '' };
    return JSON.parse(raw) as StreakData;
}

export function getDailyProgress(): DailyProgress {
    if (typeof window === 'undefined') return { date: today(), answered: 0, goal: DEFAULT_GOAL };
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return { date: today(), answered: 0, goal: DEFAULT_GOAL };
    const p = JSON.parse(raw) as DailyProgress;
    // Reset if it's a new day
    if (p.date !== today()) return { date: today(), answered: 0, goal: p.goal };
    return p;
}

export function setDailyGoal(goal: number): void {
    const p = getDailyProgress();
    const next: DailyProgress = { ...p, goal };
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
}

export function recordQuestions(count: number): { progress: DailyProgress; streak: StreakData } {
    const p = getDailyProgress();
    const wasComplete = p.answered >= p.goal;
    const next: DailyProgress = { ...p, answered: p.answered + count };
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));

    let streak = getStreak();
    const t = today();

    if (streak.lastActive !== t) {
        // First activity today — update streak
        const isConsecutive = streak.lastActive === yesterday();
        const newCurrent = isConsecutive ? streak.current + 1 : 1;
        streak = {
            current: newCurrent,
            longest: Math.max(streak.longest, newCurrent),
            lastActive: t,
        };
        localStorage.setItem(STREAK_KEY, JSON.stringify(streak));
    }

    // Emit storage event so other components can react
    if (!wasComplete && next.answered >= next.goal) {
        window.dispatchEvent(new Event('geo_goal_complete'));
    }

    return { progress: next, streak };
}
