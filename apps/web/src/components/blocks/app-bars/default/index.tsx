import AccountButton from '@components/atoms/buttons/account';
import NotificationButton from '@components/atoms/buttons/notification';
import { useFirebaseUser } from '@hooks/firebase-user';
import { LayoutConfig } from '@libs/config';
import { MaxWidth } from '@libs/material-ui/types';
import { AppBar as MaterialAppBar, Box, Container } from '@mui/material';
import { Link, LinkButton } from 'shared-components';

const appBarHeight = LayoutConfig.appBar.height;
const defaultMaxWidth = LayoutConfig.maxWidth as MaxWidth;

interface AppBarProps {
  maxWidth?: MaxWidth;
}

export default function AppBar({ maxWidth = defaultMaxWidth }: AppBarProps) {
  const { user, isLoading } = useFirebaseUser();

  const isLoggedIn = !!user;
  const hasNewNotifications = true;

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

        {/* Inbox */}
        <Link href="/inbox">
          <NotificationButton hasNew={hasNewNotifications} />
        </Link>

        {/* Account */}
        {isLoading ? (
          <Box width={40} height={40} />
        ) : isLoggedIn ? (
          <Link href="/my-page" underline="none">
            <AccountButton />
          </Link>
        ) : (
          <LinkButton
            href="/sign-in"
            buttonProps={{ sx: { fontWeight: 'medium' } }}
          >
            SIGN IN
          </LinkButton>
        )}
      </Container>
    </MaterialAppBar>
  );
}
