"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface BibtexButtonProps {
  bibtex: string;
}

export default function BibtexButton({ bibtex }: BibtexButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — silently ignore
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-accent underline underline-offset-2 hover:opacity-80"
      aria-label="Copy BibTeX citation"
    >
      {copied ? (
        <>
          <Check size={14} aria-hidden="true" /> Copied
        </>
      ) : (
        <>
          <Copy size={14} aria-hidden="true" /> Copy BibTeX
        </>
      )}
    </button>
  );
}
