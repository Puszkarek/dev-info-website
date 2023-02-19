"use client";

import Icon from "@/components/icon";
import { SOCIAL_LINKS } from "@/constants/menu";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { User } from "lucide-react";
import { MenuButton } from "@/components/menu-button";

export function SocialLinksMenuButton() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger aria-label="Social Media">
        <MenuButton icon={User} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="right"
          className="bg-[#2a273f] z-10 flex flex-col rounded-lg overflow-auto"
        >
          {SOCIAL_LINKS.map((socialItem) => {
            return (
              <DropdownMenu.Item key={socialItem.url} className="outline-none">
                <a
                  href={socialItem.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#E0DEF2] flex items-center gap-2 text-sm px-4 py-3 hover:bg-[#454066]"
                >
                  <Icon name={socialItem.icon} size={14} color="black" />
                  {socialItem.name}
                </a>
              </DropdownMenu.Item>
            );
          })}
          <DropdownMenu.Arrow className="fill-[#2a273f]" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
