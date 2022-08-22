import { AppBar, Box, Button, Link, Toolbar } from '@mui/material';
import { Session } from 'next-auth';
import NextLink from 'next/link';

interface NavigationBarProps {
  session: Session | null;
  signIn: () => void;
  signOut: () => void;
}

export function NavigationBar({
  session,
  signIn,
  signOut,
}: NavigationBarProps) {
  const user = session?.user;
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
                  <Link className="font-bold text-white">{user.name}</Link>
                </NextLink>
                <Button
                  onClick={() => signOut()}
                  className="rounded bg-black py-2 px-4 text-white dark:bg-white dark:text-black"
                >
                  Sign out
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => signIn()}
                className="rounded bg-black py-2 px-4 text-white dark:bg-white dark:text-black"
              >
                Sign in
              </Button>
            )}
          </Box>
        </Toolbar>
      </div>
    </AppBar>
  );
}
