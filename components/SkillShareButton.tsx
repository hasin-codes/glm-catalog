"use client";

import { Check, Share2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function SkillShareButton({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${window.location.origin}/skills/${slug}`);
    setCopied(true);
    toast.success("URL copied to clipboard!");

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-xs bg-black text-white dark:bg-white dark:text-black p-2 rounded-full size-9 flex items-center justify-center"
      type="button"
      title="Share skill"
    >
      {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
    </button>
  );
}
