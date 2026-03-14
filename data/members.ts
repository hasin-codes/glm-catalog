export interface Member {
    id: string;
    name: string;
    color: string;
}

const colors = [
    "#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4",
    "#3b82f6", "#8b5cf6", "#ec4899", "#14b8a6", "#f59e0b",
    "#6366f1", "#a855f7", "#10b981", "#e11d48", "#0ea5e9",
];

export const members: Member[] = [
    { id: "1", name: "Alex Chen", color: colors[0] },
    { id: "2", name: "Sarah Kim", color: colors[1] },
    { id: "3", name: "Marcus Johnson", color: colors[2] },
    { id: "4", name: "Priya Patel", color: colors[3] },
    { id: "5", name: "David Müller", color: colors[4] },
    { id: "6", name: "Yuki Tanaka", color: colors[5] },
    { id: "7", name: "Oliver Smith", color: colors[6] },
    { id: "8", name: "Fatima Al-Hassan", color: colors[7] },
    { id: "9", name: "Lucas Silva", color: colors[8] },
    { id: "10", name: "Emma Wilson", color: colors[9] },
    { id: "11", name: "James Lee", color: colors[10] },
    { id: "12", name: "Sofia Rodriguez", color: colors[11] },
    { id: "13", name: "Arjun Sharma", color: colors[12] },
    { id: "14", name: "Mia Zhang", color: colors[13] },
    { id: "15", name: "Noah Brown", color: colors[14] },
];
