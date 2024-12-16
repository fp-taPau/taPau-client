"use client";

import restaurants from "./restaurants.json";

const StoresListing = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Restaurants Grid Section */}
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Available Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105"
            >
              <img
                src={restaurant.imageUrl}
                alt={`Restaurant image of ${restaurant.name}`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center space-x-2">
              <h3 className="text-md font-semibold text-center mb-4">{restaurant.name}</h3>
              <img className="text-gray-400 text-sm mb-4 w-6 h-6" src="https://png.pngtree.com/png-clipart/20230101/original/pngtree-golden-star-icon-vector-clipart-png-image_8843722.png"/>
              <p className="text-gray-400 text-sm mb-4">{restaurant.rating}</p>
              <p className="text-gray-400 text-sm mb-4">({restaurant.numberRated})</p>
              </div>
              <div className="flex items-center space-x-2">
              <p className="text-gray-400 text-sm mb-4">{restaurant.priceRating}</p>
              <p className="text-gray-400 text-sm mb-4">{restaurant.cuisineName}</p>
              <img className="text-gray-400 text-sm mb-4 w-6 h-6" src="https://www.svgrepo.com/show/424656/clock-pending-time.svg"/>
              <p className="text-gray-400 text-sm mb-4">{restaurant.deliveryTime}</p>
              <img className="text-gray-400 text-sm mb-4 w-6 h-6" src="https://www.svgrepo.com/show/426399/scooter.svg"/>
              <p className="text-gray-400 text-sm mb-4">{restaurant.deliveryFee}</p>
              </div>
              {/* <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                View Details
              </button> */}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
    // Edit from here
  //   <div className="items-center h-full w-full">
  //     <div>
  //       {restaurants.map((item, index) => (
  //         <div
  //           key={index}
  //           className="text-center border-solid border-width-2 border-gray-200 p-4 rounded-lg shadow-md"
  //         >
  //           <img
  //             src={item.imageUrl}
  //             alt={`image-of-paupau-${item.cuisineName}`}
  //             className="mx-auto max-h-30 rounded-lg"
  //           />
  //           <p className="mt-2 font-semibold">{item.name}</p>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default StoresListing;
