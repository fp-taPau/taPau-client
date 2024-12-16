"use client";

import Header from "../../components/Header";

export default function HomePage() {
  return (
    <>
      <Header logoUrl="/assets/images/header-logo.png" />
      <main className="p-5 w-11/12 items-center mx-auto my-8">
        <div>
          <img
            src="/assets/images/cuisine-carousel/pau_bbt.png"
            alt="Add image desc here for A11Y"
            className="w-full rounded-2xl"
          />
        </div>
      </main>
    </>
  );
}
