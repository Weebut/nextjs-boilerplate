import { Layout } from '@components/layouts/layout.component';
import {
  FullWidthStrip,
  FullWidthStripBackgroundColorEnums,
} from '@components/strips/full-width-strip.component';
import { Strip } from '@components/strips/strip.component';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export function HomeContainer() {
  return (
    <Layout>
      <FullWidthStrip bgColor={FullWidthStripBackgroundColorEnums.PRIMARY}>
        <Box className="flex flex-col items-center justify-center py-32">
          <Stack
            spacing={3}
            className="text flex flex-col text-center font-bold text-white"
          >
            <Typography variant="h3">Title</Typography>
            <Typography variant="h6">Sub Title</Typography>
          </Stack>
        </Box>
      </FullWidthStrip>
      <Strip>
        <Box className="items-center justify-center py-12">
          <Link href={{ pathname: '/movies' }} passHref>
            <Button size="large" variant="contained" className="font-bold">
              Go to /movies
            </Button>
          </Link>
        </Box>
      </Strip>
      <Strip>
        <Box className="items-center justify-center py-12">
          <Link href={{ pathname: '/file-upload' }} passHref>
            <Button size="large" variant="contained" className="font-bold">
              Go to /file-upload
            </Button>
          </Link>
        </Box>
      </Strip>
      <FullWidthStrip bgColor={FullWidthStripBackgroundColorEnums.BLACK}>
        <Link href={{ pathname: '/movies' }} passHref>
          <Box className="flex cursor-pointer items-center justify-center py-32">
            <Typography className="text-2xl font-bold text-white">
              Sign up and get your favorite movies!
            </Typography>
          </Box>
        </Link>
      </FullWidthStrip>
    </Layout>
  );
}
