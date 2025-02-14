import { Metadata } from "next";
import NavbarComponent from "@/app/_components/Navbar";
import { SidebarMenu } from "@/app/_components/Sidebar";


export const metadata: Metadata = {
  title: 'Home',
  description: 'Home Page',
}
function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavbarComponent />
      <div className="flex">
        <div className="hidden sm:block">
          <SidebarMenu />
        </div>
        <main className="w-full p-4">{children}</main>
      </div>
    </div>
  );
}


export default RootLayout;