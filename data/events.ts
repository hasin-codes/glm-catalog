export interface CommunityEvent {
    id: string;
    name: string;
    date: string;
    time: string;
    location: string;
    description: string;
}

export const events: CommunityEvent[] = [
    {
        id: "1",
        name: "Z.ai Developer Meetup — San Francisco",
        date: "March 25, 2026",
        time: "6:00 PM PST",
        location: "San Francisco, CA",
        description:
            "Join fellow Z.ai developers for an evening of talks, demos, and networking. Learn about the latest GLM features and best practices.",
    },
    {
        id: "2",
        name: "GLM Model Fine-tuning Workshop",
        date: "April 2, 2026",
        time: "10:00 AM EST",
        location: "Virtual",
        description:
            "Hands-on workshop covering GLM model fine-tuning techniques. Bring your dataset and leave with a custom model.",
    },
    {
        id: "3",
        name: "Z.ai Community Hackathon",
        date: "April 15-16, 2026",
        time: "9:00 AM PST",
        location: "New York, NY",
        description:
            "48-hour hackathon building innovative applications with Z.ai and GLM. $10K in prizes for top projects.",
    },
    {
        id: "4",
        name: "Prompt Engineering Masterclass",
        date: "April 28, 2026",
        time: "2:00 PM GMT",
        location: "London, UK",
        description:
            "Deep dive into advanced prompt engineering techniques for GLM models. From basics to production-grade prompts.",
    },
    {
        id: "5",
        name: "Z.ai Open Source Contributors Summit",
        date: "May 10, 2026",
        time: "11:00 AM PST",
        location: "Virtual",
        description:
            "Celebrate open source contributions to the Z.ai ecosystem. Meet maintainers, plan roadmaps, and contribute live.",
    },
    {
        id: "6",
        name: "AI Ethics & Responsible GLM Usage",
        date: "May 22, 2026",
        time: "3:00 PM CET",
        location: "Berlin, Germany",
        description:
            "Panel discussion on responsible AI usage, bias mitigation, and ethical considerations when building with GLM.",
    },
];
