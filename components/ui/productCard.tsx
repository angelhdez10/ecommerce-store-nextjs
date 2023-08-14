"use client";

import { Product } from "@/types/type";
import { Expand, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import Currency from "./currency";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/products/${data?.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white border shadow-black rounded-md group cursor-pointer p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          alt="Images"
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute bottom-5 px-6 w-full ">
          <div className="flex gap-x-6 justify-center text-white text-3xl ">
            <IconButton onClick={() => {}} icon={<Expand size={20} />} />
            <IconButton onClick={() => {}} icon={<ShoppingCart size={20} />} />
            <IconButton onClick={() => {}} icon={<Heart size={20} />} />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data?.name}</p>
        <p className="text-sm text-gray-500">{data?.category?.name}</p>
      </div>
      <div>
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
