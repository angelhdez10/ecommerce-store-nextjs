import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Container from "@/components/container";
import ProductList from "@/components/product-list";

export const revalidate = 0;

export default async function Home() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("4505e202-4aaf-4b31-987b-023e5761a63b");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="space-y-10 ml-8">
        <ProductList title="Featured Products" products={products} />
      </div>
    </Container>
  );
}
