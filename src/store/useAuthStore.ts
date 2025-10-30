import { create } from "zustand"
import { UserPayload } from "@/types/User"

interface AuthState {
  user: UserPayload | null
  setUser: (user: UserPayload) => void;
  clearUser: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  setUser: (user: UserPayload) => set({ user }),
  clearUser: () => set({ user: null }),
  isAuthenticated: () => !!(get().user),
}))
