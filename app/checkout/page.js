"use client";

import Header from "../../components/Header";
import details from "../../data/checkoutDetails.json";
import orders from "../../data/order.json";
import { useRouter } from "next/navigation";
import Card from "@/components/card/Card";
import { getOrderByID } from "@/api/tapau/tapau";
import { useState, useEffect } from "react";

export default function CheckoutPage() {
  const router = useRouter();

  // var order = orders[0];

  var details = [
    {
      title: "Delivery address",
      titleButton: "Change",
      addressName: "Meeting location",
      address: "3 River Valley Road Singapore 179024",
      noteToDriver: "",
      contactlessDelivery: false,
    },
    {
      title: "Delivery options",
      options: [
        {
          name: "Standard",
          time: "45 - 65 mins",
          selected: true,
        },
        {
          name: "Priority",
          time: "40 - 55 mins",
          additionalCost: 2.5,
          selected: false,
        },
        {
          name: "Scheduled",
          time: "Select a date and time",
          selected: false,
        },
      ],
    },
    {
      title: "Personal details",
      titleButton: "Edit",
      name: "John Smith",
      email: "john.smith@gmail.com",
      mobile: "+65 91234567",
    },
    {
      title: "Payment",
      titleButton: "Show all",
      options: [
        {
          selected: true,
          type: "pandapay",
          balance: 50.0,
          cardNumber: "**** 1234",
        },
        {
          type: "Visa",
          cardNumber: "**** 1234",
        },
        {
          type: "Visa",
          cardNumber: "**** 4321",
        },
        {
          type: "Paylah!",
          cardNumber: "**** 0987",
        },
      ],
    },
    {
      title: "Tip your rider",
      description: "100% of your tips goes to the riders.",
      options: [
        {
          name: "Not now",
          amount: 0,
        },
        {
          name: "S$1.00",
          amount: 1,
        },
        {
          name: "S$2.00",
          amount: 2,
        },
        {
          name: "S$3.00",
          amount: 3,
        },
        {
          name: "S$4.00",
          amount: 4,
        },
      ],
    },
  ];
  const [order, setOrder] = useState(null);
  useEffect(() => {
    // Fetch the order data when the component mounts
    getOrderByID("1", "a1b2-c3d4-e5f6").then((data) => {
      console.log(data)
      setOrder(data)
    })
  }, []);

  return (
    <>
      <Header logoUrl="/assets/images/header-logo.png" />
      <main className="p-5 w-11/12 items-center mx-auto my-8 flex flex-col justify-center">
        {/* Delivery Address card */}
        <div className="space-x-4 grid grid-cols-5 w-11/12 gap-8">
          {/* Delivery and payment details */}
          <div className="col-span-3">
            {details.map((card, index) => (
              <div
                key={card.title}
                className="p-2 border-[0.25px] border-gray-300 rounded-lg flex flex-col mb-5"
              >
                <div className=" w-100 p-1 rounded-lg flex flex-row justify-between w-full">
                  <div className="p-2 rounded-lg flex flex-col items-start text-lg font-semibold">
                    {card.title}
                  </div>
                  <div className="rounded-lg flex flex-col text-sm font-semibold text-inactiveText">
                    {card.titleButton && (
                      <button className="p-2 hover:bg-gray-200 hover:rounded">
                        {card.titleButton}
                      </button>
                    )}
                  </div>
                </div>
                {card.title == "Delivery address" && (
                  <div className="m-2">
                    <div className="flex flex-row mb-2">
                      <svg
                        height="22px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M10 8L14 12M14 8L10 12M19 10.2C19 14.1764 15.5 17.4 12 21C8.5 17.4 5 14.1764 5 10.2C5 6.22355 8.13401 3 12 3C15.866 3 19 6.22355 19 10.2Z"
                            stroke="#000000"
                            strokeWidth="1.344"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                      <div className="flex flex-col ms-1">
                        <span className="font-bold">{card.addressName}</span>
                        {card.address}
                      </div>
                    </div>
                    <hr />
                    <div className="mt-2">
                      Please pick up your food within the stipulated time to
                      avoid penalty fees
                    </div>
                  </div>
                )}
                {card.title == "Delivery options" && (
                  <div className="flex flex-col w-full p-2">
                    {card.options.map((option) => (
                      <div
                        key={option.name}
                        className="flex space-x-4 p-3 content-center border-1 border-black rounded-lg mb-2"
                      >
                        <input
                          type="radio"
                          name="deliveryOptions"
                          value={option.name}
                          checked={option.selected}
                        />
                        <label className="font-bold">{option.name}</label>
                        <span className="text-sm content-center">
                          {option.time}
                        </span>
                        <span className="grow"></span>
                        {option.name == "Priority" && (
                          <span className="text-sm self-end content-center rounded-full border-2 border-gray-200 px-2">
                            + S$ {option.additionalCost.toFixed(2)}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {card.title == "Personal details" && (
                  <div className="flex flex-col w-full p-2">
                    <div className="flex flex-col ms-1">
                      <span className="font-bold">{card.name}</span>
                      <span>{card.email}</span>
                      <span>{card.mobile}</span>
                    </div>
                    {/* <div className="flex space-x-4 p-2 content-center border-2 border-black rounded-lg mb-2">
                    <label className="font-bold">{option.name}</label>
                    <span className="text-sm">{option.time}</span>
                </div> */}
                  </div>
                )}

                {card.title == "Payment" && (
                  <div className="p-2" key={card.title}>
                    <div className="flex flex-col w-full p-2">
                      {card.options.map((option, idx) => (
                        <div
                          key={option.name}
                          className="flex space-x-4 p-3 content-center border-1 border-black rounded-lg mb-2"
                        >
                          <input
                            type="radio"
                            name="deliveryOptions"
                            value={option.name}
                            checked={option.selected}
                          />
                          <label className="font-bold">{option.type}</label>
                          {option.type == "pandapay" && (
                            <>
                              <img
                                width="25px"
                                src="/assets/images/pandapay-logo.png"
                              />
                              <span className="text-sm">
                                Balance: S${option.balance.toFixed(2)}
                              </span>
                            </>
                          )}
                          <span className="text-sm content-center">
                            {option.cardNumber}
                          </span>
                        </div>
                      ))}
                    </div>
                    <button className="flex flex-row p-2 hover:bg-gray-200 hover:rounded">
                      <svg
                        width="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g id="Interface / Ticket_Voucher">
                            <path
                              id="Vector"
                              d="M14 6H6C5.06812 6 4.60192 6 4.23438 6.15224C3.74432 6.35523 3.35523 6.74481 3.15224 7.23486C3 7.60241 3 8.06835 3 9.00023C4.65685 9.00023 6 10.3429 6 11.9998C6 13.6566 4.65685 15 3 15C3 15.9319 3 16.3978 3.15224 16.7654C3.35523 17.2554 3.74432 17.6447 4.23438 17.8477C4.60192 17.9999 5.06812 18 6 18H14M14 6H18C18.9319 6 19.3978 6 19.7654 6.15224C20.2554 6.35523 20.6447 6.74481 20.8477 7.23486C20.9999 7.6024 20.9999 8.06835 20.9999 9.00023C19.343 9.00023 18 10.3431 18 12C18 13.6569 19.343 15 20.9999 15C20.9999 15.9319 20.9999 16.3978 20.8477 16.7654C20.6447 17.2554 20.2554 17.6447 19.7654 17.8477C19.3978 17.9999 18.9319 18 18 18H14M14 6V18"
                              stroke="#000000"
                              stroke-width="1.344"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <span className="font-bold ms-2">Apply a voucher</span>
                    </button>
                  </div>
                )}
                {card.title == "Tip your rider" && (
                  <div className="p-2">
                    <span>{card.description}</span>
                    <div className="flex flex-row space-x-5 mt-4">
                      {card.options.map((option) => (
                        <span className="flex flex-col">
                          <button>
                            <span
                              key={option.name}
                              className="text-sm self-end content-center rounded-full border-2 border-gray-200 px-2 py-1 hover:bg-gray-200"
                            >
                              {option.name}
                            </span>
                          </button>
                          {option.name == "S$2.00" && (
                            <span className="text-sm">Most common</span>
                          )}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4">
                      <input type="checkbox"></input>
                      <label className="ms-2"> Save for your next order</label>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Order details */}
          <div className="col-span-2">
            <div className="flex flex-col sticky top-4">
              <div className="p-4 border-[0.25px] border-gray-300 rounded-lg flex flex-col mb-5">
                {/* Header Section */}
                <div className="p-2 text-lg font-bold">
                  Your order from
                  <div className="text-gray-600 font-normal">
                    {order.restaurant.name} ({order.restaurant.area})
                  </div>
                </div>

                {/* Items List */}
                <div className="mt-2">
                  {order.items.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-start text-sm mb-1"
                    >
                      <div>
                        <span>
                          {index + 1} x {item.name}
                        </span>
                      </div>
                      <div className="font-semibold">
                        S$ {item.price.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtotal, Delivery Fee, and Platform Fee */}
                <div className="mt-3 border-t-[1px] border-gray-200 pt-2 text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Subtotal</span>
                    <span>
                      S$
                      {order.items
                        .reduce((total, item) => total + item.price, 0)
                        .toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Standard delivery</span>
                    <span>S$ {order.restaurant.deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Platform fee</span>
                    <span>S$ 0.40</span>
                  </div>
                </div>

                {/* Total Section */}
                <div className="flex justify-between mt-2 text-lg font-bold">
                  <span>Total</span>
                  <span className="text-xl">
                    S$ {(order.orderTotal + 0.4).toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                className="w-full bg-partyPink p-2 text-white font-bold rounded-lg hover:bg-selectedPink"
                onClick={() => router.push("/match/pending")}
              >
                Place order
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </main>
    </>
  );
}
