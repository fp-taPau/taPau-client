import React from "react";

const LoadingBar = ({ checkpoints = 5, progress = 0 }) => {
  const percentageProgress = Math.min(progress, 100); // Ensure progress does not exceed 100

  // Checkpoint positions as percentage of the bar width
  const checkpointPositions = Array.from({ length: checkpoints }, (_, i) =>
    Math.floor((i / (checkpoints - 1)) * 100)
  );

  return (
    <div className="relative w-3/4 h-4 bg-gray-200 rounded-full overflow-hidden shadow-md">
      {/* Stream Effect (Flowing Gradient) */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent animate-stream"
        style={{ width: `${percentageProgress}%` }}
      ></div>

      {/* Progress Bar */}
      <div
        className="absolute h-full bg-partyPink transition-all rounded-full"
        style={{
          width: `${percentageProgress}%`,
          transition: "width 0.5s ease-in-out", // Smooth width transition
        }}
      ></div>

      {/* Checkpoints (Dots) */}
      <div className="absolute inset-0 flex justify-between items-center">
        {checkpointPositions.map((position, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full bg-darkerPartyPink transform transition-transform duration-500 ${
              percentageProgress >= position ? "scale-105" : "scale-100"
            }`}
            style={{
              left: `${position}%`,
              zIndex: 2,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingBar;
