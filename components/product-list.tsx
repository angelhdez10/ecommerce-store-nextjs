import { Product } from "@/types/type";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/productCard";

interface ProductProps {
  title: string;
  products: Product[];
}

const ProductList: React.FC<ProductProps> = ({ title, products }) => {
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-3xl">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products.length ? (
          products?.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))
        ) : (
          <NoResults />
        )}
      </div>
    </div>
  );
};

export default ProductList;
