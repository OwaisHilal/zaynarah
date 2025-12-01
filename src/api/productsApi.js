// Simple local "API" until you have a backend.
// In future replace with fetch('/api/products') or Axios calls.
import { products } from '../features/products/productsData';

export function fetchAllProducts() {
  // simulate async
  return Promise.resolve(products);
}

export function fetchProductById(id) {
  const p = products.find((x) => x.id === id);
  return Promise.resolve(p || null);
}
