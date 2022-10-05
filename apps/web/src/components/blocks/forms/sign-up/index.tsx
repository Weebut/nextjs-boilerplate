import { signUp } from '@libs/utils/auth/sign-up';
import { Button, Stack, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { BaseSyntheticEvent, useState } from 'react';
import { onSignUpFail } from './utils';

export default function SignUpForm() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [retyped, setRetyped] = useState<string>('');

  function onSubmit(event: BaseSyntheticEvent) {
    event.preventDefault();
    handleSignUp(email, password);
  }

  async function handleSignUp(email: string, password: string) {
    setIsLoading(true);

    try {
      await signUp(email, password);
      alert('회원가입이 완료되었습니다.');
      router.push('/');
    } catch (err: any) {
      await onSignUpFail(err);
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
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          disabled={isLoading}
        />
        <TextField
          label="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          disabled={isLoading}
        />
        <TextField
          label="비밀번호 재입력"
          value={retyped}
          onChange={(e) => setRetyped(e.target.value)}
          type="password"
          required
          disabled={isLoading}
        />
        <Button
          disabled={isLoading || !(email && password) || password !== retyped}
          fullWidth
          variant="contained"
          type="submit"
        >
          회원가입
        </Button>
      </Stack>
    </form>
  );
}
