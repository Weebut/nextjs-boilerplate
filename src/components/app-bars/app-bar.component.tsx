import Link from '@components/link.component';
import { useFirebaseUser } from '@hooks/firebase-user';
import { signOut } from '@libs/utils/auth/sign-out';
import {
  AppBar as MaterialAppBar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from '@mui/material';

export const navigationBarHeight = 64;

export default function AppBar() {
  const { user } = useFirebaseUser();

  const isLoggedIn = !!user;

  return (
    <MaterialAppBar variant="outlined" color="inherit" elevation={0}>
      <Container
        sx={{
          top: 0,
          color: 'black',
          height: navigationBarHeight,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          px: 5,
        }}
        disableGutters
      >
        {/* Logo */}
        <Link
          href="/"
          sx={{
            opacity: 1,
            fontWeight: 'bold',
          }}
        >
          LOGO
        </Link>

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
                }}
              >
                SIGN IN
              </Typography>
            </Link>
          )}
        </Box>
      </Container>
    </MaterialAppBar>
  );
}
