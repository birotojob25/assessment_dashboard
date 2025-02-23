"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import { usePathname } from "next/navigation";
import {
  IconBrandTabler,
  IconSettings,
  IconLibrary,
  IconHelp,
  IconContract,
  IconCopyright,
  IconLogout2,
} from "@tabler/icons-react";
import Dashboard from "../app/(dashboard)/Dashboard";
import { cn } from "@/lib/utils";

export default function SidebarDemo() {
   const [open, setOpen] = useState(false);
   const pathname = usePathname();
   
  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: <IconBrandTabler className="text-white flex-shrink-0" size={26} />,
    },
    {
      label: "Assessments",
      href: "/assessments",
      icon: <IconContract className="text-white flex-shrink-0" size={26} />,
    },
    {
      label: "Resources",
      href: "/resources",
      icon: <IconLibrary className="text-white flex-shrink-0" size={26} />,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <IconSettings className="text-white flex-shrink-0" size={26} />,
    },
    {
      label: "Help",
      href: "/help",
      icon: <IconHelp className="text-white flex-shrink-0" size={26} />,
    },
    {
      label: "Logout",
      href: "/logout",
      icon: <IconLogout2 className="text-white flex-shrink-0" size={26} />,
    },
  ];

  return (
    <div
      className={
        cn("min-h-[60vh]  flex")
        // for your use case, use `h-screen` instead of `h-[60vh]`
      }
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 min-h-[90vh] overflow-hidden">
          <div className="flex flex-col flex-1 overflow-y-auto px-4">
            <div className="mt-3 flex flex-col gap-6">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} active={pathname === link.href} />
              ))}
            </div>
          </div>
          <div>
            <div className="inline-block ml-4">
              <IconCopyright size={26} className="text-white" />
              <span className="text-white text-sm font-medium">
                {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}



