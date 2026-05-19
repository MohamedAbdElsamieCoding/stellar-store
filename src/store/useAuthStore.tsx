import { create } from "zustand";
import type { AuthState } from "../types/auth.type";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  loading: true,

  setUser: (user) => set({ user }),

  setSession: (session) => set({ session }),

  setLoading: (loading: boolean) => set({ loading }),

  logout: () =>
    set({
      user: null,
      session: null,
    }),
}));
