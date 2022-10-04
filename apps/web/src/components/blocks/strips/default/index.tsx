import { LayoutConfig } from '@libs/config';
import { MaxWidth } from '@libs/material-ui/types';
import { Container } from '@mui/material';
import { ReactNode } from 'react';

const defaultMaxWidth = LayoutConfig.maxWidth as MaxWidth;

interface StripProps {
  children?: ReactNode;
  maxWidth?: MaxWidth;
}

export default function Strip({
  children,
  maxWidth = defaultMaxWidth,
}: StripProps) {
  return (
    <Container disableGutters maxWidth={maxWidth}>
      {children}
    </Container>
  );
}
