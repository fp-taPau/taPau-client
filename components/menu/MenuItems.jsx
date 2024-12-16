import React from "react";
import restaurants from "../../data/restaurants";

const defaultRestaurant = restaurants[0];
const MenuItems = ({ restaurant = defaultRestaurant }) => {
  return (
    <div className="items-center h-full w-full">
      {restaurant.item.map((item, index) => (
        <div
          key={index}
          className="text-center bg-gray-100 p-4 rounded-lg shadow-md"
        >
          <p className="mt-2 font-semibold">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
