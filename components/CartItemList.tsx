"use client";
import { useCartStore } from "@/store/cartStore";
import CartItem from "./CartItem";

const CartItemList = () => {
  const cartItems = useCartStore((store) => store.cartItems);
  const clearCart = useCartStore((store) => store.clearCart);
  return cartItems.length == 0 ? (
    <div className="text-center text-gray-500 p-8">
      <p className="text-xl">Your cart is empty</p>
    </div>
  ) : (
    <div className="space-y-4 max-w-2xl mx-auto">
      {cartItems.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      <div className="flex justify-end mt-6">
        <button
          onClick={clearCart}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartItemList;
