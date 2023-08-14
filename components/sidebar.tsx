"use client";
import { Montserrat } from "next/font/google";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    herf: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    herf: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    herf: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    herf: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    herf: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    herf: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    herf: "/settings",
  },
];

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white ">
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-8">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1 className={cn(montserrat.className, "text-2xl font-bold")}>
            Genuis
          </h1>
        </Link>
        <div className="space-y-1 ">
          {routes.map((route) => (
            <Link
              href={route.herf}
              key={route.herf}
              className={cn(
                pathName === route.herf
                  ? "text-white bg-white/10"
                  : "text-zinc-400",
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
              )}
            >
              <div className="flex items-center flex-1 ">
                <route.icon className={cn(route.color, "h-5 w-5 mr-3")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
