import { 
  Users, 
  Settings, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Clock, 
  FileText, 
  TrendingUp 
} from "lucide-react";
import { getKhataEntries, getUniqueCustomers } from "@/lib/mock-khata";

export default function AdminDashboard() {
  const entries = getKhataEntries();
  const customers = getUniqueCustomers();
  const totalBalance = entries.reduce((acc, curr) => acc + curr.price, 0);

  const stats = [
    { id: 1, name: "Global Balance", value: `$${totalBalance.toLocaleString()}`, icon: Wallet, color: "text-emerald-500" },
    { id: 2, name: "Active Clients", value: `${customers.length}`, icon: Users, color: "text-blue-500" },
    { id: 3, name: "Total Entries", value: `${entries.length}`, icon: FileText, color: "text-purple-500" },
    { id: 4, name: "Growth Rate", value: "+14.2%", icon: TrendingUp, color: "text-accent-gold" },
  ];

  return (
    <div className="p-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Overview</h1>
          <p className="text-slate-500">Master control for Digital Khata ledger.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white dark:bg-slate-900 p-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
            <Settings size={20} />
          </button>
          <div className="w-10 h-10 rounded-full bg-accent-gold flex items-center justify-center font-bold text-white uppercase">A</div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {stats.map((item) => (
          <div key={item.id} className="glass-card p-6 rounded-3xl animate-fade-in shadow-sm hover:shadow-xl transition-all">
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

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-[2.5rem] h-[500px] flex flex-col">
           <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
             <Clock size={20} className="text-accent-gold" /> System Transaction Feed
           </h3>
           <div className="space-y-6 overflow-y-auto pr-4 custom-scrollbar">
              {entries.slice(0, 10).map((entry, i) => (
                <div key={entry.id} className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 group cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/10 transition-colors rounded-xl p-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center font-bold text-slate-400">
                      {entry.userName.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white capitalize">{entry.userName}</p>
                      <p className="text-xs text-slate-500">{entry.quality} • {entry.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-accent-gold">${entry.price.toLocaleString()}</p>
                    <span className="text-[10px] uppercase font-bold text-emerald-500">Verified</span>
                  </div>
                </div>
              ))}
           </div>
        </div>

        <div className="glass-card p-8 rounded-[2.5rem] h-[500px]">
           <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
             <TrendingUp size={20} className="text-indigo-500" /> Cashflow Projection
           </h3>
           <div className="flex items-end justify-between h-56 gap-4 px-4 overflow-hidden border-b border-slate-200 dark:border-slate-800 pb-4">
              {[40, 70, 45, 90, 65, 80, 50, 85, 60, 95].map((h, i) => (
                <div 
                  key={i} 
                  className="w-full bg-accent-gold/20 rounded-t-xl hover:bg-accent-gold transition-all duration-500 animate-slide-up"
                  style={{ height: `${h}%`, animationDelay: `${i * 50}ms` }}
                />
              ))}
           </div>
           <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <p className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-2">Projected Inflow</p>
                <p className="text-2xl font-black text-emerald-500">${(totalBalance * 1.15).toLocaleString()}</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <p className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-2">System Health</p>
                <p className="text-2xl font-black text-indigo-500">OPTIMAL</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

