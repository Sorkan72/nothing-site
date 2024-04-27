"use client";

import React, { useEffect, useRef, useState } from "react";
import Sidebar from "@/components/shared/Sidebar";
import BottomNav from "@/components/shared/BottomNav";
import SearchBar from "@/components/SearchBar";
import ThemedLogo from "@/components/shared/ThemedLogo";
import { SidebarProvider, useSidebar } from "@/contexts/SidebarContext";
import SubModal from "@/components/SubModal";
import { useMediaQuery } from "react-responsive";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};

export default Layout;

/*
"use client";

import React, { useEffect, useRef, useState } from "react";
import Sidebar from "@/components/shared/Sidebar";
import BottomNav from "@/components/shared/BottomNav";
import SearchBar from "@/components/SearchBar";
import ThemedLogo from "@/components/shared/ThemedLogo";
import { SidebarProvider, useSidebar } from "@/contexts/SidebarContext";
import SubModal from "@/components/SubModal";
import { useMediaQuery } from "react-responsive";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isSidebarOpen } = useSidebar();

  return (
    <SidebarProvider>
      <div className="root-screen-max bg-[var(--background)] overflow-hidden">
        <div className="flex flex-row flex-grow max-h-[calc(100%-3.5rem)]">
          <main className="flex-grow select-none relative">
            <SubModal isActive={isSidebarOpen} />
            <div className="m-2">
              <ThemedLogo />
            </div>
            <div>{children}</div>
          </main>

          <Sidebar />
        </div>
        <div className="flex flex-row">
          <BottomNav />
          <SearchBar />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
*/
