import FeaturedMCPsRow from "@/components/FeaturedMCPsRow";
import FeaturedProjectsRow from "@/components/FeaturedProjectsRow";
import HeroSection from "@/components/HeroSection";
import RuleCard from "@/components/RuleCard";
import { getSections } from "@/data";
import Link from "next/link";

export default function HomePage() {
  const sections = getSections();
  // Show top 4 sections with up to 4 rules each
  const topSections = sections.slice(0, 4);

  return (
    <>
      <HeroSection />
      <FeaturedProjectsRow />
      <FeaturedMCPsRow />
      

      {/* Rules Sections */}
      {topSections.map((section) => (
        <section key={section.tag} className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">{section.tag}</h2>
            <Link
              href="/rules"
              className="text-sm text-[#888] transition-colors hover:text-white"
            >
              View all →
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {section.rules.slice(0, 4).map((rule) => (
              <RuleCard key={rule.slug} rule={rule} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
