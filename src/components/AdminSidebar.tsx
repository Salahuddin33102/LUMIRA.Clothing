"use client";

import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  LogOut 
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "General Ledger", href: "/admin", icon: LayoutDashboard },
  { name: "Financial Reports", href: "/admin/reports", icon: Package },
  { name: "Global Records", href: "/admin/records", icon: ShoppingCart },
  { name: "Customer Directory", href: "/admin/users", icon: Users },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 glass-card border-r-0 h-full hidden lg:flex flex-col p-8">
      <div className="mb-12">
        <Link href="/">
          <h2 className="text-xl font-bold tracking-tighter">ADMIN<span className="text-accent-gold">.</span></h2>
        </Link>
      </div>
      
      <nav className="flex-grow space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name}
              href={item.href} 
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                isActive 
                  ? "bg-slate-900 text-white" 
                  : "text-slate-500 hover:bg-white dark:hover:bg-slate-900"
              }`}
            >
              <item.icon size={18} /> {item.name}
            </Link>
          );
        })}
        
        <div className="pt-8 mt-8 border-t border-slate-200 dark:border-slate-800">
          <Link 
            href="/admin/settings" 
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
              pathname === "/admin/settings"
                ? "bg-slate-900 text-white"
                : "text-slate-500 hover:bg-white dark:hover:bg-slate-900"
            }`}
          >
            <Settings size={18} /> Settings
          </Link>
        </div>
      </nav>

      <div className="mt-auto">
        <Link 
          href="/api/auth/signout"
          className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-2xl transition-all"
        >
          <LogOut size={18} /> Logout
        </Link>
      </div>
    </aside>
  );
}
