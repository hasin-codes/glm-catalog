import { events } from "@/data/events";
import EventCard from "./EventCard";
import { CalendarPlus } from "lucide-react";

export default function EventsList() {
    return (
        <div className="mx-auto max-w-7xl px-6 py-12">
            <h1 className="text-2xl font-semibold text-white">Community Events</h1>
            <p className="mt-2 text-sm text-[#888]">
                Discover upcoming Z.ai and GLM community events
            </p>

            <div className="mt-8 flex gap-8">
                {/* Events List */}
                <div className="flex-1 space-y-4">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>

                {/* Sidebar CTA */}
                <aside className="hidden w-72 shrink-0 lg:block">
                    <div className="sticky top-20 rounded-xl border border-[#ffffff]/20 bg-[#ffffff]/5 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ffffff]/10">
                            <CalendarPlus className="h-6 w-6 text-[#ffffff]" />
                        </div>
                        <h3 className="mt-4 text-base font-semibold text-white">
                            Host a Z.ai Community Event
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#888]">
                            Want to organize a meetup, workshop, or hackathon? We&apos;ll help you
                            plan and promote it to the Z.ai community.
                        </p>
                        <button className="mt-4 w-full rounded-lg bg-[#ffffff] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[#dddddd]">
                            Get Started
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
