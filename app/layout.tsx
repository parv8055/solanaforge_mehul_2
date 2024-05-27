import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/Sidebar";
import SplashScreen from "@/components/SplashScreen";

const nontserrat = Montserrat({ subsets: ["latin"] });

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
      <body className={cn("font-sans antialiased", nontserrat.className)}>
        <NextUIProvider>
          <main className="flex bg-background text-white">
            {false ? (
              <SplashScreen />
            ) : (
              <>
                <Sidebar />
                <div className="flex-1">{children}</div>
              </>
            )}
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
