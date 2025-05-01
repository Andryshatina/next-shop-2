"use client";
import { useCartStore } from "@/store/cartStore";
import { CartItemType } from "@/types/product";
import Image from "next/image";

const CartItem = ({ item }: { item: CartItemType }) => {
  const removeFromCart = useCartStore((store) => store.removeFromCart);
  const updateQuantity = useCartStore((store) => store.updateQuantity);
  return (
    <div className="flex items-center bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="relative w-24 h-24">
        <Image
          src={item.image}
          alt={item.title}
          className="rounded-md object-cover"
          fill
        />
      </div>
      <div className="flex-1 ml-6">
        <h2 className="text-lg font-medium text-gray-800">{item.title}</h2>
        <p className="text-indigo-600 font-semibold mt-1">${item.price}</p>

        <div className="flex items-center mt-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className={`p-1 rounded-md ${
              item.quantity <= 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            aria-label="Decrease quantity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 12H6"
              />
            </svg>
          </button>

          <span className="mx-3 min-w-[20px] text-center">{item.quantity}</span>

          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="p-1 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Increase quantity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-gray-500 hover:text-red-500 transition-colors ml-4"
        aria-label="Remove from cart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
