"use client";

import Header from "../../components/Header";
import MenuItems from "../../components/menu/MenuItems";
import Cart from "../../components/menu/Cart";
import useRestaurantStore from "../../stores/restaurantStore";
import BackButton from "@/components/ui/BackButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "../../components/ui/Modal";

const Menu = () => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const restaurant = useRestaurantStore((state) => state.restaurant);

  const handleCancellation = () => {
    router.push("/");
    // TODO: Add API Call to count cancellation for user
    setIsModalOpen(false);
  };

  // Failsafe for MVP, should not happen
  if (!restaurant) {
    alert("Error 404");
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
          <Cart />
        </div>
      </section>
      <Modal
        title="Are ready to order and be matched with a pool?"
        imageSrc="/assets/images/pau_what.png"
        imageAltDesc="Paupau looking like he is waiting for an answer"
        description="This is a reusable modal that can show dynamic content such as images, title, and options."
        optionOne={{
          label: "Yes, add me to the pool!",
          onClick: handleCancellation,
        }}
        optionTwo={{
          label: "No, I just want to browse first",
          onClick: () => setIsModalOpen(false),
        }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Menu;
