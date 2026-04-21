'use client';
import { createContext, useContext, ReactNode } from 'react';
import { useAuthStore } from '@/stores/authStore';

interface AdminContextType {
  isAdmin: boolean;
  loading: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const { profile, isLoading, isInitialized } = useAuthStore();
  const isAdmin = profile?.role === 'admin';
  const loading = isLoading || !isInitialized;

  return (
    <AdminContext.Provider value={{ isAdmin, loading }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error('useAdmin must be used within AdminProvider');
  return ctx;
}
