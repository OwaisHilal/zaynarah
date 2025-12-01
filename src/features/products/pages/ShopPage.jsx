import { useEffect, useState } from 'react';
import { fetchAllProducts } from '../../../api/productsApi';
import ProductFilters from '../components/ProductFilters';
import ProductGrid from '../components/ProductGrid';

export default function ShopPage() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ max: 1000, value: 1000 });

  useEffect(() => {
    let mounted = true;
    fetchAllProducts().then((data) => {
      if (mounted) {
        setItems(data);

        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(data.map((p) => p.category))
        );
        setCategories(uniqueCategories);

        // Set max price dynamically
        const maxPrice = Math.max(...data.map((p) => p.price));
        setPriceRange({ max: maxPrice, value: maxPrice });
      }
    });
    return () => (mounted = false);
  }, []);

  if (!items.length)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">
        Loading products...
      </div>
    );

  // Compute filtered items on the fly
  const filteredItems = items.filter(
    (p) =>
      (!selectedCategory || p.category === selectedCategory) &&
      p.price <= priceRange.value
  );

  return (
    <main className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
        <div className="text-center px-6">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            The Finest Kashmir Craft
          </h1>
          <p className="text-lg text-gray-700 mt-4 max-w-xl mx-auto">
            Explore our curated collection of authentic handwoven Pashmina
            shawls.
          </p>
        </div>
      </section>

      {/* Filters + Products Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 flex gap-6">
        {/* Filters Sidebar */}
        <div className="w-1/4">
          <ProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceChange={(value) => setPriceRange({ ...priceRange, value })}
          />
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <ProductGrid items={filteredItems} pageSize={8} />
        </div>
      </section>
    </main>
  );
}
