import { Footer } from '@components/footers/footer.component';
import { NavigationBar } from '@components/navigation-bars/navigation-bar.component';
import { SideBarModal } from '@components/side-bars/side-bar-modal.component';
import { Group, SideBar } from '@components/side-bars/side-bar.component';
import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import { ReactNode } from 'react';

interface SideBarLayoutProps {
  children: ReactNode;
  session: Session | null;
  groups: Group[];
}

export function SideBarLayout({
  children,
  session,
  groups,
}: SideBarLayoutProps) {
  return (
    <div className="flex w-screen flex-col">
      <div className="flex h-auto min-h-screen w-full flex-col bg-gray-100">
        <NavigationBar session={session} signIn={signIn} signOut={signOut} />
        <div className="flex h-auto w-full flex-col py-8 md:flex-row md:py-4">
          <SideBar groups={groups} />
          <SideBarModal groups={groups} />
          <div className="flex h-full flex-col items-start justify-start">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
