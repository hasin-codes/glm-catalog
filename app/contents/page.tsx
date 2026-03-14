import { contentPosts } from "@/data/contents";
import ContentCard from "@/components/ContentCard";

export default function ContentsPage() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-12">
            <h1 className="text-2xl font-semibold text-white">Contents</h1>
            <p className="mt-2 text-sm text-[#888]">
                {"What's buzzing in the Z.ai community"}
            </p>
            <div className="mt-8 space-y-4">
                {contentPosts.map((post) => (
                    <ContentCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}
