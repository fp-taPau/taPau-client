"use client";

import BackButton from "@/components/ui/BackButton";
import Header from "../../components/Header";
import CountdownTimer from "@/components/timer";
import Cancellation from "../../components/ui/Cancellation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function matchSuccess() {
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
        <div className="-ml-8 flex flex-row items-start w-full px-5 my-10 space-x-5">
          {/* <BackButton onClick={() => setIsModalOpen(true)} /> */}
          {/* TODO: Call cancellation button again here */}
          {/* <h1 className="text-black font-bold flex flex-col justify-start text-4xl -mt-2">
            Matches Found!
          </h1> */}
        </div>
        <div className="py-8 bg-secondaryPink w-11/12 flex flex-col items-center justify-center rounded-lg shadow-md">
            <h2 className="text-4xl font-extrabold text-partyPink">
                Matches Found!
            </h2>
          <img
            src="/assets/images/pau_waiter.png"
            className="w-100 h-100 items-center"
          />
          {/* <h2 className="text-4xl font-extrabold text-partyPink">
            Matches Found!
          </h2> */}

          {/* <CountdownTimer /> */}
          <p className="text-secondaryText text-center mt-2">
            Success! You're on track to a flavourful surprise.
            <br />
            Your order will now be sent to the restaurant.
          </p>

          
          <button className="bg-partyPink text-white text-center font-bold rounded-lg px-12 py-3 my-6">View Order Status</button>
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
