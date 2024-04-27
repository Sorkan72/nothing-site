"use client";

import React, { use, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useMounted } from "@/hooks/useMounted";
import { useSidebar } from "@/contexts/SidebarContext";
import { useLargeScreen } from "@/constants/queries";

const sidebarWidth = "18rem";

const Sidebar = () => {
  let isLgScreen = useLargeScreen();

  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const prevIsLgScreen = useRef(isLgScreen);

  useEffect(() => {
    if (isLgScreen) {
      // Open sidebar if screen is large enough
      if (!isSidebarOpen) {
        toggleSidebar();
      }
    } else {
      // Close sidebar if screen becomes small and it was previously large
      if (isSidebarOpen && prevIsLgScreen.current) {
        toggleSidebar();
      }
    }
    // Update prevIsLgScreen after rendering
    prevIsLgScreen.current = isLgScreen;
  }, [isLgScreen, isSidebarOpen, toggleSidebar]);

  const Nav_animation = {
    open: {
      width: sidebarWidth,
      borderLeft: "1px solid var(--section-border)",
      transition: {
        width: { duration: 0.2 },
        borderLeft: { duration: 0 },
      },
    },
    closed: {
      width: "0rem",
      borderLeft: "0px solid var(--section-border)",
      transition: {
        duration: 0.2,
      },
    },
  };

  // If unmounted
  const mounted = useMounted();
  if (!mounted && isSidebarOpen)
    // Blank Sidebar
    return (
      <aside className="flex h-full">
        <div className="lg:flex h-full bg-[var(--background)] w-[18rem] right-0 border-l border-[var(--section-border)]"></div>
      </aside>
    );

  return (
    <aside className="flex h-full">
      <motion.div
        variants={Nav_animation}
        initial={false}
        animate={isSidebarOpen ? "open" : "closed"}
        className="md:flex h-full bg-[var(--background)] overflow-x-hidden right-0 z-40"
      >
        <div className="flex size-full flex-col">
          <div className="flex size-full flex-col overflow-x-hidden overflow-y-auto">
            <div className="flex">
              <ul className="grid grid-cols-2 w-full gap-8 max-h-full"></ul>
            </div>
          </div>
        </div>
      </motion.div>
    </aside>
  );
};

export default Sidebar;
