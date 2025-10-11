import React, { useState } from "react";
import { ShareIcon } from "./Icons";

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, text, url }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch (error) {
        console.error("Share failed:", error);
      }
    } else {
      await navigator.clipboard.writeText(`${title}\n${text}\n${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`inline-flex items-center justify-center p-2 rounded-full shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 
        ${
          copied
            ? "bg-green-600 text-white hover:bg-green-700 focus:ring-green-400"
            : "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500"
        } hover:scale-105 active:scale-95`}
      title="Share this product"
    >
      <ShareIcon className="h-5 w-5" />
      <span className="sr-only">Share product</span>
    </button>
  );
};

export default ShareButton;
