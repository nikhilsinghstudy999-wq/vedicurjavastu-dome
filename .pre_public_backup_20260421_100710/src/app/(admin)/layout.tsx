import AuthGuard from '@/features/auth/components/AuthGuard';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}
