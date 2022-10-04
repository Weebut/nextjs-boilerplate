import { Link, Stack, Typography } from '@mui/material';
import NextLink from 'next/link';

export default function NotFound() {
  return (
    <Stack
      spacing={4}
      display="flex"
      flexDirection="column"
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h2" fontWeight="bold">
        404
      </Typography>
      <Stack spacing={1}>
        <Typography variant="h6">{`페이지를 찾을 수 없어요 :(`}</Typography>
        <NextLink href="/" passHref>
          <Link
            color="primary"
            textAlign="center"
            sx={{
              opacity: 0.9,
              textDecoration: 'none',
              '&:hover': {
                opacity: 1,
                textDecoration: 'underline',
              },
            }}
          >
            홈으로 돌아갑니다
          </Link>
        </NextLink>
      </Stack>
    </Stack>
  );
}
