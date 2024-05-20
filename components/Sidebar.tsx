"use client";

import Image from "next/image";
import logoWhite from "../public/logoWhite.png";
import { Button } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

export function Sidebar() {
  const pathName = usePathname();
  const router = useRouter()

  return (
    <div className="hidden md:block w-[20%] bg-foreground min-h-screen">
      <Image
        src={logoWhite}
        alt="Logo White"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        className="px-8 py-12"
      />
      <hr className="py-4" />
      <div className="px-8 space-y-4">
        <Button
          className={cn(
            pathName === "/" ? "bg-cta" : "bg-foreground hover:bg-cta",
            "text-white py-4 flex justify-start"
          )}
          onClick={()=>{
            router.push('/',)
          }}
          fullWidth
          radius="sm"
        >
          HOME
        </Button>
        <Button
          className={cn(
            pathName === "/telegramscraping" ? "bg-cta" : "bg-foreground hover:bg-cta",
            "text-white py-4 flex justify-start"
          )}
          onClick={()=>{
            router.push('/telegramscraping',)
          }}
          fullWidth
          radius="sm"
        >
          TELEGRAM SCRAPING
        </Button>
        <Button
          className={cn(
            pathName === "/tokensniper" ? "bg-cta" : "bg-foreground hover:bg-cta",
            "text-white py-4 flex justify-start"
          )}
          onClick={()=>{
            router.push('/',)
          }}
          fullWidth
          radius="sm"
        >
          TOKEN SNIPER
        </Button>
        <Button
          className={cn(
            pathName === "/aigemhunter" ? "bg-cta" : "bg-foreground hover:bg-cta",
            "text-white py-4 flex justify-start"
          )}
          onClick={()=>{
            router.push('/',)
          }}
          fullWidth
          radius="sm"
        >
          AI GEM HUNTER
        </Button>
        <Button
          className={cn(
            pathName === "/doordie" ? "bg-cta" : "bg-foreground hover:bg-cta",
            "text-white py-4 flex justify-start"
          )}
          onClick={()=>{
            router.push('/',)
          }}
          fullWidth
          radius="sm"
        >
          DO OR DIE
        </Button>
        <Button
          className={cn(
            pathName === "/help" ? "bg-cta" : "bg-foreground hover:bg-cta",
            "text-white py-4 flex justify-start"
          )}
          onClick={()=>{
            router.push('/',)
          }}
          fullWidth
          radius="sm"
        >
          HELP
        </Button>
      </div>
      <div className="px-8 space-y-8 mt-8">
        <Button
          className="bg-sidebargradient text-white "
          size="lg"
          fullWidth
          radius="sm"
        >
          JOIN OUR COMMUNITY
        </Button>
        <Button
          className="bg-background text-white"
          size="lg"
          fullWidth
          radius="sm"
        >
          USERs
        </Button>
      </div>
    </div>
  );
}
