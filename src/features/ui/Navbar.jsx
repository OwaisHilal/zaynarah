import { Link } from 'react-router-dom';
import { useCartStore } from '../cart/hooks/cartStore';
import { useState } from 'react';

export default function Navbar() {
  const cart = useCartStore((s) => s.cart);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-gray-900 hover:text-rose-600 transition"
        >
          Zaynarah
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          <Link
            to="/"
            className="text-gray-700 hover:text-rose-600 relative group transition duration-200"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-rose-600 transition-all duration-300" />
          </Link>

          <Link
            to="/shop"
            className="text-gray-700 hover:text-rose-600 relative group transition duration-200"
          >
            Shop
            <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-rose-600 transition-all duration-300" />
          </Link>

          <Link
            to="/cart"
            className="relative text-gray-700 hover:text-rose-600 transition duration-200"
          >
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-rose-600 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <div
              className="w-6 h-0.5 bg-gray-900 mb-1 transition-transform duration-300"
              style={{
                transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
              }}
            />
            <div
              className="w-6 h-0.5 bg-gray-900 mb-1 transition-opacity duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <div
              className="w-6 h-0.5 bg-gray-900 transition-transform duration-300"
              style={{
                transform: menuOpen
                  ? 'rotate(-45deg) translateY(-8px)'
                  : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 gap-4 text-lg font-medium">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-rose-600 transition"
            >
              Home
            </Link>
            <Link
              to="/shop"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-rose-600 transition"
            >
              Shop
            </Link>
            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="relative text-gray-700 hover:text-rose-600 transition"
            >
              Cart
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-4 bg-rose-600 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
