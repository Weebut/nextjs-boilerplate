import Strip from '@components/blocks/strips/default';
import MainTemplate from '@components/blocks/templates/default';
import { useFirebaseUser } from '@hooks/firebase-user';
import { signOut } from '@libs/utils/auth/sign-out';
import { Box, Button, Typography } from '@mui/material';

export default function MyPage() {
  const { user } = useFirebaseUser();

  const name = user?.email.split('@')[0];

  return (
    <MainTemplate>
      <Strip>
        <Box display="flex" flexDirection="column" height="100%" width="100%">
          <Box>
            <Typography variant="h5" fontWeight="bold">
              {name} 님,
            </Typography>
            <Typography variant="h5">안녕하세요</Typography>
          </Box>
        </Box>
      </Strip>
      <Strip pt={6}>
        <Button onClick={signOut}>로그아웃</Button>
      </Strip>
    </MainTemplate>
  );
}
