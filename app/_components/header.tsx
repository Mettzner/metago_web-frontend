"use client"

import { Card, CardContent } from "../_components/ui/card";
import { Button } from "../_components/ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideMenu from "./side-menu";

const Header = () => (
  <Card>
    <CardContent className="p-5 justify-between items-center flex flex-row">
      <Image src="/Logo.png" alt="MetaGo Barber Logo" height={22} width={120} />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <MenuIcon size={18} />
          </Button>
        </SheetTrigger>

        <SheetContent className="p-0">
          <SideMenu />
        </SheetContent>
      </Sheet>
    </CardContent>
  </Card>
)

export default Header;