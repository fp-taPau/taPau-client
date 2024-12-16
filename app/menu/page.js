"use client";

import restaurants from "../../data/restaurants.json";
import Header from "../../components/Header";
import MenuItems from "../../components/menu/MenuItems";
const defaultRestaurant = restaurants[0];

const Menu = ({ restaurant = defaultRestaurant }) => {
  return (
    <>
      <Header logoUrl="/assets/images/header-logo.png" />
      <header className="bg-white shadow-md mt-3 py-4">
        <div className="mx-9 space-y-2">
          <p className="text-sm text-inactiveText font-semibold">
            Singapore {">"} Restaurant List {">"} {restaurant.name}
          </p>
          <div className="flex flex-row py-4 space-x-8">
            <img
              src={restaurant.imageUrl}
              alt="restaurant-image"
              className="max-h-30 rounded-lg"
            />
            <div className="flex flex-col items-start space-y-3">
              <p className="text-sm text-inactiveText">
                {restaurant.foodTypes.map((foodType, index) => {
                  return (
                    <span key={index}>
                      {foodType}
                      {index !== restaurant.foodTypes.length - 1 && (
                        <span className="mx-3 relative top-[-2px]">.</span>
                      )}
                    </span>
                  );
                })}
              </p>
              <h1 className="text-2xl font-semibold">{restaurant.name}</h1>
              <p className="text-sm text-inactiveText font-semibold flex items-center">
                S$ {parseFloat(restaurant.deliveryFee).toFixed(2)} delivery
                <span className="mx-1 relative top-[-2px]">.</span>
                Min. order S$ {restaurant.minimumOrder}
              </p>
            </div>
          </div>
        </div>
      </header>
      <MenuItems restaurant={restaurant} />
    </>
  );
};

export default Menu;
