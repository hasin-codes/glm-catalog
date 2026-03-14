import { Calendar, MapPin, Clock } from "lucide-react";
import type { CommunityEvent } from "@/data/events";

interface EventCardProps {
    event: CommunityEvent;
}

export default function EventCard({ event }: EventCardProps) {
    return (
        <div className="group rounded-xl border border-white/10 bg-[#111] p-6 transition-all hover:border-white/20 hover:bg-[#151515]">
            <h3 className="text-base font-semibold text-white">{event.name}</h3>

            <div className="mt-3 flex flex-wrap gap-4">
                <div className="flex items-center gap-1.5 text-xs text-[#888]">
                    <Calendar className="h-3.5 w-3.5 text-[#ffffff]" />
                    {event.date}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#888]">
                    <Clock className="h-3.5 w-3.5 text-[#ffffff]" />
                    {event.time}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#888]">
                    <MapPin className="h-3.5 w-3.5 text-[#ffffff]" />
                    {event.location}
                </div>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-[#666]">
                {event.description}
            </p>

            <button className="mt-4 rounded-md border border-white/10 px-4 py-1.5 text-xs text-[#888] transition-colors hover:border-white/30 hover:text-white">
                View Event
            </button>
        </div>
    );
}
