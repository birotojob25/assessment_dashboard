"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/images/birotojob.png";
import { Bell, CircleUser, ChevronDown, Settings, LogOut } from "lucide-react";

export default function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  return (
    <header className="flex items-center justify-between p-5 shadow-lg sticky">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="logo" width={50} height={50} />
        <h1>Assessment Portal</h1>
      </div>

      <div className="flex items-center gap-4">
        <Bell size={24} className="cursor-pointer hover:text-gray-600" />
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors"
          >
            <CircleUser size={24} />
            <span>Blessing Praise</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                isDropdownVisible ? "rotate-180" : ""
              }`}
            />
          </button>

          {isDropdownVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
              <ul className="py-1">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                  <CircleUser size={16} />
                  <span>Profile</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                  <Settings size={16} />
                  <span>Settings</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-red-600">
                  <LogOut size={16} />
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
