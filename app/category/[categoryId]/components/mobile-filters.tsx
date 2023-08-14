"use client";
import { Button } from "@/components/ui/Button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/types/type";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        className="flex items-center gap-x-2 lg:hidden"
        onClick={() => onOpen()}
      >
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex ">
          <Dialog.Panel className="relative bg-white ml-auto w-full h-full max-w-sm flex-col overflow-y-auto py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            <div className="p-4">
              <Filter valueKey="sizeId" data={sizes} name="Sizes" />
              <Filter valueKey="colorId" data={colors} name="Color" />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
