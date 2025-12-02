// src/features/ui/Navbar.jsx
import Logo from './navbar/Logo';
import DesktopMenu from './navbar/DesktopMenu';
import MobileMenu from './navbar/MobileMenu';
import ThemeToggle from './navbar/ThemeToggle';
import { useNavbarScroll } from './navbar/hooks/useNavbarScroll';

export default function Navbar() {
  const scrolled = useNavbarScroll();

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all border-b
      ${
        scrolled
          ? 'py-2 bg-white/60 dark:bg-black/40 shadow-sm'
          : 'py-4 bg-white/30 dark:bg-black/20'
      }
    `}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-6">
          <DesktopMenu />
          <ThemeToggle />
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
