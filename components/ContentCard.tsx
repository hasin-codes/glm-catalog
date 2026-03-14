import { ArrowUp, MessageSquare } from "lucide-react";
import type { ContentPost } from "@/data/contents";

interface ContentCardProps {
    post: ContentPost;
}

export default function ContentCard({ post }: ContentCardProps) {
    return (
        <div className="group rounded-xl border border-white/10 bg-[#111] p-6 transition-all hover:border-white/20 hover:bg-[#151515]">
            <div className="flex items-start gap-4">
                {/* Upvote */}
                <div className="flex shrink-0 flex-col items-center gap-1">
                    <button className="rounded-md p-1 text-[#555] transition-colors hover:bg-white/5 hover:text-[#ffffff]">
                        <ArrowUp className="h-5 w-5" />
                    </button>
                    <span className="text-sm font-medium text-[#888]">
                        {post.upvotes}
                    </span>
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-white group-hover:text-[#ffffff] transition-colors">
                        {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#666] line-clamp-2">
                        {post.snippet}
                    </p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-[#555]">
                        <span>
                            by <span className="text-[#888]">{post.author}</span>
                        </span>
                        <span>{post.timeAgo}</span>
                        <div className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            {post.comments}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
