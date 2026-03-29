import { LayoutDashboard, Package, ShoppingCart, Users, Settings, TrendingUp } from "lucide-react";
import Link from "next/link";

const stats = [
  { id: 1, name: "Total Revenue", value: "$45,231.89", icon: TrendingUp, color: "text-emerald-500" },
  { id: 2, name: "Active Orders", value: "156", icon: ShoppingCart, color: "text-blue-500" },
  { id: 3, name: "New Customers", value: "+12.5%", icon: Users, color: "text-purple-500" },
  { id: 4, name: "Low Stock", value: "8 Items", icon: Package, color: "text-amber-500" },
];

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden pt-0 -mt-20">
      {/* Sidebar */}
      <aside className="w-64 glass-card border-r-0 h-full hidden lg:block p-8">
        <div className="mb-12">
          <h2 className="text-xl font-bold tracking-tighter">ADMIN<span className="text-accent-gold">.</span></h2>
        </div>
        
        <nav className="space-y-4">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-slate-900 text-white rounded-2xl transition-all">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link href="/admin/products" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-white dark:hover:bg-slate-900 rounded-2xl transition-all">
            <Package size={18} /> Products
          </Link>
          <Link href="/admin/orders" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-white dark:hover:bg-slate-900 rounded-2xl transition-all">
            <ShoppingCart size={18} /> Orders
          </Link>
          <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-white dark:hover:bg-slate-900 rounded-2xl transition-all">
            <Users size={18} /> Customers
          </Link>
          <div className="pt-8 mt-8 border-t border-slate-200 dark:border-slate-800">
             <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-white dark:hover:bg-slate-900 rounded-2xl transition-all">
              <Settings size={18} /> Settings
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto p-12">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
            <p className="text-slate-500">Welcome back, Administrator.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-white dark:bg-slate-900 p-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
              <Settings size={20} />
            </button>
            <div className="w-10 h-10 rounded-full bg-accent-gold flex items-center justify-center font-bold text-white">A</div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((item) => (
            <div key={item.id} className="glass-card p-6 rounded-3xl animate-fade-in">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">+4.5%</span>
              </div>
              <h3 className="text-slate-500 text-sm font-medium mb-1">{item.name}</h3>
              <p className="text-2xl font-bold tracking-tight">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Placeholder for Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-[2.5rem] h-[400px]">
             <h3 className="text-xl font-bold mb-6">Recent Orders</h3>
             <div className="space-y-6">
                {[1,2,3].map(i => (
                  <div key={i} className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl" />
                      <div>
                        <p className="font-semibold">Order #LUM-942{i}</p>
                        <p className="text-xs text-slate-500">John Doe • 2 minutes ago</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full uppercase">Processing</span>
                  </div>
                ))}
             </div>
          </div>
          <div className="glass-card p-8 rounded-[2.5rem] h-[400px]">
             <h3 className="text-xl font-bold mb-6">Top Products</h3>
             {/* Chart/Graph placeholder */}
             <div className="flex items-end justify-between h-48 gap-4 px-4 overflow-hidden">
                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                  <div 
                    key={i} 
                    className="w-full bg-accent-gold/20 rounded-t-xl hover:bg-accent-gold transition-all duration-500 animate-slide-up"
                    style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }}
                  />
                ))}
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
