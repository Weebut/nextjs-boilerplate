import { Layout } from '@components/layouts/layout.component';
import { Strip } from '@components/strips/strip.component';
import { Button, TextField } from '@mui/material';

export function SignInContainer() {
  function signIn() {
    // TODO
  }

  return (
    <Layout>
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
        </div>
      </Strip>
    </Layout>
  );
}
