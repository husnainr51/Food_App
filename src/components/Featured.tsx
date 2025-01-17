import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER  */}
      <div className="w-max flex">
        {/* SINGLE ITEM  */}
        {featuredProducts.map((item) => (
          <>
            {/* IMAGE CONTAINER  */}
            <div
              key={item.id}
              className="w-screen h-[80vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] lg:w-[33vw] xl:h-[90vh]"
            >
              {item.img && (
                <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                  <Image
                    src={item.img}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              {/* TEXT CONTAINER  */}
              <div className="flex-1 flex flex-col gap-4 items-center text-center justify-center">
                <h1 className="text-xl font-bold uppercase">{item.title}</h1>
                <p>{item.desc}</p>
                <span className="text-xl font-bold">${item.price}</span>
                <button className="bg-red-500 text-white p-2 rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Featured;
