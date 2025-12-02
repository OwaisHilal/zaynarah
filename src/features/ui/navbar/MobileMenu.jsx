// src/features/ui/navbar/MobileMenu.jsx
import { Link } from 'react-router-dom';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible';
import CartBadge from './CartBadge';
import { useUserStore } from '../../user/hooks/useUser';
import { useNavigate } from 'react-router-dom';

export default function MobileMenu() {
  const { user, logout } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden flex flex-col gap-1 p-2">
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-6 w-64">
        <nav className="flex flex-col gap-6 text-lg font-medium">
          <Link to="/">Home</Link>

          {/* Collapsible Shop Menu */}
          <Collapsible type="single" defaultValue="">
            <CollapsibleTrigger
              value="shop"
              className="flex justify-between items-center w-full"
            >
              Shop
            </CollapsibleTrigger>
            <CollapsibleContent
              value="shop"
              className="flex flex-col gap-2 mt-2 pl-2"
            >
              <Link to="/shop" className="hover:text-primary">
                All
              </Link>
              <Link to="/shop?category=clothing" className="hover:text-primary">
                Clothing
              </Link>
              <Link
                to="/shop?category=electronics"
                className="hover:text-primary"
              >
                Electronics
              </Link>
              <Link to="/shop?category=beauty" className="hover:text-primary">
                Beauty
              </Link>
              <Link to="/shop?category=home" className="hover:text-primary">
                Home & Living
              </Link>
              <Link
                to="/shop?category=accessories"
                className="hover:text-primary"
              >
                Accessories
              </Link>
            </CollapsibleContent>
          </Collapsible>

          {/* Cart */}
          <CartBadge />

          {/* User Links */}
          {user ? (
            <>
              <Link to="/profile">Profile</Link>
              <Button variant="destructive" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Button asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
