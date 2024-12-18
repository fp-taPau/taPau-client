import React from "react";
import Link from "next/link";
import { Input } from "postcss";

const Card = ({ details }) => {
  const cost = 0;

  return (
    <>
      <div className="flex justify-between flex-row">
        {/* Delivery and payment details */}
        <div className="basis-1/2">
          {details.map((card) => (
            <div
              key={card.title}
              className="p-2 border-[0.25px] border-gray-300 rounded-lg flex flex-col mb-5"
            >
              <div className=" w-100 p-1 rounded-lg flex flex-row justify-between">
                <div className="p-2 rounded-lg flex flex-col items-start text-lg font-semibold">
                  {card.title}
                </div>
                <div className="rounded-lg flex flex-col items-start text-sm font-semibold text-inactiveText">
                  {card.titleButton && (
                    <button className="p-2 hover:bg-gray-200 hover:rounded">{card.titleButton}</button>
                    
                )}
                  {/* {card.titleButton && card.titleButton} */}
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
                        {" "}
                        <path
                          d="M10 8L14 12M14 8L10 12M19 10.2C19 14.1764 15.5 17.4 12 21C8.5 17.4 5 14.1764 5 10.2C5 6.22355 8.13401 3 12 3C15.866 3 19 6.22355 19 10.2Z"
                          stroke="#000000"
                          strokeWidth="1.344"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <div className="flex flex-col ms-1">
                      <span className="font-bold">{card.addressName}</span>
                      {card.address}
                    </div>
                  </div>
                  <hr />
                  <div className="mt-2">
                    Please pick up your food within the stipulated time to avoid
                    penalty fees
                  </div>
                </div>
              )}
              {card.title == "Delivery options" && (
                <div className="flex flex-col w-100 p-2">
                  {card.options.map((option) => (
                    <div
                    key={option.name}
                    className="flex space-x-4 p-2 content-center border-2 border-black rounded-lg mb-2"
                  >
                    <input
                      type="radio"
                      name="deliveryOptions"
                      value={option.name}
                      checked={option.selected}
                    />
                    <label className="font-bold">{option.name}</label>
                    <span className="text-sm content-center">{option.time}</span>
                    <span className="grow"></span>
                    {option.name == "Priority" && (
                      <span className="text-sm self-end content-center rounded-full border-2 border-gray-200 px-2">
                        + S$ {(option.additionalCost).toFixed(2)}
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
                <div className="p-2">
                <div className="flex flex-col w-full p-2">
                  {card.options.map((option) => (
                    <div
                      key={option.name}
                      className="flex space-x-4 p-2 content-center border-2 border-black rounded-lg mb-2"
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
                            <img width="25px" src="/assets/images/pandapay-logo.png" />
                            <span className="text-sm content-center">Balance: S${(option.balance).toFixed(2)}</span>
                        </>
                      )}
                      <span className="text-sm content-center">{option.cardNumber}</span>
                    </div>
                  ))}
                </div>
                <button className="flex flex-row p-2 hover:bg-gray-200 hover:rounded">
                    <svg width="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Ticket_Voucher"> <path id="Vector" d="M14 6H6C5.06812 6 4.60192 6 4.23438 6.15224C3.74432 6.35523 3.35523 6.74481 3.15224 7.23486C3 7.60241 3 8.06835 3 9.00023C4.65685 9.00023 6 10.3429 6 11.9998C6 13.6566 4.65685 15 3 15C3 15.9319 3 16.3978 3.15224 16.7654C3.35523 17.2554 3.74432 17.6447 4.23438 17.8477C4.60192 17.9999 5.06812 18 6 18H14M14 6H18C18.9319 6 19.3978 6 19.7654 6.15224C20.2554 6.35523 20.6447 6.74481 20.8477 7.23486C20.9999 7.6024 20.9999 8.06835 20.9999 9.00023C19.343 9.00023 18 10.3431 18 12C18 13.6569 19.343 15 20.9999 15C20.9999 15.9319 20.9999 16.3978 20.8477 16.7654C20.6447 17.2554 20.2554 17.6447 19.7654 17.8477C19.3978 17.9999 18.9319 18 18 18H14M14 6V18" stroke="#000000" stroke-width="1.344" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                    <span className="font-bold ms-2">Apply a voucher</span>
                </button>
                </div>
              )}
              {card.title == "Tip your rider" && (
                <div className="p-2">
                    <span>{card.description}</span>
                    <div className="flex flex-row justify-between mt-4">
                        {card.options.map((option) => (
                            <span className="flex flex-col ">
                                <button>
                                    <span key={option.name} className="text-sm self-end content-center rounded-full border-2 border-gray-200 px-2 py-1 hover:bg-gray-200">
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
        <button className="w-100 bg-partyPink p-2 text-white font-bold rounded-lg hover:bg-pink-600">Place order</button>
        </div>
        {/* Order details */}
        <div className="basis-1/4">hello</div>
      </div>
    </>
  );
};

export default Card;
