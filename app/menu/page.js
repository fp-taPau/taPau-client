"use client";
import React from "react";
import Header from "../../components/Header";
import MenuItems from "../../components/menu/MenuItems";
import Cart from "../../components/menu/Cart";
import useRestaurantStore from "../../stores/restaurantStore";
import BackButton from "@/components/ui/BackButton";
import { useRouter } from "next/navigation";
import Cancellation from "../../components/ui/Cancellation";
import useCartStore from "@/stores/cartStore";
import { useState, useEffect } from "react";
import { getRestaurantByID } from "@/api/tapau/tapau";
import { useParams } from "react-router-dom";
import { incrementCustomerCancellation } from "@/api/tapau/tapau";
import useCancelledStore from "@/stores/cancelledStore";

const Menu = () => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const restaurant = useRestaurantStore((state) => state.restaurant);
  const resetCart = useCartStore((state) => state.resetCart);

  const handleCancellation = () => {
    // TODO: Add API Call to count cancellation for user
    resetCart();
    router.push("/");

    incrementCustomerCancellation("1", "1").then((data) => {
      console.log("User cancel matching in pool")
      // console.log(data)
      // save the cancelled data returned into the store
      const setCancelledRestaurants = useCancelledStore.getState().setCancelledRestaurants;
      // Save the extracted data into the Zustand store
      setCancelledRestaurants(data.cancellation);

    })

    setIsModalOpen(false);
  };

  // Failsafe for MVP, should not happen
  if (!restaurant) {
    alert("Unexpected Error: 404 Not Found");
  }

  return (
    <>
      <Header logoUrl="/assets/images/header-logo.png" />
      <header className="bg-zinc-50 shadow-lg mt-1 py-4">
        <div className="mx-20 space-y-2">
          <div className="-mx-8 flex flex-row items-center space-x-3 -mb-3">
            <BackButton onClick={() => setIsModalOpen(true)} />
            <p className="text-sm text-inactiveText font-semibold">
              Singapore {">"} Restaurant List {">"} {restaurant.name}
            </p>
          </div>
          <div className="flex flex-row py-4 space-x-8">
            <img
              src={restaurant.imageUrl}
              alt="restaurant-image"
              className="max-h-35 rounded-lg"
            />
            <div className="flex flex-col items-start space-y-3">
              <p className="text-sm text-inactiveText">
                {restaurant.foodTypes.map((foodType, index) => {
                  return (
                    <span key={index}>
                      {foodType}
                      {index !== restaurant.foodTypes.length - 1 && (
                        <span className="mx-3 relative top-[-2px] font-extrabold">
                          .
                        </span>
                      )}
                    </span>
                  );
                })}
              </p>
              <h1 className="text-4xl font-extrabold h-8">{restaurant.name}</h1>
              <p className="text-sm text-inactiveText font-bold flex items-center">
                <img
                  className="text-black w-4 h-4 mr-1"
                  src="https://www.svgrepo.com/show/490678/cycling.svg"
                />
                S$ {parseFloat(restaurant.deliveryFee).toFixed(2)} delivery
                <span className="mx-2 text-xl relative top-[-3.5px]">.</span>
                <img
                  className="text-black w-5 h-5 mr-1"
                  src="https://www.svgrepo.com/show/474656/basket.svg"
                />
                S$ Min. order S$ {restaurant.minimumOrder}
              </p>
              <p className="text-sm text-inactiveText font-bold flex items-center -ml-1">
                <img
                  className="text-gray-400 text-sm mb-[16.5px] w-5 h-5"
                  src="https://png.pngtree.com/png-clipart/20230101/original/pngtree-golden-star-icon-vector-clipart-png-image_8843722.png"
                />
                <span className="text-[13px] mb-4 ml-1 font-bold">
                  {restaurant.rating}/5
                  <span className="font-light mr-2">
                    ({restaurant.numberRated}+)
                  </span>
                  See reviews
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className="white px-18 grid grid-cols-4 gap-2">
        <div className="col-span-3">
          <MenuItems restaurant={restaurant} />
        </div>
        <div className="col-span-1 mt-8 sticky top-0">
          <Cart restaurant={restaurant} />
        </div>
      </section>
      <Cancellation
        title="We are still finding you a match, are you sure you want to leave?"
        imageSrc="/assets/images/gasping_pau.png"
        imageAltDesc="Paupau looking like he is waiting for an answer"
        description="Heads up! If you leave this matching session, your cart will be cleared and the restaurant might not remain available as an option."
        optionOne={{
          label: "Yes, leave now",
          onClick: handleCancellation,
        }}
        optionTwo={{
          label: "No, stay in the session",
          onClick: () => setIsModalOpen(false),
        }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Menu;
