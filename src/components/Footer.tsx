import Link from "next/link";
import { FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white mb-6">
              <FileText className="text-accent-gold" size={28} />
              <h2 className="text-2xl font-bold">DIGITAL KHATA<span className="text-accent-gold">.</span></h2>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              The modern way to manage your business ledgers. Secure, digital, and always at your fingertips. Simplify your accounting today.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-6">Features</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Digital Ledger</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Customer Tracking</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Daily Reports</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cloud Backup</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2024 Digital Khata Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Security Commitment</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
