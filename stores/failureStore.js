import { create } from "zustand";

const useFailureStore = create((set) => ({
  failures: 0, // Default state
  addFailureCount: () => set((state) => ({ failures: state.failures + 1 })),
}));

export default useFailureStore;
