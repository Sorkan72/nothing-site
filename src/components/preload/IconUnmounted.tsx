"use client";

import { FC } from "react";
import { useMounted } from "@/hooks/useMounted";

interface IconUnmountedProps {
  children: React.ReactNode;
  iconSize?: number;
}

const IconUnmounted: FC<IconUnmountedProps> = ({ children, iconSize }) => {
  const mounted = useMounted();

  const iconWidth = iconSize ? `w-${iconSize}` : "w-8";
  const iconHeight = iconSize ? `h-${iconSize}` : "h-8";

  if (!mounted) {
    return (
      <div
        className={`bg-gray-400 dark:bg-gray-300 opacity-20 ${iconWidth} ${iconHeight} skeleton rounded-full`}
      ></div>
    );
  }

  return <>{children}</>;
};

export default IconUnmounted;
