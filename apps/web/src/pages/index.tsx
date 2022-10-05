import { Meta } from '@components/atoms/meta';
import Home from '@components/pages/home';
import { Box } from '@mui/material';

export default function HomePage() {
  return (
    <Box>
      <Meta basePath="/" title="홈" description="홈" />
      <Home />
    </Box>
  );
}
