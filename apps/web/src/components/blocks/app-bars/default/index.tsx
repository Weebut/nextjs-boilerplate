import { useFirebaseUser } from '@hooks/firebase-user';
import { LayoutConfig } from '@libs/config';
import { MaxWidth } from '@libs/material-ui/types';
import { AppBar as MaterialAppBar, Box, Container } from '@mui/material';
import { Link } from 'shared-components';

const appBarHeight = LayoutConfig.appBar.height;
const defaultMaxWidth = LayoutConfig.maxWidth as MaxWidth;

interface AppBarProps {
  maxWidth?: MaxWidth;
}

export default function AppBar({ maxWidth = defaultMaxWidth }: AppBarProps) {
  const { user, isLoading } = useFirebaseUser();

  const isLoggedIn = !!user;

  return (
    <MaterialAppBar position="sticky" elevation={0} color="inherit">
      <Container
        maxWidth={maxWidth}
        sx={{
          top: 0,
          height: appBarHeight,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          px: 5,
        }}
        disableGutters
      >
        <Link href="/" fontWeight="bold" underline="none">
          LOGO
        </Link>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ flexGrow: 0 }}>
          {isLoading ? null : isLoggedIn ? (
            <Link href="/my-page" fontWeight="bold" underline="none">
              {user.email}
            </Link>
          ) : (
            <Link href="/sign-in" fontWeight="bold" underline="none">
              SIGN IN
            </Link>
          )}
        </Box>
      </Container>
    </MaterialAppBar>
  );
}
