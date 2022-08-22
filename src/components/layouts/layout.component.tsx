import { Footer } from '@components/footers/footer.component';
import { NavigationBar } from '@components/navigation-bars/navigation-bar.component';
import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  session: Session | null;
  showFooter?: boolean;
}

export function Layout({ children, session, showFooter = true }: LayoutProps) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex min-h-screen w-full flex-col">
        <NavigationBar session={session} signIn={signIn} signOut={signOut} />
        <div className="flex w-full flex-col">{children}</div>
      </div>
      {showFooter && <Footer />}
    </div>
  );
}
