import React from "react";
import Link from "next/link";

const Cart = () => {
  const cost = 0;
  return (
    <div className="relative  p-5 h-full border-[0.25px] border-gray-300 rounded-lg flex flex-col items-center">
      <div className="relative bg-gray-100 w-full p-1 shadow-md rounded-lg">
        <div className="bg-white p-5 border-[0.25px] border-gray-300 rounded-lg flex flex-col items-center text-sm font-semibold text-inactiveText">
          TaPau-Together!
        </div>
      </div>
      <div className="space-y-2 items-center flex-1 flex flex-col mt-40 w-45">
        <img
          src={"/assets/images/cart/pau_cart_empty.svg"}
          alt="empty-cart"
          className="h-25 w-25 mb-4"
        />
        <h4 className="font-extrabold">Hungry?</h4>
        <p className=" text-sm text-center text-secondaryText">
          You haven't added anything to your cart!
        </p>
      </div>
      <div className="flex flex-col w-full mt-5">
        <div className="flex justify-between">
          <div className="relative">
            <p className="font-bold text-secondaryText text-[15px]">
              Total{" "}
              <span className="font-thin text-inactiveText text-[12px]">
                (incl. fees and tax)
              </span>
            </p>
          </div>
          <p className="font-bold text-secondaryText text-[15px]">S${cost}</p>
        </div>
      </div>
      <p className="font-bold text-[13px] text-secondaryText mr-auto underline">
        See summary
      </p>
      <Link
        href="/checkout"
        className="flex justify-center font-bold text-[14px] text-[#fefefe] bg-[#c4c4c4] rounded-lg p-2 py-3 w-full mt-3 hover:cursor-pointer"
      >
        Review Payment and address
      </Link>
    </div>
  );
};

export default Cart;
