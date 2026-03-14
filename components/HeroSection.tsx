import HeroBeams from "@/components/HeroBeams";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="px-6 pt-10 pb-4">
      <div className="relative mx-auto max-w-3xl overflow-hidden bg-card-surface px-8 py-6 text-center">
        <HeroBeams />
        <div className="relative z-10">
          <h1 className="mb-2 text-[21px] text-white">
            Welcome to GLM Catalog          </h1>
          <p className="mx-auto max-w-155 text-sm text-[#888]">
            Browse and explore{" "}
            <Link
              href="/skills"
              className="border-b border-dashed border-surface-border"
            >
              Skills, MCPs
            </Link>{" "}
            and{" "}
            <Link
              href="/rules"
              className="border-b border-dashed border-surface-border"
            >
              Rules
            </Link>{" "}
            that developers use to steer and instruct Z.ai's GLM model more effectively.
          </p>
        </div>
      </div>
    </div>
  );
}
