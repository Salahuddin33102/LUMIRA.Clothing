import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-6">LUMIRA<span className="text-accent-gold">.</span></h2>
            <p className="text-sm leading-relaxed">
              Curating the finest in modern, minimalist fashion. We believe in quality, sustainability, and timeless elegance.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-6">Shop</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/collections/men" className="hover:text-white transition-colors">Men's Collection</Link></li>
              <li><Link href="/collections/women" className="hover:text-white transition-colors">Women's Collection</Link></li>
              <li><Link href="/shop/accessories" className="hover:text-white transition-colors">Accessories</Link></li>
              <li><Link href="/shop/featured" className="hover:text-white transition-colors">Featured</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Information</Link></li>
              <li><Link href="/returns" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/size-guide" className="hover:text-white transition-colors">Size Guide</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2024 LUMIRA Clothing. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
