"use client";

import Header from "../../../components/Header";
import Cancellation from "../../../components/ui/Cancellation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function MatchPending() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancellation = () => {
    router.push("/");
    // TODO: Add API Call to count cancellation for user
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.metaKey && event.shiftKey) {
        if (event.key === "y") {
          console.log("Cmd + Left Shift + Y pressed!");
          router.push("/match/success");
        } else if (event.key === "x") {
          console.log("Cmd + Left Shift + X pressed!");
          router.push("/match/fail");
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [router]);

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
            <p className="text-secondaryText text-left text-lg">
              We're sorry it's a little taking longer than usual to find you a
              match.
              <br />
              Would you like to try to find a match again or proceed to
              checkout*?
            </p>
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
          <p className="absolute text-secondaryText text-sm font-light italic bottom-25 right-28">
            *Standard Delivery Fees apply if you checkout now.
          </p>
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
