import { ICON_NAME } from "@/interfaces/icon";

export const SOCIAL_LINKS: ReadonlyArray<{
  name: string;
  url: string;
  icon: ICON_NAME;
}> = [
  {
    name: "github",
    url: "https://github.com/diego3g",
    icon: ICON_NAME.github,
  },
  {
    name: "instagram",
    url: "https://instagram.com/dieegosf",
    icon: ICON_NAME.instagram,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/diego-schell-fernandes/",
    icon: ICON_NAME.linkedin,
  },
  {
    name: "rocketseat",
    url: "https://www.rocketseat.com.br/",
    icon: ICON_NAME.rocket,
  },
  {
    name: "twitter",
    url: "https://twitter.com/dieegosf",
    icon: ICON_NAME.twitter,
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/@rocketseat",
    icon: ICON_NAME.youtube,
  },
];
