import { create } from "zustand";

interface MediaStore {
  type: "movie" | "tv";
  setType: (type: "movie" | "tv") => void;
}

const useMediaTypeStore = create<MediaStore>((set) => ({
  type: "movie",
  setType: (type) => set({ type }),
}));

export default useMediaTypeStore;
