"use client";

import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import { useMobileSidebar } from "@/contexts/SidebarContext";

interface MenuBtnProps {
  onClick?: () => void;
  iconSize?: number;
}

const MenuBtn: React.FC<MenuBtnProps> = ({ iconSize = 33 }) => {
  const { toggleMobileSidebar } = useMobileSidebar();

  return (
    <button onClick={toggleMobileSidebar}>
      <IoMenuOutline className="text-[var(--text)]" size={iconSize} />
    </button>
  );
};

export default MenuBtn;
