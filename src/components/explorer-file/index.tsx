"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

type FileProps = LinkProps & {
  children: ReactNode;
};

export const File: FC<FileProps> = (props) => {
  const pathName = usePathname();

  const isCurrentActive = pathName === props.href;

  return (
    <Link
      data-active={isCurrentActive}
      className="flex text-sm items-center gap-2 py-1 px-4 pl-10 hover:bg-[#2a273f] hover:text-[#E0DEF2] data-[active=true]:bg-[#2a273f] data-[active=true]:text-[#E0DEF2]"
      {...props}
    />
  );
};
