import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Premium Fashion Showcase"
          fill
          className="object-cover object-center scale-110"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/40 dark:bg-slate-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-tight">
            Elegance in Every <span className="text-accent-gold">Thread</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-lg">
            Experience the pinnacle of modern craftsmanship. Our new Spring/Summer collection is now available for those who value timeless style.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/shop" className="btn-premium flex items-center justify-center">
              Shop Now
            </Link>
            <Link href="/collections" className="btn-outline border-white text-white hover:bg-white hover:text-slate-950 flex items-center justify-center">
              Explore Collections
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-white/50 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-white/20" />
      </div>
    </section>
  );
}
