import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh+12rem)] md:[h-calc(100vh-12rem)] lg:[h+calc(100vh-64rem)] flex flex-col text-red-500 lg:flex-row ">
      {/* Product Container  */}
      <div className="h-1/2 p-4 flex flex-col justify-center lg:h-full lg:w-2/3 lg:px-20">
        <div className="flex items-center justify-between mb-4">
          {/* Single Item  */}
          <Image src={"/temporary/p2.png"} alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.9</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          {/* Single Item  */}
          <Image src={"/temporary/p3.png"} alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.9</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          {/* Single Item  */}
          <Image src={"/temporary/p1.png"} alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.9</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* Payment Container */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 lg:px-20">
        <div className="flex justify-between">
          <span>Subtotal (3 items)</span>
          <span>$81.70</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$8.70</span>
        </div>
        <div className="flex justify-between">
          <span>Delievery Cost</span>
          <span className="text-green-300">Free</span>
        </div>
        <hr />
        <div className="flex justify-between my-2">
          <span>Total (INC VAT)</span>
          <span className="text-black font-bold">$123.70</span>
        </div>
        <hr />
        <button className="bg-red-500 text-white p-2">CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartPage;
