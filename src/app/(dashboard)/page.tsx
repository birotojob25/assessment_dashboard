"use client";
import Header from "../../components/Header";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
export default function Dashboard() {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isCollapsed={false} />
        <main className=" p-5">
          <h1>Dashboard</h1>
        </main>
      </div>
    </div>
  );
}
