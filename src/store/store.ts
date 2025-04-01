import { create } from "zustand";

interface StoreState {
  user: any;
  updateStore: (
    type: keyof Omit<StoreState, "updateStore">,
    payload: any
  ) => void;
}

const useAppStore = create<StoreState>((set) => ({
  user: null,
  updateStore: (type, payload) =>
    set((state) => ({ ...state, [type]: payload })),
}));

export default useAppStore;
