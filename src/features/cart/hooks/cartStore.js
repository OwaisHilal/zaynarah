import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      // if item already exists, increase qty. minimal logic:
      const found = state.cart.find((i) => i.id === item.id);
      if (found) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, qty: (i.qty || 1) + 1 } : i
          ),
        };
      }
      return { cart: [...state.cart, { ...item, qty: 1 }] };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  updateQty: (id, qty) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, qty } : item
      ),
    })),

  clearCart: () => set({ cart: [] }),
}));
