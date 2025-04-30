import { Product } from "@/types/product";
import { getProductById } from "@/lib/api";
import ProductDetails from "@/components/ProductDetails";

type paramsType = Promise<{ id: string }>;
const ProductPage = async (props: { params: paramsType }) => {
  const { id } = await props.params;
  const product: Product = await getProductById(Number(id));

  return <ProductDetails product={product} />;
};

export default ProductPage;
