import Link from '@components/link.component';
import { useFirebaseUser } from '@hooks/firebase-user';
import { signOut } from '@libs/utils/auth/sign-out';
import {
  AppBar,
  Box,
  Button,
  Container,
  NoSsr,
  Slide,
  Stack,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { ReactElement } from 'react';

interface HideOnScrollProps {
  children: ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger({
    target: window,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const navigationBarHeight = 64;

export function NavigationBar() {
  const { user } = useFirebaseUser();

  const isLoggedIn = !!user;

  return (
    <NoSsr>
      <HideOnScroll>
        <AppBar
          color="primary"
          position="fixed"
          elevation={0}
          sx={{
            boxShadow: '0 1px 3px 0 rgb(0 0 0/0.1)',
          }}
        >
          <Container
            sx={{
              height: navigationBarHeight,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {/* Logo and Menu */}
            <Stack
              spacing={6}
              direction="row"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                flexGrow: 1,
              }}
            >
              {/* Logo */}
              <Link
                href="/"
                sx={{
                  opacity: 1,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                LOGO
              </Link>

              {/* Menu */}
              <Stack spacing={3} direction="row" color="white">
                <Link href="/my-page">
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      color: 'white',
                    }}
                  >
                    My Page
                  </Typography>
                </Link>
                <Link href="/movies">
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      color: 'white',
                    }}
                  >
                    Movies
                  </Typography>
                </Link>
                <Link href="/file-upload">
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      color: 'white',
                    }}
                  >
                    File Upload
                  </Typography>
                </Link>
              </Stack>
            </Stack>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ flexGrow: 0 }}>
              {isLoggedIn ? (
                <Stack spacing={6} direction="row" alignItems="center">
                  <Button
                    onClick={() => signOut()}
                    sx={{
                      py: '0.25rem',
                      px: '0.5rem',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      color: '#fff',
                    }}
                  >
                    SIGN OUT
                  </Button>
                </Stack>
              ) : (
                <Link href="/sign-in">
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      color: 'white',
                    }}
                  >
                    SIGN IN
                  </Typography>
                </Link>
              )}
            </Box>
          </Container>
        </AppBar>
      </HideOnScroll>
    </NoSsr>
  );
}
