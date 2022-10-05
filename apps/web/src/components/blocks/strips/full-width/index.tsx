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
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
}

export default function FullWidthStrip({
  children,
  maxWidth = defaultMaxWidth,
  bgProps,
  ...stripProps
}: FullWidthStripProps) {
  return (
    <Box {...bgProps}>
      <Strip maxWidth={maxWidth} {...stripProps}>
        {children}
      </Strip>
    </Box>
  );
}
