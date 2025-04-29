"use client";

import Image from "next/image";
import { Product } from "@/types/product";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className="bg-white rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
        <div className="relative w-full h-64">
          <Image
            src={product.image}
            alt={product.title}
            className="object-contain"
            fill
          />
        </div>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
            {product.title}
          </h2>
          <p className="text-gray-600 mt-2 h-12 line-clamp-2">
            {product.description}
          </p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
            <span className="text-sm text-gray-500">
              ★ {product.rating.rate}
            </span>
          </div>
          <div className="mt-2">
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
