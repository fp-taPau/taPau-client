import { create } from "zustand";

const useCancelledStore = create((set) => ({
  cancelledRestaurants: {}, // Default state

  // Action to set cancellation data
  setCancelledRestaurants: (cancellationData) =>
    set(() => ({
      cancelledRestaurants: cancellationData,
    })),
}));

export default useCancelledStore;
