import { Footer } from '@components/footers/footer.component';
import { NavigationBar } from '@components/navigation-bars/navigation-bar.component';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex w-screen flex-col">
      <div className="flex min-h-screen w-full flex-col">
        <NavigationBar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
