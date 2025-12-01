import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CartPage from './features/cart/pages/CartPage';
import ProductPage from './features/products/pages/ProductPage';
import Home from './pages/Home';
import ShopPage from './features/products/pages/ShopPage';
import Layout from './features/ui/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
