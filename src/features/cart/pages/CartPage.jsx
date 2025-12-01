import { useCartStore } from '../hooks/cartStore';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cart, removeFromCart, updateQty, clearCart } = useCartStore();

  const total = cart.reduce((s, i) => s + (i.price || 0) * (i.qty || 1), 0);

  if (!cart.length)
    return (
      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">
          Your cart is empty 👜
        </h1>
        <p className="text-gray-600 mb-8">
          Explore our handcrafted Kashmiri pashmina collection.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-xl text-lg hover:bg-gray-800 transition"
        >
          Browse Products
        </Link>
      </main>
    );

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-gray-900 mb-10">Your Cart</h1>

      <ul className="space-y-6">
        {cart.map((it) => (
          <li
            key={it.id}
            className="flex items-center gap-6 bg-white shadow-sm rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition"
          >
            {/* PRODUCT IMAGE */}
            <img
              src={it.image}
              alt={it.title}
              className="w-28 h-28 rounded-xl object-cover border"
            />

            {/* DETAILS */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                {it.title}
              </h3>

              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {it.description}
              </p>

              <p className="text-lg font-bold text-rose-600 mt-2">
                ₹{it.price}
              </p>
            </div>

            {/* QUANTITY */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQty(it.id, Math.max(1, (it.qty || 1) - 1))}
                className="w-9 h-9 bg-gray-200 hover:bg-gray-300 rounded-lg flex justify-center items-center text-xl font-semibold"
              >
                -
              </button>

              <span className="text-lg font-medium">{it.qty}</span>

              <button
                onClick={() => updateQty(it.id, (it.qty || 1) + 1)}
                className="w-9 h-9 bg-gray-900 text-white hover:bg-gray-800 rounded-lg flex justify-center items-center text-xl font-semibold"
              >
                +
              </button>
            </div>

            {/* REMOVE */}
            <button
              onClick={() => removeFromCart(it.id)}
              className="text-sm text-gray-400 hover:text-rose-600 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* TOTAL SECTION */}
      <div className="mt-12 flex items-center justify-between bg-gray-50 p-6 rounded-2xl border">
        <h2 className="text-2xl font-semibold">Total</h2>
        <p className="text-3xl font-bold text-rose-600">₹{total}</p>
      </div>

      {/* BUTTONS */}
      <div className="mt-10 flex gap-4">
        <button
          onClick={() => {}}
          className="flex-1 bg-gray-900 text-white py-4 rounded-xl text-lg hover:bg-gray-800 transition"
        >
          Proceed to Checkout
        </button>

        <button
          onClick={() => clearCart()}
          className="flex-1 bg-white border border-gray-300 text-gray-700 py-4 rounded-xl text-lg hover:bg-gray-100 transition"
        >
          Clear Cart
        </button>
      </div>
    </main>
  );
}
