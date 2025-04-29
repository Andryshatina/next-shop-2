"use client";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/product";
import Image from "next/image";

const ProductDetails = ({ product }: { product: Product }) => {
  const addToCart = useCartStore((store) => store.addToCart);
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
            className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
