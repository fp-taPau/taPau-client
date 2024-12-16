"use client";

import Header from "../components/Header";
import CuisineCarousel from "../components/tapau_page/CuisineCarousel";

export default function HomePage() {
  return (
    <>
      <Header logoUrl="/assets/images/header-logo.png" />
      <main className="p-5 w-11/12 items-center mx-auto my-8">
        <div className="">
          <img
            src="/assets/images/tapau-together-banner.png"
            alt="TaPau Together Banner"
            className="w-full rounded-2xl"
          />
        </div>
        <CuisineCarousel />
      </main>
    </>
  );
}
