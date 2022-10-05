import FullWidthStrip from '@components/blocks/strips/full-width';
import MainTemplate from '@components/blocks/templates/default';
import { Box, Stack, Typography } from '@mui/material';

export default function Home() {
  return (
    <MainTemplate>
      <FullWidthStrip bgProps={{ sx: { backgroundColor: 'white' } }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          py={32}
        >
          <Stack
            spacing={3}
            display="flex"
            flexDirection="column"
            textAlign="center"
          >
            <Typography variant="h3" fontWeight="bold">
              Title
            </Typography>
            <Typography variant="h6">Sub Title</Typography>
          </Stack>
        </Box>
      </FullWidthStrip>
    </MainTemplate>
  );
}
