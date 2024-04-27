import React, { createContext, useContext, useState } from "react";

/**
 * A context to manage the state of the sidebar, and mobile sidebar.
 * { [boolean] } = use[Sidebar] => Get the current state of the sidebar.
 * { [function] } = toggle[Sidebar] => Toggle the state of the sidebar.
 *
 * State is innately false.
 * Wrap using the Provider.
 */

// Standard Sidebar Context
const SidebarContext = createContext({
  isSidebarOpen: false,
  toggleSidebar: () => {},
});

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setisSidebarOpen(!isSidebarOpen);
    console.log("New Sidebar state:", !isSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};

// Mobile Sidebar Context
const MobileSidebarContext = createContext({
  isMobileSidebarOpen: false,
  toggleMobileSidebar: () => {},
});

export const MobileSidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMobileSidebarOpen, setisMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setisMobileSidebarOpen(!isMobileSidebarOpen);
    console.log("New MobileSidebar state:", !isMobileSidebarOpen);
  };

  return (
    <MobileSidebarContext.Provider
      value={{ isMobileSidebarOpen, toggleMobileSidebar }}
    >
      {children}
    </MobileSidebarContext.Provider>
  );
};

export const useMobileSidebar = () => {
  return useContext(MobileSidebarContext);
};
