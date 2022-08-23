import { Footer } from '@components/footers/footer.component';
import { NavigationBar } from '@components/navigation-bars/navigation-bar.component';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

export function Layout({ children, showFooter = true }: LayoutProps) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex min-h-screen w-full flex-col">
        <NavigationBar />
        <div className="flex w-full flex-col">{children}</div>
      </div>
      {showFooter && <Footer />}
    </div>
  );
}
