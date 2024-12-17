import React from "react";
import useCartStore from "@/stores/cartStore";

const MenuItems = ({ restaurant }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (item) => {
    addToCart(item); // Add the item to the cart (or increase quantity if it already exists)
  };

  return (
    <div className="min-h-screen mt-1">
      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Available Deals</h2>
        <div className="space-y-4">
          {restaurant.deals && restaurant.deals.length > 0 ? (
            restaurant.deals.map((deal, index) => (
              <div
                key={index}
                className="flex items-center bg-zinc-50 p-4 rounded-lg shadow-md"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {restaurant.items.map((item, index) => (
            <div
              className="relative bg-zinc-50 p-5 border-[0.25px] border-gray-300 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer hover:bg-secondaryPink"
              role="button"
              tabIndex="0"
              onClick={() => {
                handleAddToCart(item)
              }}
            >
              <div className="flex mb-10 justify-between w-full top-0">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-lg font-semibold text-left">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">from ${item.price}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-30 h-30 object-cover rounded-md mb-4"
                />
              </div>
              {/* Bottom-Right `+` Button */}
              <div className="absolute bottom-4 shadow-md right-4 flex items-center justify-center bg-white border-[0.25px] border-gray-400 text-gray-500 text-3xl w-8 h-8 rounded-full hover:bg-gray-100 focus:outline-none">
                <span className="text-center text-[26px] font-light">+</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MenuItems;
