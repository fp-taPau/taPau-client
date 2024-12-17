"use client";
import React from "react";
import { useRouter } from "next/navigation";

const BackButton = ({ onClick, className = "" }) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick(); // Run custom function first
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center text-gray-700 hover:text-gray-900 font-medium ${className}`}
    >
      <img
        src="https://www.svgrepo.com/show/421133/arrow-back-left.svg"
        className="h-6 w-6 opacity-40 hover:opacity-100"
      />
    </button>
  );
};

export default BackButton;
