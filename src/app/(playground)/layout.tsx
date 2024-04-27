"use client";

import React, { useEffect, useRef, useState } from "react";
import Sidebar from "@/components/shared/Sidebar";
import BottomNav from "@/components/shared/BottomNav";
import SearchBar from "@/components/SearchBar";
import ThemedLogo from "@/components/shared/ThemedLogo";
import {
  SidebarProvider,
  useSidebar,
  MobileSidebarProvider,
  useMobileSidebar,
} from "@/contexts/SidebarContext";
import SubModal from "@/components/SubModal";
import { Rubik_Bubbles } from "next/font/google";
import { useMediaQuery } from "react-responsive";
import MobileSidebar from "@/components/MobileSidebar";

// url = [domain]/playground

const RubikBubbles = Rubik_Bubbles({
  subsets: ["latin"],
  weight: ["400"],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isSidebarOpen } = useSidebar();

  return (
    <MobileSidebarProvider>
      <SidebarProvider>
        <div className="root-screen-max bg-[var(--background)] overflow-hidden">
          <div className="flex flex-row flex-grow max-h-[calc(100%-3.5rem)]">
            <main className="flex-grow select-none relative min-w-20">
              <SubModal />
              <div className="p-2 flex flex-inline justify-between w-full whitespace-pre">
                <div className="w-32 absolute left-2">
                  <ThemedLogo />
                </div>

                <div
                  className={`${RubikBubbles.className} text-[1.325rem] absolute right-2`}
                >
                  Playground
                </div>
              </div>

              <div>{children}</div>
            </main>

            <Sidebar />
          </div>

          <MobileSidebar />

          {/* Bottom Navigation */}
          <div className="flex flex-row">
            <BottomNav />
            <SearchBar />
          </div>
        </div>
      </SidebarProvider>
    </MobileSidebarProvider>
  );
};

export default Layout;
