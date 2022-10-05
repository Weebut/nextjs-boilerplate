import { LayoutConfig } from '@libs/config';
import { MaxWidth } from '@libs/material-ui/types';
import { Container } from '@mui/material';
import { ReactNode } from 'react';

const defaultMaxWidth = LayoutConfig.maxWidth as MaxWidth;

interface StripProps {
  children?: ReactNode;
  maxWidth?: MaxWidth;
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
}

export default function Strip({
  children,
  maxWidth = defaultMaxWidth,
  px = 5,
  py,
  pt,
  pb,
}: StripProps) {
  return (
    <Container
      disableGutters
      maxWidth={maxWidth}
      sx={{
        px,
        py,
        pt,
        pb,
      }}
    >
      {children}
    </Container>
  );
}
