// src/features/ui/home/HeroSection.jsx
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center">
      <img
        src="/HeroImg.jpg"
        alt="Pashmina Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-6 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Discover The Luxury of <span className="text-rose-300">Pashmina</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
          Handwoven in Kashmir. Crafted with love. Designed for those who
          appreciate timeless elegance.
        </p>
        <Button asChild size="lg">
          <Link to="/shop">Shop Now</Link>
        </Button>
      </div>
    </section>
  );
}
