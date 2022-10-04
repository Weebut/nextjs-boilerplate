import { LayoutConfig } from '@libs/config';
import { MaxWidth } from '@libs/material-ui/types';
import { Box } from '@mui/material';
import { ReactNode } from 'react';
import Strip from '../default';

const defaultMaxWidth = LayoutConfig.maxWidth as MaxWidth;

interface FullWidthStripProps {
  children?: ReactNode;
  maxWidth?: MaxWidth;
  bgProps?: any;
}

export default function FullWidthStrip({
  children,
  maxWidth = defaultMaxWidth,
  bgProps,
}: FullWidthStripProps) {
  return (
    <Box {...bgProps}>
      <Strip maxWidth={maxWidth}>{children}</Strip>
    </Box>
  );
}
