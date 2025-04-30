"use client";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/product";
import Image from "next/image";
import toast from "react-hot-toast";

const ProductDetails = ({ product }: { product: Product }) => {
  const addToCart = useCartStore((store) => store.addToCart);
  const inCart = useCartStore((store) =>
    store.cartItems.find((item) => item.id === product.id)
  );
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={product.image}
              alt={product.title}
              className="object-contain"
              fill
              priority
            />
          </div>
        </div>

        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <div className="flex items-center gap-2">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {product.category}
            </div>
            <div className="flex items-center text-yellow-500">
              ★ {product.rating.rate}
              <span className="text-gray-500 text-sm ml-2">
                ({product.rating.count} reviews)
              </span>
            </div>
          </div>
          <p className="text-4xl font-bold text-indigo-600">${product.price}</p>
          <p className="text-gray-600 text-lg leading-relaxed">
            {product.description}
          </p>
          <button
            className="group relative flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-lg font-medium transition-all 
  bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800
  text-white shadow-md hover:shadow-lg active:scale-[0.98]"
            onClick={() => {
              addToCart(product);
              toast.success("Added to cart!");
            }}
          >
            <span className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H5.62L7.72 14.43C7.79 14.78 7.98 15.09 8.26 15.31C8.54 15.53 8.88 15.65 9.24 15.65H17.77C18.13 15.65 18.47 15.53 18.75 15.31C19.03 15.09 19.22 14.78 19.29 14.43L20.83 7.17H6.62M9.62 19.65C9.62 20.21 9.18 20.65 8.62 20.65C8.06 20.65 7.62 20.21 7.62 19.65C7.62 19.09 8.06 18.65 8.62 18.65C9.18 18.65 9.62 19.09 9.62 19.65ZM18.62 19.65C18.62 20.21 18.18 20.65 17.62 20.65C17.06 20.65 16.62 20.21 16.62 19.65C16.62 19.09 17.06 18.65 17.62 18.65C18.18 18.65 18.62 19.09 18.62 19.65Z"
                  fill="currentColor"
                />
              </svg>
              <span>Add to Cart</span>
            </span>

            {inCart && (
              <span className="ml-2 flex items-center justify-center bg-white text-indigo-700 text-sm font-bold rounded-full w-6 h-6">
                {inCart.quantity}
              </span>
            )}

            <span className="absolute -top-1 -right-1 transform scale-0 group-hover:scale-100 transition-transform">
              {inCart && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ✓
                </span>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
