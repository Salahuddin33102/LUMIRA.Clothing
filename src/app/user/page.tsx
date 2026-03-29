import { ShoppingBag, Heart, User, Clock, MapPin, CreditCard } from "lucide-react";

export default function UserDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight">Your Profile</h1>
        <p className="text-slate-500">Manage your orders and preferences.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Sidebar / Profile Card */}
        <div className="lg:col-span-1 glass-card p-10 rounded-[2.5rem] h-fit sticky top-24">
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800 mb-6 flex items-center justify-center">
              <User size={40} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-slate-500 text-sm">Member since 2024</p>
          </div>

          <nav className="space-y-4">
            <button className="w-full flex items-center gap-4 px-6 py-4 bg-slate-900 text-white rounded-2xl shadow-lg">
              <ShoppingBag size={18} /> My Orders
            </button>
            <button className="w-full flex items-center gap-4 px-6 py-4 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-2xl transition-all">
              <Heart size={18} /> Wishlist
            </button>
            <button className="w-full flex items-center gap-4 px-6 py-4 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-2xl transition-all">
              <MapPin size={18} /> Addresses
            </button>
            <button className="w-full flex items-center gap-4 px-6 py-4 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-2xl transition-all">
              <CreditCard size={18} /> Payment Methods
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-2 space-y-10">
          <section className="glass-card p-10 rounded-[2.5rem]">
            <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
              <Clock size={20} className="text-accent-gold" /> Recent Orders
            </h2>
            
            <div className="space-y-8">
              {[1, 2].map((i) => (
                <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-8 last:border-0 last:pb-0">
                  <div className="flex items-center gap-6 mb-4 sm:mb-0">
                    <div className="w-20 h-24 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden relative">
                      {/* Image placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center text-[10px] text-slate-400 uppercase font-bold">LUMIRA</div>
                    </div>
                    <div>
                      <p className="font-bold">Signature Overcoat</p>
                      <p className="text-xs text-slate-500 mb-1">Order #LUM-1025{i} • Jan 12, 2024</p>
                      <p className="text-sm font-semibold tracking-tight">$850.00</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3 w-full sm:w-auto">
                    <span className="text-xs font-bold px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 uppercase tracking-widest">Delivered</span>
                    <button className="text-xs font-bold text-accent-gold hover:underline">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card p-10 rounded-[2.5rem]">
            <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
              <ShoppingBag size={20} className="text-accent-gold" /> Recommendations for You
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {[1, 2].map(i => (
                <div key={i} className="flex gap-4">
                  <div className="w-16 h-20 bg-slate-100 dark:bg-slate-800 rounded-lg flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold">Cashmere Scarf</p>
                    <p className="text-xs text-slate-500">$120.00</p>
                    <button className="text-[10px] font-bold text-accent-gold hover:underline mt-2">ADD TO CART</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
