"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  NotebookPen,
  LibraryBig,
  Settings,
  BadgeHelp,
  LogOut,
  Copyright
} from "lucide-react";

export default function Sidebar({isCollapsed} : {isCollapsed: boolean}) {
  const pathname = usePathname();

  const getStrokeColor = (link: string) => {
    return pathname === link ? "text-blue-500" : "text-white";
  };

  const navItems = [
    {
      icon: <LayoutDashboard className={getStrokeColor("/")} size={24} />,
      title: "Dashboard",
      link: "/",
    },

    {
      icon: (
        <NotebookPen className={getStrokeColor("/assessments")} size={24} />
      ),
      title: "Assessments",
      link: "/assessments",
    },

    {
      icon: <LibraryBig className={getStrokeColor("/resources")} size={24} />,
      title: "Resources",
      link: "/resources",
    },

    {
      icon: <Settings className={getStrokeColor("/settings")} size={24} />,
      title: "Settings",
      link: "/settings",
    },

    {
      icon: <BadgeHelp className={getStrokeColor("/help")} size={24} />,
      title: "Help",
      link: "/help",
    },

    {
      icon: <LogOut className={getStrokeColor("/logout")} size={24} />,
      title: "Logout",
      link: "/logout",
    },
  ];
  return (
    <div className={`bg-[#0162C9] w-64 h-screen shadow-lg  ${isCollapsed ? "w-16" : "w-64"} transition-width duration-300`}>
      <div className="flex flex-col gap-4 p-4">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex gap-2 items-center ml-4 mt-4 text-white"
          >
            {item.icon}
            <span>{item.title}</span>
          </Link>
        ))}

        <div className="flex items-center ml-3 gap-2 mt-72 text-white">
        <Copyright/>
         Birotojob 2025
        </div>
      </div>
    </div>
  );
}
