import { create } from "zustand";

export const useGithubProfileData = create((set) => ({
  data: null,

  setData(data) {
    return set({ data: data });
  },
}));
