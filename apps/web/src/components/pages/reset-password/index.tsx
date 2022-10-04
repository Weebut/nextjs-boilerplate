import ResetPasswordForm from '@components/blocks/forms/reset-password';
import Strip from '@components/blocks/strips/default';
import MainTemplate from '@components/blocks/templates/default';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'shared-components';

export default function ResetPassword() {
  return (
    <MainTemplate>
      <Strip>
        <Stack spacing={4} display="flex" flexDirection="column" width="100%">
          <Box display="flex" justifyContent="center" py={12}>
            <Typography variant="h4" fontWeight="bold">
              비밀번호 재설정
            </Typography>
          </Box>

          {/* Reset password */}
          <ResetPasswordForm />

          <Box display="flex" width="100%" justifyContent="end">
            <Link href="/sign-in">계정이 있으신가요?</Link>
          </Box>
        </Stack>
      </Strip>
    </MainTemplate>
  );
}
