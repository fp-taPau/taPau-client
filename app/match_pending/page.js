"use client";

import BackButton from "@/components/ui/BackButton";
import Header from "../../components/Header";
import CountdownTimer from "@/components/timer";

export default function matchPending() {
  return (
    <>
      <Header logoUrl="/assets/images/header-logo.png" />
      <main className="p-5 w-11/12 items-center mx-auto flex flex-col justify-center mb-20">
        <div className="-ml-8 flex flex-row items-start w-full px-5 my-10 space-x-5">
          <BackButton />
          {/* TODO: Call cancellation button again here */}
          <h1 className="text-black font-bold flex flex-col justify-start text-4xl -mt-2">
            Matching in progress!
          </h1>
        </div>
        <div className="py-8 bg-secondaryPink w-11/12 flex flex-col items-center justify-center rounded-lg shadow-md">
          <img
            src="/assets/images/curious_pau.png"
            className="w-100 h-100 items-center"
          />
          <h2 className="text-4xl font-extrabold text-partyPink">
            Hang Tight!
          </h2>

          <CountdownTimer />
          <p className="text-secondaryText text-center mt-2">
            We are currently looking for a match for you!
            <br />
            Your payment will be held during this time.
          </p>
        </div>
      </main>
    </>
  );
}
