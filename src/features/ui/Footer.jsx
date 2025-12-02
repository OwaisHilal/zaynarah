import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className={cn('bg-gray-900 text-gray-300 mt-20')}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold text-white tracking-wide">
            Zaynarah
          </h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            Handcrafted Kashmiri pashmina shawls made with centuries-old
            artistry.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Explore</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-rose-400 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="hover:text-rose-400 transition-colors duration-200"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/cart"
                className="hover:text-rose-400 transition-colors duration-200"
              >
                Cart
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-gray-400">Email: support@zaynarah.com</p>
          <p className="text-gray-400 mt-1">Phone: +91 90000 00000</p>
        </div>
      </div>

      {/* Separator */}
      <Separator className="border-gray-700" />

      {/* Bottom bar */}
      <div className="mt-6 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Zaynarah — All rights reserved.
      </div>
    </footer>
  );
}
