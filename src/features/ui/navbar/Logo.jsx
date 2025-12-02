// src/features/ui/navbar/Logo.jsx
import { Link } from 'react-router-dom';
import logoImg from '@/assets/logo.png';
import { cn } from '@/lib/utils';

export default function Logo({ className }) {
  return (
    <Link
      to="/"
      className={cn(
        'flex items-center gap-2 text-gray-900 hover:text-rose-600 transition-colors',
        className
      )}
    >
      {/* Logo image */}
      <img
        src={logoImg}
        alt="Zaynarah Logo"
        className="h-10 w-10 object-contain rounded-md"
      />

      {/* Text fallback */}
      <span className="text-2xl font-semibold tracking-tight select-none">
        Zaynarah
      </span>
    </Link>
  );
}
