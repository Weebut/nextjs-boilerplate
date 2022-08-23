import { useFirebaseUser } from '@hooks/firebase-user';
import { signOut } from '@libs/utils/auth/sign-out';
import { AppBar, Box, Button, Link, Toolbar } from '@mui/material';
import NextLink from 'next/link';

export function NavigationBar() {
  const { user } = useFirebaseUser();

  const isLoggedIn = !!user;

  return (
    <AppBar position="static" color="primary">
      <div className="px-6">
        <Toolbar disableGutters>
          <NextLink href="/" passHref>
            <Link className="font-bold text-white">LOGO</Link>
          </NextLink>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <NextLink href="/my-page" passHref>
                  <Link className="font-bold text-white">{user.email}</Link>
                </NextLink>
                <Button
                  onClick={() => signOut()}
                  className="rounded bg-black py-2 px-4 text-white dark:bg-white dark:text-black"
                >
                  Sign out
                </Button>
              </div>
            ) : (
              <NextLink href="/sign-in" passHref>
                <Link className="rounded bg-black py-2 px-4 text-white dark:bg-white dark:text-black">
                  Sign in
                </Link>
              </NextLink>
            )}
          </Box>
        </Toolbar>
      </div>
    </AppBar>
  );
}
