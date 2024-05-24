import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon, User } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

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

          <SheetContent side="left" className="p-0">{/* <SideMenu /> */}
            <SheetHeader className="flex">
              <SheetTitle className="flex justify-center p-5">Menu</SheetTitle>
              <SheetDescription className="flex justify-center">
                <div>
                  <h1>Thiago</h1>
                  <h2>Empresa</h2>
                </div>
              </SheetDescription>
            </SheetHeader>

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <ul className="w-full">
                  <li className="flex py-2">
                    <User />
                    <Link href='/usuario'>
                      <Label htmlFor="name" className="text-right">Usuário</Label>
                    </Link>
                  </li>
                  <li className="flex py-2">
                    <User />
                    <Link href='/usuario'>
                      <Label htmlFor="name" className="text-right">Usuário</Label>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter> */}
          </SheetContent>
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
