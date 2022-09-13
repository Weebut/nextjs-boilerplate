import { Footer } from '@components/footers/footer.component';
import { NavigationBar } from '@components/navigation-bars/navigation-bar.component';
import { Group, SideBar } from '@components/side-bars/side-bar.component';
import { Box } from '@mui/material';

import { ReactNode } from 'react';

interface SideBarLayoutProps {
  children: ReactNode;
  groups: Group[];
  showFooter?: boolean;
}

export function SideBarLayout({
  children,
  groups,
  showFooter = false,
}: SideBarLayoutProps) {
  return (
    <Box flex="col" width="100vw">
      <Box
        flex="col"
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundColor: '#F5F5F5',
        }}
      >
        <NavigationBar />
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          width="100%"
          py={{ xs: 8, md: 4 }}
        >
          <SideBar groups={groups} />
          <Box
            flex="col"
            height="100%"
            width="100%"
            alignItems="start"
            justifyContent="start"
          >
            {children}
          </Box>
        </Box>
      </Box>
      {showFooter && <Footer />}
    </Box>
  );
}
