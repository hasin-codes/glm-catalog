import { Calendar } from "lucide-react";

export default function EventsPage() {
    return (
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-32 text-center">
            <div className="rounded-full border border-white/10 bg-[#111] p-4">
                <Calendar className="h-8 w-8 text-[#ffffff]" />
            </div>
            <h1 className="mt-6 text-2xl font-semibold text-white">Events</h1>
            <p className="mt-2 text-sm text-[#888]">
                {"Coming soon — stay tuned for upcoming Z.ai community events"}
            </p>
        </div>
    );
}
