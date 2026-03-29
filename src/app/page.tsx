import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const featuredProducts = [
  { id: 1, name: "Signature Cashmere Overcoat", price: 850, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop", category: "Outerwear" },
  { id: 2, name: "Minimalist Silk Blouse", price: 320, image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?q=80&w=800&auto=format&fit=crop", category: "Tops" },
  { id: 3, name: "Structured Tailored Trousers", price: 450, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop", category: "Bottoms" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero */}
      <Hero />

      {/* Featured Collection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-slide-up">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-accent-gold font-semibold uppercase tracking-widest text-xs">The Essence</span>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">New Arrivals</h2>
          </div>
          <Link href="/shop" className="text-slate-600 dark:text-slate-400 font-medium hover:text-accent-gold transition-colors flex items-center group">
            View All <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 glass-card">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-gold transition-colors">{product.name}</h3>
              <p className="text-slate-500 font-medium">${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section / Story */}
      <section className="bg-slate-100 dark:bg-slate-900 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              <div className="aspect-square glass-card rounded-2xl overflow-hidden shadow-2xl scale-95 hover:scale-100 transition-transform duration-700">
                <Image
                  src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1000&auto=format&fit=crop"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 animate-spin-slow opacity-20 hidden md:block">
                 <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#D4AF37" d="M42.7,-64.1C55.4,-58.5,65.8,-46.8,70.9,-33.4C76,-19.9,75.7,-4.8,72.4,9.6C69,24,62.6,37.6,52.6,48.1C42.7,58.7,29.1,66.1,14.7,69.5C0.3,72.9,-15,72.3,-29.4,67.3C-43.8,62.3,-57.3,52.9,-65.7,40.1C-74.1,27.3,-77.3,11.2,-75.4,-4.1C-73.5,-19.4,-66.4,-33.9,-55.8,-43.8C-45.2,-53.8,-31.1,-59.1,-17.5,-63.4C-3.9,-67.7,9.3,-70.9,42.7,-64.1Z" transform="translate(100 100)" />
                </svg>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">Crafting the Future of <br/><span className="text-accent-gold">Conscious Luxury</span>.</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                At Lumira, we believe that true style is etched in quality, not quantity. Our pieces are designed to last a lifetime, using ethically sourced materials and expert craftsmanship that honors tradition while embracing modern minimalism.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-2xl font-bold text-accent-gold">100%</h4>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Traceable Materials</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-accent-gold">20+</h4>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Artisan Partnerships</p>
                </div>
              </div>
              <Link href="/about" className="btn-premium">Read Our Mission</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="glass-card p-16 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 blur-3xl -z-10" />
          
          <h2 className="text-4xl font-bold mb-6">Join the Lumira Circle</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto">
            Stay updated on our latest collections and exclusive events. Subscribe to our newsletter for access to the finer details.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 bg-slate-100 dark:bg-slate-800 border-0 rounded-full focus:ring-2 focus:ring-accent-gold outline-none transition-all"
            />
            <button type="submit" className="btn-premium">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
