import { LayoutConfig } from '@libs/config';
import { MaxWidth } from '@libs/material-ui/types';
import { Container, Typography } from '@mui/material';

const defaultMaxWidth = LayoutConfig.maxWidth as MaxWidth;

interface FooterProps {
  maxWidth?: MaxWidth;
}

export default function Footer({ maxWidth = defaultMaxWidth }: FooterProps) {
  return (
    <Container
      maxWidth={maxWidth}
      disableGutters
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        borderTop: 1,
        borderColor: 'divider',
        px: 5,
      }}
    >
      <Typography>Copyright © 2022 Weebut Corp. All right reserved.</Typography>
    </Container>
  );
}
