"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plus, Search, Filter, Wallet, Users, Clock, Trash2, ArrowRight } from "lucide-react";
import { getKhataEntries, KhataEntry, deleteKhataEntry, getUniqueCustomers } from "@/lib/mock-khata";
import KhataForm from "@/components/KhataForm";
import toast from "react-hot-toast";
import Link from "next/link";

export default function KhataDashboard() {
  const router = useRouter();
  const [entries, setEntries] = useState<KhataEntry[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setEntries(getKhataEntries());
  }, []);

  const refreshEntries = () => {
    setEntries(getKhataEntries());
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    deleteKhataEntry(id);
    refreshEntries();
    toast.success("Entry deleted");
  };

  const customers = getUniqueCustomers();
  const totalBalance = entries.reduce((acc, curr) => acc + curr.price, 0);

  const filteredCustomers = customers.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 pb-12 min-h-screen bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              Business Ledger<span className="text-accent-gold">.</span>
            </h1>
            <p className="text-slate-500 font-medium mt-1">Manage your daily transactions and client accounts.</p>
          </div>
          <button 
            onClick={() => setIsFormOpen(true)}
            className="btn-premium flex items-center justify-center gap-2 px-8 py-4"
          >
            <Plus size={20} /> New Khata Entry
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-8 rounded-[2rem] border-l-4 border-l-accent-gold animate-slide-up">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-accent-gold/10 rounded-2xl text-accent-gold">
                <Wallet size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Total Khata</span>
            </div>
            <h3 className="text-4xl font-bold mb-1">${totalBalance.toLocaleString()}</h3>
            <p className="text-sm text-slate-500 font-medium font-outfit">Outstanding Balance</p>
          </div>

          <div className="glass-card p-8 rounded-[2rem] animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-500">
                <Users size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Total Clients</span>
            </div>
            <h3 className="text-4xl font-bold mb-1">{customers.length}</h3>
            <p className="text-sm text-slate-500 font-medium">Active business accounts</p>
          </div>

          <div className="glass-card p-8 rounded-[2rem] animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500">
                <Clock size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Recent Entries</span>
            </div>
            <h3 className="text-4xl font-bold mb-1">{entries.slice(0, 5).length}</h3>
            <p className="text-sm text-slate-500 font-medium">Recorded this period</p>
          </div>
        </div>

        {/* Customers Section */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            Client Ledgers <span className="bg-slate-200 dark:bg-slate-800 text-slate-500 text-sm px-3 py-1 rounded-full">{filteredCustomers.length}</span>
          </h2>
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent-gold transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search customers..." 
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-accent-gold/20 focus:border-accent-gold transition-all outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCustomers.map((customer, index) => {
            const customerTotal = entries
              .filter(e => e.userName === customer.name)
              .reduce((acc, curr) => acc + curr.price, 0);
            
            return (
              <Link 
                key={customer.name}
                href={`/customer/${encodeURIComponent(customer.name)}`}
                className="glass-card p-6 rounded-[2rem] hover:shadow-2xl hover:shadow-accent-gold/5 transition-all group border border-transparent hover:border-accent-gold/20 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-accent-gold font-bold text-xl uppercase">
                    {customer.name.charAt(0)}
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Total Balance</p>
                    <p className="text-xl font-black text-accent-gold group-hover:scale-105 transition-transform origin-right">${customerTotal.toLocaleString()}</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white capitalize truncate mb-1">{customer.name}</h3>
                <p className="text-sm text-slate-500 mb-6 font-medium">{customer.phone}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">View Full Ledger</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-accent-gold group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            );
          })}

          {filteredCustomers.length === 0 && (
            <div className="col-span-full py-24 text-center glass-card rounded-[3rem]">
              <div className="w-20 h-20 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                <Search size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">No customers found</h3>
              <p className="text-slate-500">Try searching with a different name or add a new entry.</p>
            </div>
          )}
        </div>
      </div>

      <KhataForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        onSuccess={refreshEntries} 
      />
    </div>
  );
}
