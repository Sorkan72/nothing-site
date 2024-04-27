import React, { useState } from "react";
import ThemeSwitch from "@/components/ThemeSwitch";
import MenuBtn from "@/components/MenuBtn";
import VolumeSwitch from "@/components/VolumeSwitch";
import AccountButton from "@/components/shared/AccountButton";
import IconUnmounted from "@/components/preload/IconUnmounted";

const BottomNav = () => {
  return (
    <nav className="w-full select-none overflow-x-auto">
      <ul className="inline-flex items-center border-t max-h-14 h-14 p-3 border-[var(--section-border)] w-full">
        <li className="flex items-center">
          <IconUnmounted>
            <AccountButton afterSignOutUrl="/playground" />
          </IconUnmounted>
        </li>

        <li className="flex md:hidden mx-3">
          <IconUnmounted>
            <MenuBtn />
          </IconUnmounted>
        </li>

        {/* Space filler */}
        <li className="flex-grow"></li>

        <li className="mx-3 cursor-pointer">
          <IconUnmounted>
            <ThemeSwitch />
          </IconUnmounted>
        </li>

        <li className="cursor-pointer">
          <IconUnmounted>
            <VolumeSwitch />
          </IconUnmounted>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
