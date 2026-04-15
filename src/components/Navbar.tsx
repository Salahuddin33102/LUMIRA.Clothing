"use client";

import Link from "next/link";
import { User, Menu, FileText, PlusCircle } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="text-accent-gold" size={28} />
              DIGITAL KHATA<span className="text-accent-gold">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="nav-link text-slate-600 dark:text-slate-300">Dashboard</Link>
            <Link href="#" className="nav-link text-slate-600 dark:text-slate-300">Reports</Link>
            <Link href="#" className="nav-link text-slate-600 dark:text-slate-300">Customers</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:inline-flex items-center justify-center rounded-full bg-accent-gold px-6 py-2.5 text-sm font-bold text-white hover:bg-yellow-600 transition-all shadow-lg shadow-yellow-500/20 gap-2">
              <PlusCircle size={18} />
              Add Record
            </button>
            
            <Link href="/login" className="p-2 text-slate-600 dark:text-slate-300 hover:text-accent-gold transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-900">
              <User size={20} />
            </Link>
            
            <button 
              className="md:hidden text-slate-600 dark:text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-4 space-y-4 animate-in">
          <Link href="/" className="block py-2 text-slate-600 dark:text-slate-300 font-medium">Dashboard</Link>
          <Link href="#" className="block py-2 text-slate-600 dark:text-slate-300 font-medium">Reports</Link>
          <Link href="#" className="block py-2 text-slate-600 dark:text-slate-300 font-medium">Customers</Link>
          <button className="w-full mt-4 flex items-center justify-center gap-2 bg-accent-gold text-white py-3 rounded-xl font-bold">
            <PlusCircle size={18} />
            Add New Record
          </button>
        </div>
      )}
    </nav>
  );
}
