import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(null); // Start with null to avoid SSR issues

  // Function to generate a random time
  const getRandomTime = () => Math.floor(Math.random() * (600 - 300 + 1)) + 300;

  useEffect(() => {
    // Set random time only after the component mounts
    setTimeLeft(getRandomTime());
  }, []);

  useEffect(() => {
    if (timeLeft === null) return; // Skip if timeLeft is not set yet

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [timeLeft]);


  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="flex justify-center items-center p-5">
      <div className="text-8xl font-bold bg-partyPink opacity-80 text-white rounded-lg px-4 py-2">
        {formatTime(timeLeft)}
      </div>
    </div>
  );
};

export default CountdownTimer;
