"use client";

import restaurants from "../../data/restaurants.json";
import useRestaurantStore from "../../stores/restaurantStore";
import Link from "next/link";

const StoresListing = () => {
  const setRestaurant = useRestaurantStore((state) => state.setRestaurant);

  return (
    <div className="min-h-screen">
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Available Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant, index) => (
            <Link
              key={index}
              href="/menu"
              onClick={() => setRestaurant(restaurant)} // Set the restaurant in Zustand store
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
                      <p className="text-gray-400 text-sm mb-4">
                        {restaurant.rating}
                      </p>
                      <p className="text-gray-400 text-sm mb-4">
                        ({restaurant.numberRated})
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between w-full gap-2 -my-4">
                    <div className="flex flex-row">
                      <p className="text-gray-400 text-sm mb-4">
                        {[restaurant.priceRating, ...restaurant.foodTypes].map(
                          (foodType, index) => {
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
                          }
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full space-x-2 font-bold text-xs mt-3">
                    <div className="flex flex-row items-center space-x-1">
                      <img
                        className="text-gray-400 text-sm -ml-1 mb-4 w-6 h-6"
                        src="https://www.svgrepo.com/show/424656/clock-pending-time.svg"
                      />
                      <p className="text-gray-400 text-sm mb-4">
                        {restaurant.deliveryTime}
                      </p>
                    </div>
                    <span className="font-bold mx-1 relative top-[-2px]">
                      .
                    </span>
                    <div className="flex flex-row items-center space-x-1">
                      <img
                        className="text-gray-400 text-sm mb-4 w-6 h-6"
                        src="https://www.svgrepo.com/show/426399/scooter.svg"
                      />
                      <p className="text-gray-400 text-sm -ml-1 mb-4">
                        {restaurant.deliveryFee}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StoresListing;
