import RuleCard from "@/components/RuleCard";
import Footer from "@/components/Footer";
import { getRuleBySlug, rules } from "@/data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const rule = getRuleBySlug(slug);

  return {
    title: rule
      ? `${rule.title} — GLM Catalog`
      : "Rule Not Found — GLM Catalog",
    description: rule
      ? `${rule.content.substring(0, 160)}...`
      : "Rule not found",
  };
}

export async function generateStaticParams() {
  return rules.map((rule) => ({
    slug: rule.slug,
  }));
}

export default async function RuleDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const rule = getRuleBySlug(slug);

  if (!rule) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-white">Rule not found</h1>
        <p className="mt-2 text-[#888]">
          The rule you are looking for does not exist.
        </p>
        <Link
          href="/rules"
          className="mt-6 inline-flex items-center gap-2 text-sm text-teal hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all rules
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 pt-8 pb-8">
      <Link
        href="/rules"
        className="fixed top-14 z-10 inline-flex items-center gap-2 text-sm text-[#888] hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to all rules
      </Link>
      <div className="mt-8">
        <RuleCard rule={rule} isPage={true} />
      </div>
      <Footer />
    </div>
  );
}

export const revalidate = 86400;
