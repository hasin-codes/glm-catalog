export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export interface Project {
    id: string;
    name: string;
    slug: string;
    description: string;
    longDescription: string;
    category: string;
    featured?: boolean;
    author: {
        name: string;
        url?: string;
    };
    thumbnail: string;
    badges: string[];
    tags: string[];
    githubUrl?: string;
    demoUrl?: string;
}

export const projectCategories = [
    "All",
    "Developer Tools",
    "AI & ML",
    "Community",
    "Integration",
    "Open Source",
];

export const projects: Project[] = [
    {
        id: "1",
        name: "GLM-Image",
        slug: "glm-image",
        description:
            "A full-stack image generation playground built on GLM-Image with a polished, gallery-driven consumer interface.",
        longDescription:
            "GLM-Image is a full-stack image generation playground built on top of GLM-Image, exploring how the model feels in a polished, end-user environment rather than a technical demo. It features a visually expressive, gallery-driven interface with rate limits and daily generation caps using Upstash Redis. The project explores UI/UX directions for image generation and discovery flows, testing interaction patterns and layouts for GLM-Image in a consumer-facing setting.",
        category: "AI & ML",
        featured: true,
        author: { name: "hasin-codes", url: "https://github.com/hasin-codes" },
        thumbnail: "/Project Thumbnail.png",
        badges: ["OPEN SOURCE", "GLM-IMAGE", "FULL-STACK"],
        tags: ["GLM", "Image Generation", "Next.js", "Redis"],
        githubUrl: "https://github.com/hasin-codes/GLM-Image",
        demoUrl: "https://image-glm.vercel.app/",
    },
    {
        id: "2",
        name: "Code Cora",
        slug: "code-cora",
        description:
            "AI-powered code review tool using GLM 4.7 that automatically comments on every Pull Request in your repo.",
        longDescription:
            "Code Cora is a code review tool built using GLM 4.7 to help review code. Install it as a GitHub App on your repository, and every Pull Request will automatically receive AI-generated review comments. It helps catch issues, suggest improvements, and maintain code quality across your projects with minimal setup.",
        category: "Developer Tools",
        featured: true,
        author: { name: "Community" },
        thumbnail: "/Project Thumbnail.png",
        badges: ["GLM 4.7", "CODE REVIEW", "GITHUB APP"],
        tags: ["Code Review", "GLM", "GitHub", "Automation"],
        githubUrl: "https://github.com/apps/code-cora",
    },
    {
        id: "3",
        name: "PromptArch",
        slug: "promptarch",
        description:
            "A suite of AI assistant tools for prompt generation, planning, and a ChatGPT-like assistant for everyday use.",
        longDescription:
            "PromptArch is a series of tools built for AI assistants, ranging from prompt generation to planning and even a ChatGPT-like assistant for everyday use. The project was built with the help of GLM 4.7 and is available with its full source code. It provides a comprehensive toolkit for anyone working with AI models on a daily basis.",
        category: "Developer Tools",
        featured: true,
        author: { name: "rommark", url: "https://rommark.dev" },
        thumbnail: "/Project Thumbnail.png",
        badges: ["GLM 4.7", "TOOLS", "OPEN SOURCE"],
        tags: ["Prompts", "AI Tools", "Planning", "Assistant"],
        demoUrl: "https://rommark.dev/tools/promptarch/",
    },
    {
        id: "4",
        name: "Free Chat LLM",
        slug: "free-chat-llm",
        description:
            "Modern web app for interacting with 1000+ LLMs through a smooth chat interface with SSE streaming and multi-conversation management.",
        longDescription:
            "Free Chat LLM is a modern web application for interacting with language models through a smooth chat interface. It supports real-time SSE streaming, multi-conversation management, persistent storage, and advanced debugging tools. Features include dynamic model selection across 1000+ models, image support, local embeddings with semantic search, context management, lite full-stack mode with code explorer and live preview, and advanced settings for temperature, streaming, and max tokens.",
        category: "AI & ML",
        author: { name: "Community" },
        thumbnail: "/Project Thumbnail.png",
        badges: ["STREAMING", "1000+ MODELS", "OPEN SOURCE"],
        tags: ["Chat", "LLM", "Streaming", "Multi-model"],
        demoUrl: "https://chats-llm.com",
    },
    {
        id: "5",
        name: "Better CC Usage",
        slug: "better-cc-usage",
        description:
            "Analyze Claude Code/Droid token usage and costs from local JSONL files with multi-provider support — incredibly fast.",
        longDescription:
            "Better CC Usage analyzes your Claude Code, Droid, and all providers that use Claude Code or Droid token usage and costs from local JSONL files. It features multi-provider support and is incredibly fast and informative, giving you detailed insights into your AI coding assistant spending and usage patterns.",
        category: "Developer Tools",
        author: { name: "cobra91", url: "https://github.com/cobra91" },
        thumbnail: "/Project Thumbnail.png",
        badges: ["ANALYTICS", "CLAUDE", "OPEN SOURCE"],
        tags: ["Analytics", "Claude Code", "Token Usage", "Cost"],
        githubUrl: "https://github.com/cobra91/better-ccusage",
    },
    {
        id: "6",
        name: "MindWell",
        slug: "mindwell",
        description:
            "Privacy-first, open-source mental health support platform for students with offline-friendly client-side architecture.",
        longDescription:
            "MindWell is a privacy-first, open-source mental health support platform designed for students and young adults. It uses an offline-friendly, client-side architecture where core features do not depend on continuous internet connectivity or external AI APIs. Features include 63+ mental health conditions (DSM-5 aligned), validated self-assessments (PHQ-9, GAD-7, PCL-5, and 20 total tools), therapeutic tools, a rule-based support chatbot, and privacy-first design. MindWell is for educational purposes only and makes no diagnostic or clinical claims.",
        category: "AI & ML",
        author: { name: "rudra496", url: "https://github.com/rudra496" },
        thumbnail: "/Project Thumbnail.png",
        badges: ["OPEN SOURCE", "PRIVACY-FIRST", "MENTAL HEALTH"],
        tags: ["Mental Health", "Education", "Privacy", "Offline"],
        githubUrl: "https://github.com/rudra496/mindwell",
        demoUrl: "https://mindwell-navy.vercel.app/",
    },
];
