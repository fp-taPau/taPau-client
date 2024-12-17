"use client";

import Header from "../../components/Header";

export default function PoolDecision() {
  return (
    <>
      <Header logoUrl="/assets/images/header-logo.png" />
      <main className="p-5 w-11/12 items-center mx-auto my-8 flex flex-col justify-center">
        <div className="flex justify-center mb-6">
          <img
            src="/assets/images/pau_what.png"
            alt="Paupau looking like he is waiting for an answer"
            className="max-w-md w-full rounded-2xl"
          />
        </div>
        <div className="flex justify-center items-center w-full gap-x-100">
          <button className="flex bg-partyPink hover:bg-pink-600 text-white font-bold py-5 px-20 rounded">
            Yes. Match Me!
          </button>
          <button className="bg-partyPink hover:bg-pink-600 text-white font-bold py-5 px-20 rounded">
            No, browse first.
          </button>
        </div>
      </main>
    </>
  );
}
