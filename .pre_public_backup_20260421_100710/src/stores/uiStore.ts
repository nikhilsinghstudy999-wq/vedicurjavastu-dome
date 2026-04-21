import { create } from 'zustand';

interface UIState {
  isSidebarOpen: boolean;
  isAudioEnabled: boolean;
  theme: 'light' | 'dark' | 'system';
  toggleSidebar: () => void;
  toggleAudio: () => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: false,
  isAudioEnabled: false,
  theme: 'system',
  toggleSidebar: () => set((s) => ({ isSidebarOpen: !s.isSidebarOpen })),
  toggleAudio: () => set((s) => ({ isAudioEnabled: !s.isAudioEnabled })),
  setTheme: (theme) => set({ theme }),
}));
