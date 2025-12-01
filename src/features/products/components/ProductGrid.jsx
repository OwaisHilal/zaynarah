import { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ items, pageSize = 8 }) {
  const [visibleCount, setVisibleCount] = useState(pageSize);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + pageSize);
  };

  const visibleItems = items.slice(0, visibleCount);

  return (
    <div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleItems.map((product) => (
          <div
            key={product.id}
            className="transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {visibleCount < items.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-6 rounded-xl transition-all shadow-md active:scale-95"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
