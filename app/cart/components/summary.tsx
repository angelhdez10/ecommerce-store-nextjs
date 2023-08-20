"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Currency from "@/components/ui/currency";
import { Button } from "@/components/ui/Button";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";

export const revalidate = 0;

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment done.");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items?.reduce(
    (totalPrice, item) => (totalPrice += Number(item.price)),
    0,
  );

  const onCheckout = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productsIds: items.map((item) => item?.id),
      },
    );

    window.location = res?.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 top-0">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-6">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        className="w-full mt-6"
        onClick={onCheckout}
        disabled={items?.length === 0}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
