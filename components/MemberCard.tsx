import type { Member } from "@/data/members";

interface MemberCardProps {
    member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
    const initials = member.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();

    return (
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#111] p-4 transition-all hover:border-white/20 hover:bg-[#151515]">
            <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: member.color }}
            >
                {initials}
            </div>
            <span className="text-sm font-medium text-white">{member.name}</span>
        </div>
    );
}
