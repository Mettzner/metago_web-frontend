"use client"

import { SheetHeader, SheetTitle } from "./ui/sheet";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, UserIcon } from "lucide-react";
import { Button } from "./ui/button";
// import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
// import { Avatar, AvatarImage } from "./ui/avatar";

const SideMenu = () => {
  // const { data, status } = useSession()

  // const handleLogoutClick = () => signOut()

  // const handleLoginClick = () => signIn("google")

  return (
    <>
      <SheetHeader className="text-left border-b border-solid border-secondary p-5">
        <SheetTitle>
          Menu
        </SheetTitle>
      </SheetHeader>
    </>
  );
}

export default SideMenu;