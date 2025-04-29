"use client";

import Image from "next/image";
import { Product } from "@/types/product";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <div className="relative w-full h-48">
        <Image
          src={product.image}
          alt={product.title}
          className="object-cover rounded-t-lg"
          fill
        />
      </div>
      <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-700 mt-1">{product.description}</p>
      <p className="text-lg font-bold mt-2">${product.price}</p>
      <p className="text-sm text-gray-500 mt-1">Category: {product.category}</p>
      <p className="text-sm text-gray-500 mt-1">
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>
    </div>
  );
};

export default ProductCard;
