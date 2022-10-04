import { sendPasswordResetEmail } from '@libs/utils/auth/send-password-reset-email';
import { Button, Stack, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { BaseSyntheticEvent, useState } from 'react';
import { onResetPasswordFail } from './utils';

export default function ResetPasswordForm() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string>('');

  function onEmailChange(event: BaseSyntheticEvent) {
    setEmail(event.target.value);
  }

  async function onSubmit(event: BaseSyntheticEvent) {
    event.preventDefault();
    await handleResetPassword(email);
  }

  async function handleResetPassword(email: string) {
    setIsLoading(true);

    try {
      await sendPasswordResetEmail(email);
      alert(`이메일이 전송되었습니다.\n로그인 화면으로 돌아갑니다.`);
      router.push('/sign-in');
    } catch (error: any) {
      await onResetPasswordFail(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={4}>
        <TextField
          label="이메일"
          value={email}
          onChange={onEmailChange}
          type="email"
          required
          disabled={isLoading}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={isLoading || !email}
        >
          비밀번호 재설정
        </Button>
      </Stack>
    </form>
  );
}
