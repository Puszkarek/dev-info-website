import shiki from "shiki";
import { CodePreview } from "../code-preview";

type GitContentProps = {
  readonly gitURL: string;
};

export const GitContent = async ({
  gitURL,
}: GitContentProps): Promise<JSX.Element> => {
  const settingsResponse = await fetch(gitURL);
  const settings = await settingsResponse.text();

  const highlighter = await shiki.getHighlighter({
    theme: "rose-pine-moon",
  });

  const code = highlighter.codeToHtml(settings, { lang: "json" });

  return <CodePreview code={code} raw={settings} />;
};
