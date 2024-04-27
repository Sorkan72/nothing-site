"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";
import { useMobileSidebar } from "@/contexts/SidebarContext";
import { useMobileScreen } from "@/constants/queries";

const sidebarSize = "16rem";

const MobileSidebar = () => {
  const isMidMobile = useMobileScreen();
  const { isMobileSidebarOpen, toggleMobileSidebar } = useMobileSidebar();

  // Manages a separate state+animation(isvanished) to prevent conflicting animations between the mobile and main sidebar.
  const [isVanished, setIsVanished] = useState(false);
  useEffect(() => {
    if (isMobileSidebarOpen) {
      toggleMobileSidebar();
      setIsVanished((prevState) => !prevState);
    }
    if (isVanished) {
      setIsVanished(false);
    }
  }, [!isMidMobile, isVanished]);

  const sidebarAnimation = {
    open: {
      minHeight: sidebarSize,
      borderTop: "1px solid var(--section-border)",
      transition: {
        height: { duration: 0.2 },
        duration: 0.2,
      },
    },
    closed: {
      minHeight: "0rem",
      borderTop: "0px solid var(--section-border)",
      transition: {
        minHeight: { duration: 0.2 },
        borderTop: { delay: 0.2, duration: 0 },
      },
    },
    vanished: {
      minHeight: "0rem",
      borderTop: "0px solid var(--section-border)",
      transition: {
        duration: 0.0,
      },
    },
  };

  // If unmounted
  const isMounted = useMounted();
  if (!isMounted && isMobileSidebarOpen)
    // For now, intentionally blank
    return null;

  return (
    <aside className="flex w-full">
      <motion.div
        variants={sidebarAnimation}
        initial={false}
        animate={
          isVanished ? "vanished" : isMobileSidebarOpen ? "open" : "closed"
        }
        className="md:flex w-full bg-[var(--background)] overflow-y-hidden bottom-0 z-40"
      >
        <div className="flex size-full flex-col">
          <div className="flex size-full flex-col overflow-y-hidden overflow-x-auto">
            <div className="flex">
              <ul className="grid grid-cols-2 h-full gap-8 max-w-full"></ul>
            </div>
          </div>
        </div>
      </motion.div>
    </aside>
  );
};

export default MobileSidebar;
