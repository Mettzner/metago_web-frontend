import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer";
// import AuthProvider from "./_providers/auth";
// import { Toaster } from "@/app/_components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetaGo Barber",
  description: "Generated by create next app",
  icons: '/logo.png'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        {/* <AuthProvider> */}
        {children}
        {/* <Toaster /> */}
        <Footer />
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}