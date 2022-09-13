import { Footer } from '@components/footers/footer.component';
import { NavigationBar } from '@components/navigation-bars/navigation-bar.component';
import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

export function Layout({ children, showFooter = true }: LayoutProps) {
  return (
    <Box flex="col" width="100%">
      <Box flex="col" minHeight="100vh" width="100%">
        <NavigationBar />
        <Box flex="col" width="100%">
          {children}
        </Box>
      </Box>
      {showFooter && <Footer />}
    </Box>
  );
}
