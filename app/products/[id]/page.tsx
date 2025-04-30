import { Product } from "@/types/product";
import { getProductById } from "@/lib/api";
import ProductDetails from "@/components/ProductDetails";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product: Product = await getProductById(Number(id));

  return <ProductDetails product={product} />;
};

export default ProductPage;
