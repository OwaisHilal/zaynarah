import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../../api/productsApi';
import { useCartStore } from '../../cart/hooks/cartStore';

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const addToCart = useCartStore((s) => s.addToCart);

  useEffect(() => {
    let mounted = true;
    fetchProductById(id).then((p) => {
      if (mounted) setProduct(p);
    });
    return () => (mounted = false);
  }, [id]);

  if (!product)
    return (
      <div className="text-center text-lg text-gray-500 mt-20">
        Product not found
      </div>
    );

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* Product Image */}
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-semibold text-gray-900 leading-tight">
            {product.title}
          </h1>

          <p className="text-gray-600 mt-4 leading-relaxed text-lg">
            {product.description}
          </p>

          <p className="mt-6 text-3xl font-bold text-rose-600">
            ₹{product.price}
          </p>

          <button
            onClick={() =>
              addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
              })
            }
            className="mt-8 bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md active:scale-95 w-fit"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
