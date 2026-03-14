"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function CopyButton({
  content,
}: {
  content: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    toast.success("Copied to clipboard! Paste it into your rules file.");

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-xs bg-black text-white dark:bg-white dark:text-black p-2 rounded-full size-9 flex items-center justify-center"
      type="button"
      title="Copy rule"
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}
