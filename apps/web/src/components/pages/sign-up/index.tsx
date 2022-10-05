import SignUpForm from '@components/blocks/forms/sign-up';
import Strip from '@components/blocks/strips/default';
import MainTemplate from '@components/blocks/templates/default';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'shared-components';

export default function SignUp() {
  return (
    <MainTemplate>
      <Strip>
        <Stack spacing={4} display="flex" flexDirection="column" width="100%">
          <Box display="flex" justifyContent="center" py={12}>
            <Typography variant="h4" fontWeight="bold">
              회원가입
            </Typography>
          </Box>

          {/* Sign up with email */}
          <SignUpForm />

          <Box display="flex" width="100%" justifyContent="end">
            <Link href="/sign-in">계정이 있으신가요?</Link>
          </Box>
        </Stack>
      </Strip>
    </MainTemplate>
  );
}
