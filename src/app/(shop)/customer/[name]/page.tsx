"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Wallet, Package, Clock, Trash2, Plus, FileText } from "lucide-react";
import { getKhataEntries, KhataEntry, deleteKhataEntry } from "@/lib/mock-khata";
import KhataForm from "@/components/KhataForm";
import toast from "react-hot-toast";
import Link from "next/link";

export default function CustomerLedgerPage() {
  const params = useParams();
  const router = useRouter();
  const rawName = params?.name as string;
  const decodedName = rawName ? decodeURIComponent(rawName) : "";

  const [entries, setEntries] = useState<KhataEntry[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    if (!decodedName) return;
    const customerEntries = getKhataEntries().filter(e => e.userName === decodedName);
    setEntries(customerEntries);
  }, [decodedName]);

  const refreshEntries = () => {
    const customerEntries = getKhataEntries().filter(e => e.userName === decodedName);
    setEntries(customerEntries);
  };

  const handleDelete = (id: string) => {
    deleteKhataEntry(id);
    refreshEntries();
    toast.success("Entry deleted");
  };

  const totalBalance = entries.reduce((acc, curr) => acc + curr.price, 0);
  const totalQty = entries.reduce((acc, curr) => acc + curr.quantity, 0);
  const customerPhone = entries[0]?.phone || "No phone recorded";

  const groupedByDate = entries.reduce((acc: any, entry) => {
    const date = entry.date;
    if (!acc[date]) acc[date] = [];
    acc[date].push(entry);
    return acc;
  }, {});

  return (
    <div className="pt-24 pb-12 min-h-screen bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Header */}
        <div className="mb-11 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-sm hover:scale-110 transition-transform text-slate-600 dark:text-slate-300"
            >
              <ArrowLeft size={20} />
            </Link>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-accent-gold/10 text-accent-gold text-[10px] font-bold uppercase tracking-wider rounded">Customer Account</span>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">{decodedName}</h1>
              <p className="text-slate-500 font-medium">{customerPhone}</p>
            </div>
          </div>
          
          <button 
            onClick={() => setIsFormOpen(true)}
            className="btn-premium flex items-center justify-center gap-2 px-8 py-4"
          >
            <Plus size={20} /> New Entry for {decodedName}
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-8 rounded-[2rem] border-l-4 border-l-accent-gold animate-slide-up">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-accent-gold/10 rounded-2xl text-accent-gold">
                <Wallet size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Total Balance</span>
            </div>
            <h3 className="text-4xl font-bold mb-1">${totalBalance.toLocaleString()}</h3>
            <p className="text-sm text-slate-500 font-medium">Pending amount in ledger</p>
          </div>

          <div className="glass-card p-8 rounded-[2rem] animate-slide-up shadow-indigo-500/5" style={{ animationDelay: "100ms" }}>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-500">
                <Package size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Total Units</span>
            </div>
            <h3 className="text-4xl font-bold mb-1">{totalQty}</h3>
            <p className="text-sm text-slate-500 font-medium">Combined quantity delivered</p>
          </div>

          <div className="glass-card p-8 rounded-[2rem] animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500">
                <Clock size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Total Entries</span>
            </div>
            <h3 className="text-4xl font-bold mb-1">{entries.length}</h3>
            <p className="text-sm text-slate-500 font-medium">Transaction history count</p>
          </div>
        </div>

        {/* Entries List Grouped by Date */}
        <div className="space-y-12">
          {Object.keys(groupedByDate).sort((a,b) => new Date(b).getTime() - new Date(a).getTime()).map(date => (
            <div key={date} className="space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400 whitespace-nowrap">
                  {new Date(date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </h2>
                <div className="h-px w-full bg-slate-200 dark:bg-slate-800"></div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {groupedByDate[date].map((entry: any) => (
                  <div key={entry.id} className="glass-card p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-2xl transition-all border border-transparent hover:border-accent-gold/20 group">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-accent-gold">
                        <FileText size={28} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Quality & Product</p>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">{entry.quality}</h4>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-1 text-left md:text-center">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Qty / Rate</p>
                        <p className="font-bold">{entry.quantity} units <span className="text-slate-400 font-normal ml-1">@ ${entry.rate}</span></p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-10">
                      <div className="text-right">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Total Amount</p>
                        <p className="text-2xl font-black text-accent-gold">${entry.price.toLocaleString()}</p>
                      </div>
                      <button 
                        onClick={() => handleDelete(entry.id)}
                        className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {entries.length === 0 && (
            <div className="text-center py-40 glass-card rounded-[3rem]">
              <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center text-slate-300">
                <FileText size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">No records yet</h3>
              <p className="text-slate-500 max-w-xs mx-auto">Start recording transactions for {decodedName} using the button above.</p>
            </div>
          )}
        </div>
      </div>

      <KhataForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        onSuccess={refreshEntries}
        initialData={{ userName: decodedName, phone: customerPhone }}
      />
    </div>
  );
}
