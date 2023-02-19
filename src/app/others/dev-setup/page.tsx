import shiki from "shiki";

import { CodePreview } from "@/components/code-preview";

export const metadata = {
  title: "Dev Setup",
};

const markdown = `
# Dev Setup

- MacBook M1 Max (64gb Memory)
- LG 25" UltraWide Display

That's it, nothing more.
`.trim();

const DevelopmentSetup = async (): Promise<JSX.Element> => {
  const highlighter = await shiki.getHighlighter({
    theme: "rose-pine-moon",
  });

  const code = highlighter.codeToHtml(markdown, { lang: "md" });

  return <CodePreview code={code} />;
};

export default DevelopmentSetup;
