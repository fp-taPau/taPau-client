"use client";

import Header from "../../components/Header";
import CountdownTimer from "@/components/timer";

export default function matchPending() {
    return (
        <>
            <Header logoUrl="/assets/images/header-logo.png" />
            <main className="p-5 w-11/12 items-center mx-auto my-20 flex flex-col justify-center">
                <h1 className="text-partyPink font-bold p-5 w-11/12 items-center mx-auto my-20 flex flex-col justify-center text-4xl">
                    matching in progress!
                <img src="/assets/images/curious_pau.png" className="w-100 h-100 items-center"/>
                </h1>
                <CountdownTimer/>
            </main>
        </>
    )
}