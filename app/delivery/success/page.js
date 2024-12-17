"use client";

import React, { useState, useEffect } from "react";
import MapWithRoute from "../../../components/delivery/MapWithRoute";
import Header from "../../../components/Header";
import LoadingBar from "../../../components/ui/LoadingBar";

const DeliveryStatusPage = () => {
  const [progress, setProgress] = useState(0);

  // Set default values for starting and destination
  const defaultStartingPoint = 510142; // Default postal code or name
  const defaultDestination = 730789; // Change as needed

  const [startingPoint, setStartingPoint] = useState(defaultStartingPoint);
  const [destination, setDestination] = useState(defaultDestination);

  // Simulate progress (increasing every 500ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100)); // Progress increases by 10% every 750ms
    }, 750);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header logoUrl="/assets/images/header-logo.png" />
      <div className="relative">
        {/* Map */}
        <MapWithRoute startingPoint={startingPoint} destination={destination} />

        {/* Overlay Div */}
        <div className="absolute bottom-0 left-0 z-10 w-full bg-white rounded-t-3xl border-t border-gray-300 text-black flex py-5 flex-col items-center space-y-6">
          <div className="bg-inactiveText opacity-40 w-1/4 h-1 rounded-lg shadow-lg" />
          <img
            src="/assets/images/cuisine-carousel/pau_hawker.png"
            alt="Cooking Pau-pau"
            className="w-40 absolute -top-30 right-12 rounded-xl border-4 border-white shadow-lg bg-white transform scale-x-[-1]"
          />
          {/* Loading Bar Title */}
          <h1 className="mr-auto text-xl font-bold px-18">Delivery Status</h1>

          {/* Loading Bar Component */}
          <LoadingBar checkpoints={5} progress={progress} />
        </div>
      </div>
    </>
  );
};

export default DeliveryStatusPage;
