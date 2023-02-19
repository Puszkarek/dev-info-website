import Icon from "@/components/icon";
import { ICON_NAME } from "@/components/interfaces/icon";

export function Footer() {
  return (
    <div className="text-sm px-3 text-[#8F8CA8] flex gap-3 items-center justify-end bg-[#2a273f]">
      <a
        href="https://github.com/diego3g/faladev"
        target="_blank"
        className="flex gap-1 items-center text-xs hover:text-[#E0DEF2]"
        rel="noreferrer"
      >
        <Icon name={ICON_NAME.github} size={12} />
        Github
      </a>
    </div>
  );
}
