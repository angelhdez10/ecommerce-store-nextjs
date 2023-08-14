import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/container";
import ProductList from "@/components/product-list";
import NoResults from "@/components/ui/no-results";
import Filter from "./components/filter";
import ProductCard from "@/components/ui/productCard";
import MobileFilters from "./components/mobile-filters";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    sizeId: string;
    colorId: string;
  };
}

export const revalidate = 0;

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params?.categoryId,
    sizeId: searchParams?.sizeId,
    colorId: searchParams?.colorId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);
  console.log(category);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" data={sizes} name="Sizes" />
              <Filter valueKey="colorId" data={colors} name="Color" />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {!products.length && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products?.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      {!!products.length ? (
        <ProductList title="Category" products={products} />
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default CategoryPage;
