import { Product } from "@/types/product";
import { getProductById } from "@/lib/api";
import ProductDetails from "@/components/ProductDetails";

type PageProps = {
  params: Record<string, string>;
};
const ProductPage = async ({ params }: PageProps) => {
  const { id } = params;
  const product: Product = await getProductById(Number(id));

  return <ProductDetails product={product} />;
};

export default ProductPage;
