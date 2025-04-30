"use client";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

const Navbar = () => {
  const totalItems = useCartStore((store) =>
    store.cartItems.reduce((sum, item) => (sum += item.quantity), 0)
  );

  return (
    <nav className="bg-gradient-to-r from-lime-100 to-lime-200 shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <svg
              className="w-8 h-8 text-lime-600 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <div className="text-2xl font-bold text-gray-800">Next Shop</div>
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              href="/products"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Products
            </Link>

            <Link
              href="/cart"
              className="relative flex items-center group text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H5.62L7.72 14.43C7.79 14.78 7.98 15.09 8.26 15.31C8.54 15.53 8.88 15.65 9.24 15.65H17.77C18.13 15.65 18.47 15.53 18.75 15.31C19.03 15.09 19.22 14.78 19.29 14.43L20.83 7.17H6.62M9.62 19.65C9.62 20.21 9.18 20.65 8.62 20.65C8.06 20.65 7.62 20.21 7.62 19.65C7.62 19.09 8.06 18.65 8.62 18.65C9.18 18.65 9.62 19.09 9.62 19.65ZM18.62 19.65C18.62 20.21 18.18 20.65 17.62 20.65C17.06 20.65 16.62 20.21 16.62 19.65C16.62 19.09 17.06 18.65 17.62 18.65C18.18 18.65 18.62 19.09 18.62 19.65Z"
                  fill="currentColor"
                />
              </svg>
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 transform transition-transform group-hover:scale-110">
                  {totalItems}
                </span>
              )}
            </Link>

            <Link
              href="/login"
              className="flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="currentColor"
                />
              </svg>
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
