"use client";
import { Product } from "@/types/type";
import Currency from "./ui/currency";
import { Button } from "./ui/Button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="font-semibold text-3xl text-gray-900 text-center">
        {data.name}
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-xl text-gray-900">
          <Currency value={data?.price} />
        </div>
      </div>
      <hr className="my-4 w-full" />
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="rounded-full h-6 w-6 border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
