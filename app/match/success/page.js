"use client";

import Header from "../../../components/Header";
import { useRouter } from "next/navigation";

export default function matchSuccess() {
  const router = useRouter();

  return (
    <>
      <Header logoUrl="/assets/images/header-logo.png" />
      <main className="p-5 w-11/12 items-center mx-auto flex flex-col justify-center mb-20">
        <div className="-ml-8 flex flex-row items-start w-full px-5 my-10 space-x-5"></div>
        <div className="py-8 bg-secondaryPink w-11/12 flex flex-col items-center justify-center rounded-lg shadow-md">
          <h2 className="text-4xl font-extrabold text-partyPink">
            Matches Found!
          </h2>
          <img
            src="/assets/images/pau_waiter.png"
            className="w-100 h-100 items-center"
          />
          {/* <CountdownTimer /> */}
          <p className="text-secondaryText text-center mt-2">
            Success! You're on track to a flavourful surprise.
            <br />
            Your order will now be sent to the restaurant.
          </p>

          <button
            className="bg-partyPink text-white text-center font-bold rounded-lg px-12 py-3 my-6"
            onClick={() => router.push("/delivery/success")}
          >
            View Order Status
          </button>
        </div>
      </main>
    </>
  );
}
