import { create } from "zustand";
import restaurants from "../data/restaurants.json"

const useRestaurantStore = create((set) => ({
  // TODO: Remove default restaurant on further failsafes implemented
  restaurant: restaurants[0], // Default state for the restaurant
  setRestaurant: (restaurant) => set({ restaurant }), // Action to update the restaurant
}));

export default useRestaurantStore;
