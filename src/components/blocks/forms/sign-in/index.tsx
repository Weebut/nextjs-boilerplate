import { useAppDispatch } from '@ducks/hooks';
import { actions } from '@ducks/reducers/firebase-auth';
import { signIn } from '@libs/utils/auth/sign-in';
import { FormControl } from '@mui/material';
import { Button, Stack, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { BaseSyntheticEvent, useState } from 'react';
import { onSignInFail } from './utils';

export default function SignInForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleSignIn(email: string, password: string) {
    dispatch(actions.makeLoading());

    setIsLoading(true);

    try {
      await signIn(email, password);
      router.push('/');
    } catch (error: any) {
      await onSignInFail(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={(event: BaseSyntheticEvent) => {
        event.preventDefault();
        handleSignIn(email, password);
      }}
    >
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
        <Button
          disabled={isLoading || !(email && password)}
          fullWidth
          variant="contained"
          type="submit"
        >
          로그인
        </Button>
      </Stack>
    </form>
  );
}
