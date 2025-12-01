import { Link } from 'react-router-dom';
import { useCartStore } from '../../cart/hooks/cartStore';

export default function ProductCard({ product }) {
  const addToCart = useCartStore((s) => s.addToCart);

  function handleAdd() {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
    });
  }

  return (
    <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover"
        />
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-gray-900">
          <Link
            to={`/product/${product.id}`}
            className="hover:text-rose-600 transition-colors duration-200"
          >
            {product.title}
          </Link>
        </h3>

        <p className="text-gray-600 text-sm line-clamp-2">
          {product.description}
        </p>

        <p className="text-2xl font-bold text-rose-600">₹{product.price}</p>

        <button
          onClick={handleAdd}
          className="mt-2 bg-gray-900 text-white py-2.5 rounded-xl hover:bg-gray-800 transition-colors duration-200 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}
