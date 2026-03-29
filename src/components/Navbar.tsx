"use client";

import Link from "next/link";
import { ShoppingBag, User, Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white">
              LUMIRA<span className="text-accent-gold">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/shop" className="nav-link text-slate-600 dark:text-slate-300">Shop</Link>
            <Link href="/collections" className="nav-link text-slate-600 dark:text-slate-300">Collections</Link>
            <Link href="/about" className="nav-link text-slate-600 dark:text-slate-300">Our Story</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            <button className="text-slate-600 dark:text-slate-300 hover:text-accent-gold transition-colors">
              <Search size={20} />
            </button>
            <Link href="/login" className="text-slate-600 dark:text-slate-300 hover:text-accent-gold transition-colors">
              <User size={20} />
            </Link>
            <button className="relative text-slate-600 dark:text-slate-300 hover:text-accent-gold transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-accent-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button 
              className="md:hidden text-slate-600 dark:text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (simplified) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-4 space-y-4">
          <Link href="/shop" className="block text-slate-600 dark:text-slate-300">Shop</Link>
          <Link href="/collections" className="block text-slate-600 dark:text-slate-300">Collections</Link>
          <Link href="/about" className="block text-slate-600 dark:text-slate-300">Our Story</Link>
        </div>
      )}
    </nav>
  );
}
