import { useMobileSidebar } from "@/contexts/SidebarContext";
import { use, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const SubModal = () => {
  const isLgScreen = useMediaQuery({ query: "(min-width: 768px)" });

  const { isMobileSidebarOpen } = useMobileSidebar();

  const isActive = isMobileSidebarOpen && !isLgScreen;

  return (
    isActive && (
      <div className="absolute inset-0 bg-black dark:bg-white backdrop-blur-xl opacity-[0.07] z-50" />
    )
  );
};

export default SubModal;
