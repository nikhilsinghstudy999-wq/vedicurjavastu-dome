import AuthGuard from '@/features/auth/components/AuthGuard';

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return <AuthGuard requireAuth={false}>{children}</AuthGuard>;
}
