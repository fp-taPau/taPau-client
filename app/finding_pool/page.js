"use client";

import Header from "../../components/Header";

export default function FindingPool() {
  return (
    <>
    <Header logoUrl="/assets/images/header-logo.png" />
    <main className="p-5 w-11/12 items-center mx-auto my-8 flex flex-col justify-center">
  {/* //       <img src="/assets/images/pau_cook.png" className="w-100 h-auto ml-auto"/> */}
    </main>

    <div className="flex flex-col items-center bg-gray-100">
      {/* Map Section */}
      <div className="w-full max-w-4xl h-60 relative">
        <img
          src="/assets/images/orderMap.png" // Correct path for image in public directory
          alt="Order tracking map"
          className="rounded-lg w-full h-full object-cover"
        />

        {/* Straddle Image */}
   

        <img
            src="/assets/images/pau_cook.png" // Correct path for image you want to straddle
            alt="Straddle Image"
            className="bg-gray-300 absolute top-7/8 left-[85%]  transform -translate-x-1/2 -translate-y-1/2 w-30 h-30 rounded-lg" 
          />
    
      </div>

      {/* arrival time */}


      <div className="mt-8 border-t pt-4 w-11/12 max-w-4xl bg-white p-5 rounded-lg shadow-lg">
        <div className="flex items-center mt-2">
        <div className="mb-4">
          <h3 className="text-lg font-medium">Arrival Time Updated</h3>
          <p className="text-gray-600">10 — 25 mins</p>
        </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Preparing Your Order</h3>
          <p className="text-gray-600">Meanwhile, the rider is heading to the shop</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Delivery Info</h3>
          <p className="text-gray-600">
            Qufiandy will deliver your order by car
          </p>
        </div>
      </div>

      {/* Sponsored Section (Now at the top) */}
      <div className="mt-8 border-t pt-4 w-11/12 max-w-4xl bg-white p-5 rounded-lg shadow-lg">
        <h4 className="text-sm font-bold text-gray-700">Sponsored</h4>
        <div className="flex items-center mt-2">
          <img
            src="/assets/images/pau_cook.png"
            alt="pau cooking"
            className="w-20 h-20 mr-3"
          />
          <p className="text-sm text-gray-600">
            Don’t hold back next time! Treat yourself to better with Pau Cooks!
          </p>
        </div>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          More info
        </button>
      </div>

      {/* Order Details Section (Moved below the sponsored section) */}
      <div className="w-11/12 max-w-4xl bg-white mt-6 p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
        <p className="text-gray-600">Order Number: #e8jn-2449-wg2s</p>
        <div className="mb-4">
          <button className="mt-2 px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700">
            Chat with rider
          </button>
        </div>
      </div>
    </div>
    
    </>
    
  );
  // return (
  //   <>
  //     <Header logoUrl="/assets/images/header-logo.png" />
  //     <main className="p-5 w-11/12 items-center mx-auto my-8 flex flex-col justify-center">
  //       <img src="/assets/images/pau_cook.png" className="w-100 h-auto ml-auto"/>
  //     </main>
  //   </>
  // );
}
