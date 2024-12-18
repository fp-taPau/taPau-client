"use client";

// import restaurants from "../../data/restaurants.json";
import useRestaurantStore from "../../stores/restaurantStore";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Modal from "../../components/ui/Modal";
import useCancelledStore from "@/stores/cancelledStore";
import { getAvailableRestaurants } from "@/api/tapau/tapau";

const StoresListing = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setRestaurant = useRestaurantStore((state) => state.setRestaurant);

  const cancelledRestaurants = useCancelledStore(
    (state) => state.cancelledRestaurants
  );
  console.log(cancelledRestaurants);

  const [restaurants, setRestaurants] = useState(null);
  useEffect(() => {
    // Fetch the order data when the component mounts
    getAvailableRestaurants().then((data) => {
      console.log(data);
      setRestaurants(Object.values(data));
    });
  }, []);

  const handleOpenModal = (restaurant) => {
    setRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const handleConfirmPool = () => {
    router.push("/menu");
    // TODO: Do API Call to add to user pooled map for restaurant
    setIsModalOpen(false);
  };

  const handleViewMenu = () => {
    // TODO: Close Modal, View Menu Clicked! Not implemented yet!
    setIsModalOpen(false);
  };

  return (
    <>
      {restaurants ? (
        <div className="min-h-screen">
          <main className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Available Restaurants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  onClick={() => handleOpenModal(restaurant)}
                >
                  <div className="bg-white border-solid border-[0.25px] border-gray-300 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer">
                    <img
                      src={restaurant.imageUrl}
                      alt={`Restaurant image of ${restaurant.name}`}
                      className="w-full h-48 object-cover rounded-t-lg rounded-b-none mb-4"
                    />
                    <div className="w-full px-3">
                      <div className="flex justify-between w-full">
                        <h3 className="text-md font-semibold text-left mb-4">
                          {restaurant.name}
                        </h3>
                        <div className="flex items-center space-x-1">
                          <img
                            className="text-gray-400 text-sm mb-4 w-6 h-6"
                            src="https://png.pngtree.com/png-clipart/20230101/original/pngtree-golden-star-icon-vector-clipart-png-image_8843722.png"
                          />
                          <p className="text-[13px] mb-3 ml-1 font-bold">
                            {restaurant.rating}/5{" "}
                            <span className="font-light">
                              ({restaurant.numberRated}+)
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between w-full gap-2 -my-4">
                        <div className="flex flex-row">
                          <p className="text-gray-400 text-sm mb-4">
                            {[
                              restaurant.priceRating,
                              ...restaurant.foodTypes,
                            ].map((foodType, index) => {
                              return (
                                <span key={index}>
                                  {foodType}
                                  {index !== restaurant.foodTypes.length && (
                                    <span className="font-bold mx-1 relative top-[-2px]">
                                      .
                                    </span>
                                  )}
                                </span>
                              );
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex w-full space-x-2 font-bold text-[10px] mt-1 text-inactiveText">
                        <div className="flex flex-row items-center space-x-1">
                          <img
                            className="text-sm -ml-1 mb-4 w-6 h-6"
                            src="https://www.svgrepo.com/show/424656/clock-pending-time.svg"
                          />
                          <p className=" text-sm mb-4">
                            {restaurant.deliveryTime}
                          </p>
                        </div>
                        <span className="font-bold mx-1 relative top-[-5px] text-lg">
                          .
                        </span>
                        <div className="flex flex-row items-center space-x-1">
                          <img
                            className="opacity-60 w-4 h-4 mr-1 mb-4"
                            src="https://www.svgrepo.com/show/490678/cycling.svg"
                          />
                          <p className=" text-sm -ml-1 mb-4">
                            S$ {parseFloat(restaurant.deliveryFee).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
          <Modal
            title="Are you ready to order and be matched with a pool?"
            imageSrc="/assets/images/pau_what.png"
            imageAltDesc="Paupau looking like he is waiting for an answer"
            description="Savour the savings! By choosing to match, you'll be connected with other available customers to pool your orders from nearby restaurants together for a discounted delivery fee. "
            optionOne={{
              label: "No, I need to browse first",
              onClick: handleViewMenu,
            }}
            optionTwo={{
              label: "Yes, count me in!",
              onClick: handleConfirmPool,
            }}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      ) : (
        <>Loading..</>
      )}
    </>
  );
};

export default StoresListing;
