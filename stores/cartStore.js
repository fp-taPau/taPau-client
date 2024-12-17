import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [], // Default state for the cart
  addToCart: (item) => set((state) => {
    // Check if item already exists in the cart
    const existingItemIndex = state.cart.findIndex(cartItem => cartItem.item.id === item.id);

    if (existingItemIndex !== -1) {
      // If the item exists, update the quantity
      const updatedCart = [...state.cart];
      updatedCart[existingItemIndex].quantity += 1;
      return { cart: updatedCart };
    } else {
      // If the item doesn't exist, add it to the cart
      const newItem = {
        cartItemId: Date.now().toString(), // Generate unique ID for the cart item
        quantity: 1, // Set initial quantity to 1
        item: item,
      };
      return { cart: [...state.cart, newItem] };
    }
  }),
}));

export default useCartStore;
