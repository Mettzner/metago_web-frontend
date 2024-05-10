'use client'

import { Metadata } from "next"
import { Inter } from "next/font/google";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadate: Metadata = {
  title: "Sisplan"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>
            <main>{children}</main>
            <ToastContainer autoClose={3000} />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}