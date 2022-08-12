import { Footer } from '@components/footers/footer.component';
import { NavigationBar } from '@components/navigation-bars/navigation-bar.component';
import { signIn, signOut, useSession } from 'next-auth/react';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { data } = useSession();

  return (
    <div className="flex w-screen flex-col">
      <div className="flex min-h-screen w-full flex-col">
        <NavigationBar session={data} signIn={signIn} signOut={signOut} />
        {children}
      </div>
      <Footer />
    </div>
  );
}
