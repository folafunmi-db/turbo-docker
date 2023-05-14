import { create } from "zustand";
import { combine } from "zustand/middleware";

const useBearStore = create((set) => ({
  bears: 1,
  increasePopulation: () => {
    set((state: any) => ({ bears: state.bears + 1 }));
  },
  removeAllBears: () => set({ bears: 0 }),
}));

export default useBearStore;
