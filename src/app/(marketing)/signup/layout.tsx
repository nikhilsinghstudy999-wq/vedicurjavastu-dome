import AuthGuard from '@/features/auth/components/AuthGuard';

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
  return <AuthGuard requireAuth={false}>{children}</AuthGuard>;
}
