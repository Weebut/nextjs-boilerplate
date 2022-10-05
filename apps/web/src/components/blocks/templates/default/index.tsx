import AppBar from '@components/blocks/app-bars/default';
import Footer from '@components/blocks/footers/default';
import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';

interface TemplateProps {
  children: ReactNode;
  showFooter?: boolean;
}

export default function Template({
  showFooter = true,
  children,
}: TemplateProps) {
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box display="flex" flexDirection="column" minHeight="100vh" width="100%">
        <AppBar />
        <Container maxWidth="sm" disableGutters>
          {children}
        </Container>
      </Box>
      {showFooter && <Footer />}
    </Box>
  );
}
