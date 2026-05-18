import { create } from "zustand";
import type { AuthState } from "../types/auth.type";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,

  setUser: (user) => set({ user }),

  setSession: (session) => set({ session }),

  logout: () =>
    set({
      user: null,
      session: null,
    }),
}));
