"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useBreakpoint } from "@/app/utils/useBreakPoint";
import { imgType } from "@/app/utils/interface";

const product: imgType = {
  src: "/product.jpg",
  base64:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPYf3zr/SfX33158fvPRwYGPobYZN+KmoyiogQGRiFWKSVJOWVpBi4GAJvADxYpyn6YAAAAAElFTkSuQmCC",
};

export default function Products() {
  const { isMd } = useBreakpoint("md");
  const [products, setProducts] = useState<number>(() => {
    return isMd ? 8 : 2;
  });

  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleClick = () => {
    setProducts(8);
  };

  return (
    <div className="mt-24 md:mt-0">
      <h2 className="mb-24 md:mb-12 text-4xl font-sans text-center mt-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h2>
      <div className="gap-8 flex justify-center items-center content-center flex-wrap">
        {Array.from(Array(9).keys()).map((i) => {
          if (i > products) return null;
          return (
            <div
              key={i}
              className="relative max-w-sm rounded overflow-hidden shadow-lg"
            >
              <Image
                src={product.src}
                alt="Picture of the author"
                sizes="100vw"
                style={{
                  width: "auto",
                  height: "20%",
                }}
                width={500}
                height={300}
                placeholder="blur"
                blurDataURL={product.base64}
              />
              <ShoppingCartIcon />
            </div>
          );
        })}
      </div>
      {products !== 8 ? (
        <div className="md:hidden flex justify-center">
          <button
            onClick={handleClick}
            className="mt-12  bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          >
            Show more
          </button>
        </div>
      ) : null}
    </div>
  );
}

function ShoppingCartIcon() {
  return (
    <button className="rounded-full p-3 hover:bg-gray-900 bg-black h-12 w-12 absolute z-2 bottom-5 left-[calc(50%-2.5rem/2)]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        style={{
          filter:
            "invert(100%) sepia(0%) saturate(1%) hue-rotate(98deg) brightness(107%) contrast(102%)",
        }}
      >
        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
      </svg>
    </button>
  );
}
