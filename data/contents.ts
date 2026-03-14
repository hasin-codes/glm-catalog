export interface ContentPost {
    id: string;
    title: string;
    author: string;
    snippet: string;
    upvotes: number;
    comments: number;
    timeAgo: string;
}

export const contentPosts: ContentPost[] = [
    {
        id: "1",
        title: "How I reduced GLM API costs by 70% with smart caching",
        author: "alex_dev",
        snippet:
            "After months of experimentation, I found a combination of semantic caching and request batching that dramatically reduced our GLM API costs without sacrificing response quality...",
        upvotes: 342,
        comments: 67,
        timeAgo: "2 hours ago",
    },
    {
        id: "2",
        title: "Building a real-time collaborative editor with Z.ai",
        author: "sarah_codes",
        snippet:
            "We built a Google Docs-like editor where Z.ai powers real-time suggestions, formatting, and even generates content based on context. Here's the architecture...",
        upvotes: 256,
        comments: 45,
        timeAgo: "5 hours ago",
    },
    {
        id: "3",
        title: "GLM-4 vs GPT-4o: An honest benchmark comparison",
        author: "benchmark_king",
        snippet:
            "I ran both models through 500 diverse prompts across coding, reasoning, and creative tasks. The results might surprise you — GLM-4 excels in structured reasoning...",
        upvotes: 189,
        comments: 92,
        timeAgo: "8 hours ago",
    },
    {
        id: "4",
        title: "My Z.ai rules file that 10x'd my productivity",
        author: "productivity_hacker",
        snippet:
            "After tweaking my Z.ai rules for 3 months, I've landed on a configuration that generates production-ready code 90% of the time. Here's the complete file...",
        upvotes: 421,
        comments: 134,
        timeAgo: "1 day ago",
    },
    {
        id: "5",
        title: "New MCP server for database operations — full tutorial",
        author: "db_master",
        snippet:
            "I created a Model Context Protocol server that lets Z.ai directly query and manipulate databases. Supports PostgreSQL, MySQL, and SQLite out of the box...",
        upvotes: 178,
        comments: 38,
        timeAgo: "1 day ago",
    },
    {
        id: "6",
        title: "Z.ai-powered code review bot for GitHub PRs",
        author: "devops_ninja",
        snippet:
            "Our team built an automated code review system using Z.ai that comments on PRs with suggestions, catches bugs, and enforces coding standards. Setup guide inside...",
        upvotes: 295,
        comments: 56,
        timeAgo: "2 days ago",
    },
];
