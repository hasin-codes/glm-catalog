export interface MCP {
    id: string;
    name: string;
    slug: string;
    icon: string;
    description: string;
    longDescription: string;
    category: string;
    featured?: boolean;
    author: {
        name: string;
        url?: string;
    };
    installCommand: string;
    features: string[];
    githubUrl?: string;
    tags: string[];
}

export const mcpCategories = [
    "All",
    "AI & ML",
    "Data",
    "DevOps",
    "Search",
    "Testing",
    "Security",
    "Productivity",
    "API",
    "Deployment",
];

export const mcps: MCP[] = [
    {
        id: "4",
        name: "Zread MCP Server",
        slug: "zread-mcp-server",
        icon: "zread",
        description: "Provides GitHub repository analysis including doc search, structure overview, and file reading for open source projects.",
        longDescription: "Zread MCP Server powered by zread.ai offers search_doc for repo knowledge/issues/PRs, get_repo_structure for directory trees, and read_file for code content. One-click install for Claude Code/Cline/OpenCode. Helps deeply analyze open source implementations.",
        category: "Data",
        featured: true,
        author: { name: "Z.ai Team", url: "https://z.ai" },
        installCommand: "claude mcp add -s user -t http zread https://api.z.ai/api/mcp/zread/mcp --header \"Authorization: Bearer your_api_key\"",
        features: [
            "Repo documentation search",
            "Directory structure view",
            "Full file code reading",
            "Issues/PRs/contributors info",
        ],
        tags: ["GitHub", "Repo", "Code", "Analysis", "Official"],
    },
    {
        id: "2",
        name: "Vision MCP Server",
        slug: "vision-mcp-server",
        icon: "zai",
        description: "Provides powerful GLM-4.6V vision capabilities including image analysis, video understanding, and UI/code extraction for MCP clients.",
        longDescription: "Vision MCP Server is a Z.AI implementation based on MCP, offering image analysis, video understanding, OCR, error diagnosis, diagram interpretation, and more using GLM-4.6V. Supports multiple tools like ui_to_artifact, extract_text_from_screenshot, and video_analysis. Requires Node.js >=22 and Z.AI API key.",
        category: "AI & ML",
        featured: true,
        author: { name: "Z.ai Team", url: "https://z.ai" },
        installCommand: "claude mcp add -s user zai-vision-mcp --env Z_AI_API_KEY=your_api_key Z_AI_MODE=ZAI -- npx -y @z_ai/mcp-server",
        features: [
            "Image analysis & OCR",
            "Video understanding (≤8MB)",
            "UI to code/artifact conversion",
            "Error screenshot diagnosis",
            "Technical diagram interpretation",
            "Data visualization analysis",
        ],
        githubUrl: "https://github.com/z-ai/mcp-server",
        tags: ["Vision", "GLM-4V", "Image", "Video", "Official"],
    },
    {
        id: "3",
        name: "Web Search MCP",
        slug: "web-search-mcp",
        icon: "zai",
        description: "Remote web search MCP server for real-time information retrieval, news, stocks, weather, and latest web resources.",
        longDescription: "Web Search MCP Server provides comprehensive web search capabilities via HTTP remote service. Uses webSearchPrime tool returning titles, URLs, summaries, and icons. No local install needed; configure with API key for Claude Code, Cline, etc. Supports Lite/Pro/Max quota plans.",
        category: "Search",
        featured: true,
        author: { name: "Z.ai Team", url: "https://z.ai" },
        installCommand: "claude mcp add -s user -t http web-search-prime https://api.z.ai/api/mcp/web_search_prime/mcp --header \"Authorization: Bearer your_api_key\"",
        features: [
            "Real-time web search",
            "News & stock prices",
            "Rich result metadata",
            "HTTP remote service",
            "Quota-based usage",
        ],
        tags: ["Search", "Web", "Real-time", "Official"],
    },
    {
        id: "5",
        name: "Z.ai MCP Server",
        slug: "zai-mcp-server",
        icon: "zai",
        description: "General MCP server providing Z.ai GLM model integration with configurable ZAI/ZHIPU platforms for AI capabilities.",
        longDescription: "Core @z_ai/mcp-server package supports both Z.ai and Zhipu AI platforms via API keys. Enables AI tool calls in MCP clients like Claude Code. Supports Node.js 22+, configurable modes for different base URLs and services.",
        category: "AI & ML",
        author: { name: "Z.ai Team", url: "https://z.ai" },
        installCommand: "claude mcp add zai-mcp-server --env Z_AI_API_KEY=your_api_key Z_AI_MODE=ZAI -- npx -y @z_ai/mcp-server",
        features: [
            "GLM model integration",
            "ZAI & ZHIPU support",
            "API key configuration",
            "Stdio transport",
        ],
        githubUrl: "https://github.com/z-ai/mcp-server",
        tags: ["GLM", "Zhipu", "General", "Official"],
    },
    {
        id: "6",
        name: "Zhipu Image MCP",
        slug: "zhipu-image-mcp",
        icon: "zhipu",
        description: "Image generation using Zhipu AI's CogView models with customizable sizes, quality, and management features.",
        longDescription: "Community MCP server enabling high-quality image generation via CogView series. Supports model/尺寸 queries, async processing, Pydantic validation. Integrates with Claude Desktop via config. Full parameter validation and error handling.",
        category: "AI & ML",
        featured: true,
        author: { name: "NanguangChou", url: "https://glama.ai" },
        installCommand: "npx @NanguangChou/zhipu_image_mcp",
        features: [
            "CogView image generation",
            "Custom sizes & quality",
            "Model specs query",
            "Async HTTP processing",
            "Type-safe validation",
        ],
        tags: ["Image Gen", "CogView", "Zhipu"],
    },
];

export function getMCPBySlug(slug: string) {
    return mcps.find((mcp) => mcp.slug === slug);
}

export function getMCPsByCategory(category: string) {
    if (category === "All") return mcps;
    return mcps.filter((mcp) => mcp.category === category);
}
