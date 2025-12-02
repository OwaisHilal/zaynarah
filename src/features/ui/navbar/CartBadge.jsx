// src/features/ui/navbar/CartBadge.jsx
import { Link } from 'react-router-dom';
import { useCartStore } from '../../cart/hooks/cartStore';

export default function CartBadge() {
  const cart = useCartStore((s) => s.cart);

  return (
    <Link
      to="/cart"
      className="relative text-gray-700 hover:text-primary transition"
    >
      Cart
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-4 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
          {cart.length}
        </span>
      )}
    </Link>
  );
}
