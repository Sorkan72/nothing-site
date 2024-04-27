"use client";

import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";

export default function AccountButton({
  afterSignOutUrl,
}: {
  afterSignOutUrl: string;
}) {
  return (
    <>
      <SignedIn>
        <UserButton afterSignOutUrl={afterSignOutUrl} />
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </>
  );
}
