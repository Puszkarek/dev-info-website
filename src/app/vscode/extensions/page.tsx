import { GitContent } from "@/components/git-content";

export const metadata = {
  title: "VSCode Extensions",
};

const Extensions = (): JSX.Element => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <GitContent gitURL="https://gist.githubusercontent.com/diego3g/6886b0928e422ba674cc67d6dac5f3e7/raw/bd30aa71c9e58bee6da786b90b8e44d6fce0dffd/extensions.json" />
    </>
  );
};

export default Extensions;
