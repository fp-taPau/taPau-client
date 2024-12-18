"use client";

import Header from "../../../components/Header";
import { useRouter } from "next/navigation";

export default function MatchSuccess() {
  const router = useRouter();

  return (
    <>
      <Header logoUrl="/assets/images/header-logo.png" />
      <main className="p-5 w-11/12 mx-auto flex flex-col justify-center items-center mb-20">
        <div className="-ml-8 flex flex-row items-start w-full px-5 my-10 space-x-5" />
        <div className="p-8 bg-secondaryPink w-full flex flex-row items-center rounded-lg shadow-md">
          {/* Image on the Left */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <img
              src="/assets/images/pau_waiter.png"
              alt="Paupau waiting patiently"
              className="h-auto w-auto max-w-[32rem] ml-14 object-contain"
            />
          </div>

          {/* Text and Buttons on the Right */}
          <div className="flex flex-col items-start justify-center -mt-2 ml-8 space-y-6">
            <h1 className="text-[8.5rem] leading-none tracking-wide font-extrabold text-partyPink font-typaugraphy text-left">
              Matches Found!
            </h1>
            <p className="text-secondaryText text-left text-lg">
              You have been successfully matched! You're on track to a
              flavourful surprise.
              <br />
              Your order will now be sent to the restaurant.
            </p>
            <div className="flex justify-start items-center space-x-6">
              <button
                className="bg-partyPink text-white text-center font-bold rounded-lg hover:bg-pink-600 w-60 py-3"
                onClick={() => router.push("/delivery/success")}
              >
                Check Order Status
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
