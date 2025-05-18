import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  ClipboardList,
  Users,
  Settings,
  UserCircle,
  LogOut,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";

interface AdminSidebarItem {
  title: string;
  path: string;
  icon: React.ElementType;
}

const sidebarItems: AdminSidebarItem[] = [
  { title: "Overview", path: "/admin", icon: BarChart3 },
  { title: "Complaints", path: "/admin/complaints", icon: ClipboardList },
  { title: "Citizens", path: "/admin/citizens", icon: Users },
  { title: "Preferences", path: "/admin/preferences", icon: Settings },
  { title: "Account", path: "/admin/account", icon: UserCircle },
];

const AdminNavbar = ({
  onSidebarToggle,
}: {
  onSidebarToggle: () => void;
}) => {
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <header className="bg-background border-b sticky top-0 z-40">
      <div className="container-custom flex items-center justify-between py-3">
        {/* Left: Sidebar toggle & brand */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={onSidebarToggle}
            aria-label="Toggle sidebar"
          >
            <Menu className="w-5 h-5" />
          </Button>

          <Link to="/admin" className="flex items-center space-x-2">
            <span className="bg-primary h-8 w-8 rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold">CES</span>
            </span>
            <span className="font-display font-semibold text-xl hidden sm:inline-block">
              Admin
            </span>
          </Link>
        </div>

        {/* Right controls: LanguageToggle, ThemeToggle & Logout */}
        <div className="flex items-center space-x-4">
          <LanguageToggle />

          <ThemeToggle />

          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed z-30 inset-y-0 left-0 w-64 bg-muted/20 border-r px-4 py-6 transform transition-transform duration-300 ease-in-out flex flex-col",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 md:static md:block"
        )}
      >
        {/* Brand */}
        <div className="mb-8 flex items-center gap-2">
          <Link to="/admin" className="flex items-center space-x-2">
            <span className="bg-primary h-8 w-8 rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold">CES</span>
            </span>
            <span className="font-display font-semibold text-xl">Admin</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 flex-grow">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                onClick={() => setSidebarOpen(false)} // close sidebar on mobile after clicking
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Footer Controls at bottom */}
        <div className="mt-auto pt-4 flex flex-col gap-2 border-t">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Theme</span>
            <ThemeToggle />
          </div>
          <Button
            variant="ghost"
            className="justify-start gap-3 text-muted-foreground hover:text-foreground"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <AdminNavbar onSidebarToggle={() => setSidebarOpen((prev) => !prev)} />

        {/* Page Content */}
        <main className="flex-1 p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
