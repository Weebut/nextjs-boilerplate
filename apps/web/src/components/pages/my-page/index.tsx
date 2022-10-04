import Strip from '@components/blocks/strips/default';
import MainTemplate from '@components/blocks/templates/default';
import { useFirebaseUser } from '@hooks/firebase-user';
import { signOut } from '@libs/utils/auth/sign-out';
import { Box, Button, Typography } from '@mui/material';

export default function MyPage() {
  const { user } = useFirebaseUser();

  return (
    <MainTemplate>
      <Strip>
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          width="100%"
          py={12}
        >
          <Box>
            <Typography variant="h5">안녕하세요,</Typography>
            <Typography variant="h5" fontWeight="bold">
              {user?.email} 님
            </Typography>
            <Button onClick={signOut}>로그아웃</Button>
          </Box>
        </Box>
      </Strip>
    </MainTemplate>
  );
}
