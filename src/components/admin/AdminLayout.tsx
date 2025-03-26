
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  BarChart3,
  FileText,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  User,
  X,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { logout } = useAuth();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/admin/dashboard" },
    { icon: BarChart3, label: "Manage Projects", path: "/admin/projects" },
    { icon: FileText, label: "Manage Blog", path: "/admin/blog" },
    { icon: MessageSquare, label: "User Messages", path: "/admin/messages" },
    { icon: Settings, label: "Settings", path: "/admin/settings" },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-sidebar transition-all duration-300 ease-in-out fixed inset-y-0 left-0 z-30 flex flex-col border-r border-sidebar-border`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
          <Link to="/admin/dashboard" className="text-xl font-bold">
            {sidebarOpen ? "Admin Panel" : "AP"}
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            {sidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                    isActive(item.path)
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${sidebarOpen ? "mr-3" : ""}`} />
                  {sidebarOpen && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                    S
                  </div>
                  {sidebarOpen && <span>Shawaiz</span>}
                </div>
                {sidebarOpen && <ChevronDown className="h-4 w-4" />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      {/* Main content */}
      <main
        className={`flex-1 overflow-y-auto transition-all duration-300 ease-in-out ${
          sidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
