"use client";

import * as icons from "lucide-react";
import { FC, HTMLAttributes } from "react";

import { ICON_NAME } from "@/components/interfaces/icon";

type IconProperties = {
  readonly name: ICON_NAME;
  readonly color?: string;
  readonly size: number;
};

const Icon: FC<IconProperties & HTMLAttributes<HTMLElement>> = ({
  name,
  color,
  size,
}) => {
  const LucideIcon = (
    icons as unknown as Record<
      string,
      (properties: { color: string; size: number }) => JSX.Element
    >
  )[name];

  return <LucideIcon color={color ?? "currentColor"} size={size} />;
};

export default Icon;
