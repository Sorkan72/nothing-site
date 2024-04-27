"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/useMounted";
import { useState } from "react";

interface ThemeSwitchProps {
  iconSize?: number;
}

let iconNumSize = 28;

// Does not have a pre-rendered state
export default function ThemeSwitch({
  iconSize = iconNumSize,
}: ThemeSwitchProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [hovered, setHovered] = useState(false);

  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const dynamicIconSize = hovered ? iconSize + 2 : iconSize;

  if (resolvedTheme === "dark") {
    return (
      <FiSun
        className="text-[var(--text)]"
        onClick={() => setTheme("light")}
        size={dynamicIconSize}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <FiMoon
        className="text-[var(--text)]"
        onClick={() => setTheme("dark")}
        size={dynamicIconSize}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    );
  }
}
