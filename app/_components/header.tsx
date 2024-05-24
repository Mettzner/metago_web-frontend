import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between items-center flex flex-row">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <MenuIcon size={18} />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="p-0">{/* <SideMenu /> */}</SheetContent>
        </Sheet>
        {/* <Image
          src="/Logo.png"
          alt="MetaGo Barber Logo"
          height={22}
          width={120}
        /> */}
      </CardContent>
    </Card>
  );
};

export default Header;
