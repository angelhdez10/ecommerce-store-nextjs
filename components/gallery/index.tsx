"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";

import { Image as ImageType } from "@/types/type";
import GalleryTab from "@/components/gallery/gallery-tab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {!!images.length &&
            images?.map((image) => (
              <GalleryTab key={image?.id} image={image} />
            ))}
        </Tab.List>
      </div>
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.Panels className="aspect-square w-full">
          {!!images.length &&
            images?.map((image) => (
              <Tab.Panel key={image.id}>
                <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                  <Image
                    fill
                    src={image?.url}
                    alt="Image"
                    className="object-cover object-center"
                  />
                </div>
              </Tab.Panel>
            ))}
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default Gallery;
