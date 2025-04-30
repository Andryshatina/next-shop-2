import { create } from "zustand";
import { Product, CartItemType } from "@/types/product";

interface CartStore {
  cartItems: CartItemType[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        const updatedItems = state.cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { cartItems: updatedItems };
      } else
        return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
    });
  },
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id != id),
    })),
  clearCart: () => set(() => ({ cartItems: [] })),
}));
