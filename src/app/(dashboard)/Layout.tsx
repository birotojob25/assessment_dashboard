import SidebarDemo from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <SidebarDemo />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
