import { create } from "zustand";
import { Product } from "@/types/product";

interface CartStore {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (product) =>
    set((state) => ({ cartItems: [...state.cartItems, product] })),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id != id),
    })),
  clearCart: () => set(() => ({ cartItems: [] })),
}));
