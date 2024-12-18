"use client";

import Header from "../../../components/Header";
import Cancellation from "../../../components/ui/Cancellation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  incrementCustomerCancellation,
  incrementCustomerFailure,
} from "@/api/tapau/tapau";
import useFailureStore from "@/stores/failureStore";

export default function MatchFail() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addFailureCount = useFailureStore.getState().addFailureCount;
  const failures = useFailureStore((state) => state.failures);

  // run this when the customer is notified that their matching has failed
  useEffect(() => {
    addFailureCount();
    // Fetch the order data when the component mounts
    incrementCustomerFailure("1").then((data) => {
      console.log("Customer's matching has failed");
    });
  }, []);

  // run this when the customer willingly cancels and exits a matching pool
  const handleCancellation = () => {
    // TODO: Add API Call to count cancellation for user
    incrementCustomerCancellation("1", "1").then((data) => {
      console.log("Customer cancel matching in pool");
      // save the cancelled data returned into the store
      const setCancelledRestaurants =
        useCancelledStore.getState().setCancelledRestaurants;
      // Save the extracted data into the Zustand store
      setCancelledRestaurants(data.cancellation);
    });
    router.push("/delivery/success");
    setIsModalOpen(false);
  };

  return (
    <>
      <Header logoUrl="/assets/images/header-logo.png" />
      <main className="p-5 w-11/12 mx-auto flex flex-col justify-center items-center mb-20">
        <div className="-ml-8 flex flex-row items-start w-full px-5 my-10 space-x-5" />
        <div className="p-8 bg-secondaryPink w-full flex flex-row items-center rounded-lg shadow-md">
          {/* Image on the Left */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <img
              src="/assets/images/hungry_pau.png"
              alt="Paupau waiting patiently"
              className="h-auto w-auto max-w-[32rem]  object-contain"
            />
          </div>

          {/* Text and Buttons on the Right */}
          <div className="flex flex-col items-start justify-center -mt-2 -ml-5 space-y-6">
            <h1 className="text-[8.5rem] leading-none tracking-wide font-extrabold text-partyPink font-typaugraphy text-left">
              No available matches
            </h1>
            {failures <= 3 ? (
              <p className="text-secondaryText text-left text-lg">
                We're sorry it's a little taking longer than usual to find you a
                match.
                <br />
                Would you like to try to find a match again or proceed to
                checkout*?
              </p>
            ) : (
              <p className="text-secondaryText text-left text-lg">
                We're sorry it's a little taking longer than usual to find you a
                match, but would still like to thank you for taking the step to
                be a part of Foodpanda's mission to reduce food wastage.
                <br />
                Would you like to try to find a match again or proceed to
                checkout*?
              </p>
            )}
            <div className="flex justify-start items-center space-x-6">
              <button
                className="bg-partyPink text-white text-center font-bold rounded-lg hover:bg-pink-600 w-60 py-3"
                onClick={() => setIsModalOpen(true)}
              >
                Checkout Now
              </button>
              <button
                className="bg-partyPink text-white text-center font-bold rounded-lg hover:bg-pink-600 w-60 py-3"
                onClick={() => router.push("/match/pending")}
              >
                Match Again
              </button>
            </div>
          </div>
          {failures <= 2 ? (
            <p className="absolute text-secondaryText text-sm font-light italic bottom-25 right-28">
              *Standard Delivery Fees apply if you checkout now.
            </p>
          ) : (
            <p className="absolute text-secondaryText text-sm font-light italic bottom-25 right-28">
              *Standard Delivery Fees are halved if you checkout now.
            </p>
          )}
        </div>

        {/* Cancellation Modal */}
        <Cancellation
          title="We are sorry we couldn't find you a match... Are you sure you want to leave?"
          imageSrc="/assets/images/gasping_pau.png"
          imageAltDesc="Paupau looking like he is waiting for an answer"
          description="Heads up! Your cart will be cleared if you leave, and the restaurant might not remain available as an option again later under Tapau-Together."
          optionOne={{
            label: "Yes, checkout now",
            onClick: handleCancellation,
          }}
          optionTwo={{
            label: "No, find another match",
            onClick: () => {
              setIsModalOpen(false);
              router.push("/match/pending");
            },
          }}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </main>
    </>
  );
}
