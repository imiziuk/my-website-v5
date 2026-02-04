"use client";
import { useState } from "react";

interface EmailCopyProps {
  email: string;
  inverted?: boolean; // Prop to trigger color swap
}

export default function EmailCopy({ email, inverted = false }: EmailCopyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for non-secure contexts
        const textArea = document.createElement("textarea");
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  // Logic to switch classes based on the inverted prop
  const containerBg = inverted ? "bg-[#e5e5e5]" : "bg-[#2d2a26]";
  const textColor = inverted ? "text-[#39352f]" : "text-[#d1d1d1]";
  const borderColor = inverted ? "border-gray-400" : "border-gray-700";

  return (
    <div className="mb-8">
      <label
        className={`text-xs uppercase font-bold mb-2 block ${inverted ? "text-gray-600" : "text-gray-500"}`}
      >
        Direct Email
      </label>
      <button
        onClick={handleCopy}
        className={`group w-full flex items-center justify-between p-4 rounded border transition-colors text-left ${containerBg} ${borderColor} hover:border-[#d67d7d]`}
      >
        <span
          className={`font-mono text-sm md:text-base truncate ${textColor}`}
        >
          {email}
        </span>
        <span className="text-xs font-bold text-[#d67d7d] opacity-0 group-hover:opacity-100 transition-opacity">
          {copied ? "COPIED!" : "COPY"}
        </span>
      </button>
    </div>
  );
}
