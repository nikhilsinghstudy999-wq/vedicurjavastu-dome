import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  user: any | null;
  profile: any | null;
  setUser: (user: any) => void;
  setProfile: (profile: any) => void;
  clear: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      profile: null,
      setUser: (user) => set({ user }),
      setProfile: (profile) => set({ profile }),
      clear: () => set({ user: null, profile: null }),
    }),
    { name: 'vedicurja-user' }
  )
);
