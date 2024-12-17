"use client";

import Header from "../../../components/Header";
import Cancellation from "../../../components/ui/Cancellation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function matchFail() {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancellation = () => {
    router.push("/");
    // TODO: Add API Call to count cancellation for user
    setIsModalOpen(false);
  };

  return (
    <>
      <Header logoUrl="/assets/images/header-logo.png" />
      <main className="p-5 w-11/12 items-center mx-auto flex flex-col justify-center mb-20">
        <div className="-ml-8 flex flex-row items-start w-full px-5 my-10 space-x-5"></div>
        <div className="py-16 bg-secondaryPink w-11/12 flex flex-col items-center justify-center rounded-lg shadow-md">
          <h2 className="text-4xl font-extrabold text-partyPink">
            No available matches
            <span className="relative after:content-[''] after:absolute after:animate-dots"></span>
          </h2>
          {/* change image link */}
          <img
            src="/assets/images/hungry_pau.png"
            className="w-100 h-100 items-center"
          />

          <p className="text-secondaryText text-center mt-2">
            Sorry, it's taking longer than usual to find a match.
            <br />
            Would you like to Match Again or Proceed to Checkout?
          </p>
          <p className="text-secondaryText text-center mt-2 font-light italic">
            (Standard Delivery Fees apply if you checkout now)
          </p>

          <div className="flex justify-center items-center space-x-6 mt-6">
            <button className="bg-partyPink text-white text-center font-bold rounded-lg hover:bg-pink-600 max-w-80 w-60 py-3 my-6">
              Checkout Now
            </button>
            <button
              className="bg-partyPink text-white text-center font-bold rounded-lg hover:bg-pink-600 max-w-80 w-60 py-3 my-6"
              onClick={() => router.push("/match/pending")}
            >
              Match Again
            </button>
          </div>
        </div>
        <Cancellation
          title="We are still finding you a match, are you sure you want to leave?"
          imageSrc="/assets/images/gasping_pau.png"
          imageAltDesc="Paupau looking like he is waiting for an answer"
          description="Heads up! If you leave this matching session, your cart will be cleared, the restaurant might not remain available as an option."
          optionOne={{
            label: "Yes, I want to leave.",
            onClick: handleCancellation,
          }}
          optionTwo={{
            label: "No, keep me in the pool.",
            onClick: () => setIsModalOpen(false),
          }}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </main>
    </>
  );
}
