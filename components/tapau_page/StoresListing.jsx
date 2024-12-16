"use client";

import restaurants from "./restaurants.json";

const StoresListing = () => {
  return (
    // Edit from here
    <div className="items-center h-full w-full">
      <div>
        {restaurants.map((item, index) => (
          <div
            key={index}
            className="text-center border-solid border-width-2 border-gray-200 p-4 rounded-lg shadow-md"
          >
            <img
              src={item.imageUrl}
              alt={`image-of-paupau-${item.cuisineName}`}
              className="mx-auto max-h-30 rounded-lg"
            />
            <p className="mt-2 font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoresListing;
