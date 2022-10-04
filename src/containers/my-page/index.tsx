import Layout from '@components/layouts/layout.component';
import Strip from '@components/strips/strip.component';
import { useFirebaseUser } from '@hooks/firebase-user';
import { Box, Typography } from '@mui/material';

export default function MyPageContainer() {
  const { user } = useFirebaseUser();

  return (
    <Layout pt={40} pb={60}>
      <Strip>
        <Box
          display="flex"
          height="100%"
          width="100%"
          flexDirection="column"
          py={12}
        >
          <Box width="100%" display="flex" flexWrap="wrap">
            <Typography variant="h5">안녕하세요,&nbsp;</Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace={'nowrap'}
            >
              {user?.email.split('@')[0]} 님
            </Typography>
          </Box>
        </Box>
      </Strip>
    </Layout>
  );
}
