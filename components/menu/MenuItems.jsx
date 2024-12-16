import React from "react";
import restaurants from "../../data/restaurants";

const defaultRestaurant = restaurants[0];
const MenuItems = ({ restaurant = defaultRestaurant }) => {
  return (
    <div className="min-h-screen bg-gray-50">
     <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Available Deals</h2>
      <div className="space-y-4">
        {restaurant.deals && restaurant.deals.length > 0 ? (
          restaurant.deals.map((deal, index) => (
            <div
              key={index}
              className="flex items-center bg-white p-4 rounded-lg shadow-md"
            >
              {/* Icon or Image */}
              <img
                src={deal.iconUrl}
                alt="deal icon"
                className="w-12 h-12 object-cover rounded-full mr-4"
              />
              {/* Deal Details */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{deal.title}</h3>
                <p className="text-gray-600">{deal.description}</p>
                <p className="mt-2 text-sm text-gray-500">{deal.expiry}</p>
              </div>
              {/* Deal Badge or Button */}
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Apply
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No available deals at the moment.</p>
        )}
      </div>
    </section>


      {/* Menu Section */}
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurant.item.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col"
            >
              <div className="flex items-center space-x-4">
               <div className="flex flex-col text-left">
              <h3 className="text-lg font-semibold text-left mb-2">{item.name}</h3>
              <p className="text-gray-600 font-bold text-left">from ${item.price}</p>
              <p className="text-gray-600">{item.description}</p>
              </div>
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
              </div>
              <div className="flex justify-end">
              <button className="bg-white border-2 border-gray-400 text-gray-600 text-3xl w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 focus:outline-none transform -translate-y-1">
              <span className="transform -translate-y-px">+</span>
              </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
  // return (
  //   <div className="items-center h-full w-full">
  //     {restaurant.item.map((item, index) => (
  //       <div
  //         key={index}
  //         className="text-center bg-gray-100 p-4 rounded-lg shadow-md"
  //       >
  //         <p className="mt-2 font-semibold">{item.name}</p>
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default MenuItems;
