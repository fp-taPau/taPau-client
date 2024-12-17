import React from "react";
import Link from "next/link";
import useCartStore from "@/stores/cartStore";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const cost = 0;
  const calculateTotal = () => {
    return cart.reduce((total, cartItem) => {
      return total + cartItem.item.price * cartItem.quantity;
    }, 0).toFixed(2);
  };
  return (
    <div className="relative  p-5 h-full border-[0.25px] border-gray-300 rounded-lg flex flex-col items-center">
      <div className="relative bg-gray-100 w-full p-1 shadow-md rounded-lg">
        <div className="bg-white p-5 border-[0.25px] border-gray-300 rounded-lg flex flex-col items-center text-sm font-semibold text-inactiveText">
          TaPau-Together!
        </div>
      </div>
      {cart.length === 0 ? (
        <>
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
        </>
      ) : (
        <>
        <div>
          <h2 className="text-2xl font-bold my-4 text-center">Your Cart</h2>
          <div className="space-y-4">
            {cart.map((cartItem) => (
              <div
                key={cartItem.cartItemId}
                className="flex items-center p-4 border rounded-lg shadow-sm"
              >
                <img
                  src={cartItem.item.imageUrl}
                  alt={cartItem.item.name}
                  className="w-20 h-20 rounded object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{cartItem.item.name}</h3>
                  <p className="text-sm text-gray-500">{cartItem.item.description}</p>
                  <p className="text-sm font-medium mt-1">
                    Quantity: {cartItem.quantity}
                  </p>
                </div>
                <div className="text-lg font-bold">
                  ${(cartItem.item.price * cartItem.quantity).toFixed(2)}
                </div>
              </div>
            ))}
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
          <p className="font-bold text-secondaryText text-[15px]">S${calculateTotal()}</p>
        </div>
      </div>
        </div>
      </>
      )}


      <p className="font-bold text-[13px] text-secondaryText mr-auto underline">
        See summary
      </p>
      <Link
        href="/checkout"
        className="flex justify-center font-bold text-[14px] text-[#fefefe] bg-[#c4c4c4] rounded-lg p-2 py-3 w-full mt-3 cursor-pointer"
      >
        Review Payment and address
      </Link>
    </div>
  );
};

export default Cart;
