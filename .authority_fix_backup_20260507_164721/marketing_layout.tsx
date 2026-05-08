import AuthorityBar from '@/features/shared/components/AuthorityBar';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthorityBar />
      {children}
    </>
  );
}
