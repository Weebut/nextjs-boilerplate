import { Layout } from '@components/layouts/layout.component';
import { Strip } from '@components/strips/strip.component';
import { AuthProviders } from '@libs/types/auth-providers';
import { Button, TextField } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

interface SignInContainerProps {
  providers: AuthProviders;
}

export function SignInContainer({ providers }: SignInContainerProps) {
  const router = useRouter();

  const query = router.query;

  const callbackUrl = query.callbackUrl as string;

  return (
    <Layout session={null}>
      <Strip>
        <div className="flex flex-col items-center space-y-12 py-32">
          <div className="">
            <span className="text-2xl font-bold">로그인</span>
          </div>
          <form className="flex w-full max-w-[300px] flex-col space-y-6">
            <TextField id="outlined-basic" label="아이디" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="비밀번호"
              variant="outlined"
              type="password"
            />
            <Button variant="contained" className="py-2 text-lg">
              로그인
            </Button>
          </form>
          <div className="flex w-full max-w-[300px] flex-col space-y-6">
            {Object.values(providers).map((provider) => (
              <Button
                key={provider.name}
                variant="contained"
                onClick={() => signIn(provider.id, { callbackUrl })}
                className="p-4"
              >
                Sign in with {provider.name}
              </Button>
            ))}
          </div>
        </div>
      </Strip>
    </Layout>
  );
}
