import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/Sidebar";
import SplashScreen from "@/components/SplashScreen";

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
      <body className={cn("font-sans antialiased", inter.className)}>
        <NextUIProvider>
          <main className="flex">
            {false ? (
              <SplashScreen />
            ) : (
              <>
                <Sidebar />
                <div className="flex-1 border-2 border-white">{children}</div>
              </>
            )}
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
