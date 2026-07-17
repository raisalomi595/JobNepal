import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import MobileBottomNav from "./MobileBottomNav";
import { useApp } from "../../context/AppContext";
import { useAuth } from "../../context/AuthContext";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth();
  const { notifications } = useApp();

  const userNotifications = notifications.filter((n) => n.userId === user?.id);
  const unreadNotifications = userNotifications.filter((n) => !n.isRead).length;
  const unreadMessages = 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        unreadNotifications={unreadNotifications}
        unreadMessages={unreadMessages}
      />
      <div className="flex">
        <DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 min-h-[calc(100vh-4rem)] pb-20 lg:pb-0">
          <div className="max-w-6xl mx-auto p-4 lg:p-6">
            <Outlet />
          </div>
        </main>
      </div>
      <MobileBottomNav />
    </div>
  );
}
