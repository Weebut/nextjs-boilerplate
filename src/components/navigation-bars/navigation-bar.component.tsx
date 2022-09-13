import { useFirebaseUser } from '@hooks/firebase-user';
import { signOut } from '@libs/utils/auth/sign-out';
import { AppBar, Box, Button, Link, Stack, Toolbar } from '@mui/material';
import NextLink from 'next/link';

export function NavigationBar() {
  const { user } = useFirebaseUser();

  const isLoggedIn = !!user;

  return (
    <AppBar position="static" color="primary">
      <Box px={6}>
        <Toolbar disableGutters>
          <NextLink href="/" passHref>
            <Link fontWeight="bold" color="#fff">
              LOGO
            </Link>
          </NextLink>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn ? (
              <Stack spacing={6} direction="row" alignItems="center">
                <NextLink href="/my-page" passHref>
                  <Link fontWeight="bold" color="#fff" overflow="hidden">
                    My Page
                  </Link>
                </NextLink>

                <Button
                  onClick={() => signOut()}
                  sx={{
                    py: '0.25rem',
                    px: '0.5rem',
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                >
                  SIGN OUT
                </Button>
              </Stack>
            ) : (
              <NextLink href="/sign-in" passHref>
                <Link px={4} fontWeight="bold" color="#fff">
                  SIGN IN
                </Link>
              </NextLink>
            )}
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
