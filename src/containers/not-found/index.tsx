import { Box, Link, Typography } from '@mui/material';
import NextLink from 'next/link';

export function NotFoundContainer() {
  return (
    <Box className="flex h-screen w-screen flex-col items-center justify-center space-y-8">
      <Typography className="text-6xl font-bold">404</Typography>
      <Box className="flex flex-col space-y-2 text-center">
        <Typography className="text-xl">{`페이지를 찾을 수 없어요 :(`}</Typography>
        <NextLink href="/" passHref>
          <Link className="text-primary text-opacity-90 hover:text-opacity-100 hover:underline">
            홈으로 돌아갑니다
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
}
