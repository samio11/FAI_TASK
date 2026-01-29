"use client";
import { useState } from "react";
import {
  Home,
  Phone,
  Calendar,
  Settings,
  Bell,
  LogOut,
  Zap,
  Menu,
} from "lucide-react";
import userAvatar from "@/public/user.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { DashboardPage } from "./(Dashboard)/_pages/DashboardPage";
import { CallLogsPage } from "./(Dashboard)/_pages/CallLogsPage";
import { AppointmentsPage } from "./(Dashboard)/_pages/AppointmentsPage";
import { SettingsPage } from "./(Dashboard)/_pages/SettingsPage";
import Image from "next/image";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { id: "dashboard", label: "Dashboard Overview", icon: Home },
    { id: "call-logs", label: "Call Logs", icon: Phone },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setSidebarOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage />;
      case "call-logs":
        return <CallLogsPage />;
      case "appointments":
        return <AppointmentsPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  const Sidebar = () => (
    <div className="h-full bg-[#0f1535] border-r border-[#1a2038] flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center">
          <Zap className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <Button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              variant="ghost"
              className={`w-full justify-start gap-3 mb-2 ${
                isActive
                  ? "text-white bg-[#1e3a8a]/30 hover:bg-[#1e3a8a]/40"
                  : "text-gray-400 hover:text-white hover:bg-[#1a2038]"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </Button>
          );
        })}
      </nav>

      {/* Log Out */}
      <div className="p-4">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-red-400 hover:bg-[#1a2038] hover:text-red-300"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm">Log Out</span>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-[#0a0e27] overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent
          side="left"
          className="w-64 p-0 bg-[#0f1535] border-[#1a2038]"
        >
          <Sidebar />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 overflow-auto flex flex-col">
        {/* Header */}
        <header className="bg-[#0f1535] border-b border-[#1a2038] px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-end sticky top-0 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden absolute left-4 text-white hover:bg-[#1a2038]"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>

          <div className="flex items-center gap-3 sm:gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hover:bg-[#1a2038]"
            >
              <Bell className="w-5 h-5" />
            </Button>
            <Image
              src={userAvatar}
              alt="User"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
            />
          </div>
        </header>

        {renderPage()}
      </main>
    </div>
  );
}

export default App;
