import type { Icon } from "lucide-react";
import { FC } from "react";

type MenuButtonProps = {
  icon: Icon;
  isActive?: boolean;
};

export const MenuButton: FC<MenuButtonProps> = ({
  icon: Icon,
  isActive = false,
}) => {
  return (
    <div
      data-active={isActive}
      className="h-12 flex justify-center items-center border-l-2 border-transparent data-[active=true]:border-[#E0DEF2]"
    >
      <Icon
        strokeWidth={1.5}
        size={28}
        color={isActive ? "#E0DEF2" : "#8F8CA8"}
      />
    </div>
  );
};
