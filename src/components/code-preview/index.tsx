"use client";

import { JetBrains_Mono } from "@next/font/google";
import { FC, useState } from "react";

import Icon from "@/components/icon";
import { ICON_NAME } from "@/interfaces/icon";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

type CodePreviewProps = {
  code: string;
  raw?: string;
};

export const CodePreview: FC<CodePreviewProps> = ({ code, raw }) => {
  const [hasCopiedToClipboard, setCopiedToClipboard] = useState(false);

  const handleCopyToClipboard = async (): Promise<void> => {
    if (!raw) {
      return;
    }
    await navigator.clipboard.writeText(raw);

    setCopiedToClipboard(true);

    const timeoutTime = 2000;
    setTimeout(() => setCopiedToClipboard(false), timeoutTime);
  };

  return (
    <>
      {raw && (
        <button
          onClick={handleCopyToClipboard}
          data-copied={hasCopiedToClipboard}
          className="absolute flex items-center right-0 mx-8 gap-x-2 text-sm font-medium z-30 bg-[#2a273f] px-3 py-2 rounded-md text-[#E0DEF2] ring-2 ring-[#2b283b] data-[copied=true]:ring-emerald-600"
        >
          {hasCopiedToClipboard ? (
            <>
              <Icon
                name={ICON_NAME.checkCircleAlt}
                size={16}
                className="text-emerald-400"
              />
              <span className="w-32">Copied!</span>
            </>
          ) : (
            <>
              <Icon name={ICON_NAME.copyIcon} size={16} />
              <span className="w-32">Copy to Clipboard</span>
            </>
          )}
        </button>
      )}
      <div
        id="shiki-code"
        style={jetBrainsMono.style}
        className="absolute inset-0 overflow-auto leading-relaxed scrollbar scrollbar-thumb-[#2B283B] scrollbar-track-transparent"
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </>
  );
};
