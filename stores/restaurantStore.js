import { create } from "zustand";

const useRestaurantStore = create((set) => ({
  restaurant: null, // Default state for the restaurant
  setRestaurant: (restaurant) => set({ restaurant }), // Action to update the restaurant
}));

export default useRestaurantStore;
