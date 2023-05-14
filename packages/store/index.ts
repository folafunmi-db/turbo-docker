import { create } from "zustand";
import { combine } from "zustand/middleware";

const useBearStore = create(
  combine(
    {
      bears: 1,
    },
    (set) => ({
      increasePopulation: () => {
        set((state: any) => ({ bears: state.bears + 1 }));
      },
      removeAllBears: () => set({ bears: 0 }),
    })
  )
);

export default useBearStore;
