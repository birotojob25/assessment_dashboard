"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/images/birotojob.png";
import { Bell, CircleUser, Menu } from "lucide-react";

export default function Header({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  return (
    <header className="flex items-center justify-between p-5 shadow-lg sticky">
      <div className="flex items-center gap-2">
        <button onClick={toggleSidebar} className="md:hidden">
          <Menu size={24} />
        </button>
        <Image src={logo} alt="logo" width={50} height={50} />
        <h1>Assessment Portal</h1>
      </div>

      <div className="flex gap-2">
        <Bell size={24} />
        <CircleUser size={24} />
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="cursor-pointer">Blessing Praise</span>
          {isDropdownVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
              <ul className="py-1">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
