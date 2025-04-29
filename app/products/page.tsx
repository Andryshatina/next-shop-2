import { getProducts } from "@/lib/api";
import { Product } from "@/types/product";
import ProductList from "@/components/ProductList";

const Products = async () => {
  const products: Product[] = await getProducts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Products;
