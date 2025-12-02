// src/features/ui/navbar/DesktopMenu.jsx
import { Link } from 'react-router-dom';
import CartBadge from './CartBadge';
import UserMenu from './UserMenu';
import MegaMenu from './MegaMenu';
import { Button } from '@/components/ui/button';
import { useUserStore } from '../../user/hooks/useUser';

export default function DesktopMenu() {
  const { user } = useUserStore();

  return (
    <div className="hidden md:flex items-center gap-8 text-lg font-medium">
      <Link to="/" className="hover:text-primary transition">
        Home
      </Link>
      <MegaMenu />
      <CartBadge />

      {user ? (
        <UserMenu />
      ) : (
        <>
          <Link to="/login" className="hover:text-primary transition">
            Login
          </Link>
          <Button asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </>
      )}
    </div>
  );
}
