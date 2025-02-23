"use client";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Sidebar />
    </div>
  );
}
