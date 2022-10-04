import Layout from '@components/layouts/layout.component';
import FullWidthStrip, {
  FullWidthStripBackgroundColorEnums,
} from '@components/strips/full-width-strip.component';
import { Box, Stack, Typography } from '@mui/material';

export default function HomeContainer() {
  return (
    <Layout>
      <FullWidthStrip bgColor={FullWidthStripBackgroundColorEnums.PRIMARY}>
        <Box flex="col" py={32} justifyContent="center" alignItems="center">
          <Stack
            display="flex"
            textAlign="center"
            fontWeight="bold"
            color="white"
            spacing={3}
          >
            <Typography variant="h3">Title</Typography>
            <Typography variant="h6">Sub Title</Typography>
          </Stack>
        </Box>
      </FullWidthStrip>
    </Layout>
  );
}
