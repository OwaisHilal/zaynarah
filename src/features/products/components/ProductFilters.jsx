import React from 'react';

const ProductFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
}) => {
  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">Filters</h3>

      {/* Category Filter */}
      <div className="mb-3">
        <label className="block mb-1 font-medium">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="border rounded p-1 w-full"
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Price Filter */}
      <div>
        <label className="block mb-1 font-medium">Max Price</label>
        <input
          type="range"
          min="0"
          max={priceRange.max}
          value={priceRange.value}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full"
        />
        <span>${priceRange.value}</span>
      </div>
    </div>
  );
};

export default ProductFilters;
