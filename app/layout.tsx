import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solana",
  description: "Solana",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("flex min-h-screen flex-col", inter.className)}>
        <NextUIProvider>
          <div className="flex">
            <Sidebar />
            <div className="mx-auto md:w-10/12">{children}</div>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}

