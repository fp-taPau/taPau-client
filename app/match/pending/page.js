"use client";

import BackButton from "@/components/ui/BackButton";
import Header from "../../../components/Header";
import CountdownTimer from "@/components/timer";
import Cancellation from "../../../components/ui/Cancellation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function matchPending() {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancellation = () => {
    router.push("/");
    // TODO: Add API Call to count cancellation for user
    incrementCustomerCancellation("1", "1").then((data) => {
      console.log("User cancel matching in pool")
      // console.log(data)
      // save the cancelled data returned into the store
      const setCancelledRestaurants = useCancelledStore.getState().setCancelledRestaurants;
      // Save the extracted data into the Zustand store
      setCancelledRestaurants(data.cancellation);
    })
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleSuccessPress = (event) => {
      // Check if Cmd (meta key), Shift, and Y keys are pressed
      if (event.metaKey && event.shiftKey && event.key === "y") {
        console.log("Cmd + Left Shift + Y pressed!");
        router.push("/match/success");
      }
    };

    const handleFailPress = (event) => {
      // Check if Cmd (meta key), Shift, and X keys are pressed
      if (event.metaKey && event.shiftKey && event.key === "x") {
        console.log("Cmd + Left Shift + X pressed!");
        router.push("/match/fail");
      }
    };

    // Add event listeners
    window.addEventListener("keydown", handleSuccessPress);
    window.addEventListener("keydown", handleFailPress);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("keydown", handleSuccessPress);
      window.removeEventListener("keydown", handleFailPress);
    };
  }, [router]);

  return (
    <>
      <Header logoUrl="/assets/images/header-logo.png" />
      <main className="p-5 w-11/12 items-center mx-auto flex flex-col justify-center mb-20">
        <div className="-ml-8 flex flex-row items-start w-full px-5 my-10 space-x-5">
          <BackButton onClick={() => setIsModalOpen(true)} />
          {/* TODO: Call cancellation button again here */}
          <h1 className="text-black font-bold flex flex-col justify-start text-4xl -mt-2">
            <span className="relative after:content-[''] after:absolute after:animate-dots">
              Matching in progress
            </span>
          </h1>
        </div>
        <div className="py-8 bg-secondaryPink w-11/12 flex flex-row items-center justify-center rounded-lg shadow-md">
          <img
            src="/assets/images/curious_pau.png"
            className="w-140 h-140 items-center -ml-30 -mt-8"
          />
          <div className="flex flex-col items-center justify-center -mt-15">
            <h1 className="text-[9rem] font-extrabold text-partyPink font-typaugraphy">
              Hang Tight!
            </h1>
            <CountdownTimer />
            <p className="text-secondaryText text-center mt-2 text-lg">
              We are currently looking for a match for you!
              <br />
              Your payment will be held during this time.
            </p>
          </div>
        </div>
        <Cancellation
          title="We are still finding you a match, are you sure you want to leave?"
          imageSrc="/assets/images/gasping_pau.png"
          imageAltDesc="Paupau looking like he is waiting for an answer"
          description="Heads up! If you leave this matching session, your cart will be cleared, the restaurant might not remain available as an option later on."
          optionOne={{
            label: "Yes, leave now",
            onClick: handleCancellation,
          }}
          optionTwo={{
            label: "No, stay in the session",
            onClick: () => setIsModalOpen(false),
          }}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </main>
    </>
  );
}
