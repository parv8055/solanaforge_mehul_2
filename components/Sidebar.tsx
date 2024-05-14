"use client"

import Image from "next/image";
import logoWhite from "../public/logoWhite.png";
import { Button, colorVariants } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Sidebar() {
  const [isPressed, setIsPressed] = useState(false)
  return (
    <div className="w-2/12 bg-foreground">
      <Image
        src={logoWhite}
        alt="Logo White"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        className="px-8 py-12"
      />
      <hr className="py-4"/>
      <div className="px-8 space-y-4">
        <Button color="primary" className="bg-sidebarButtonbackground text-white shadow-lg py-4 flex justify-start" startContent="II" fullWidth radius="sm">
          Light
        </Button>
        <Button className={cn(isPressed ? 'bg-sidebarButtonbackground' : "bg-foreground",'text-white shadow-lg py-4 flex justify-start')} fullWidth radius="sm" onClick={()=>(setIsPressed(true))}>
          Light
        </Button>
        <Button color="primary" className="bg-sidebarButtonbackground text-white shadow-lg py-4 flex justify-start" startContent="II" fullWidth radius="sm">
          Light
        </Button>
        <Button className={cn(isPressed ? 'bg-sidebarButtonbackground' : "bg-foreground",'text-white shadow-lg py-4 flex justify-start')} fullWidth radius="sm" onClick={()=>(setIsPressed(true))}>
          Light
        </Button>
        <Button color="primary" className="bg-sidebarButtonbackground text-white shadow-lg py-4 flex justify-start" startContent="II" fullWidth radius="sm">
          Light
        </Button>
        <Button className={cn(isPressed ? 'bg-sidebarButtonbackground' : "bg-foreground",'text-white shadow-lg py-4 flex justify-start')} fullWidth radius="sm" onClick={()=>(setIsPressed(true))}>
          Light
        </Button>
      </div>
    </div>
  );
}
