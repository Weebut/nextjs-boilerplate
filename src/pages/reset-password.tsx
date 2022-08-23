import { ResetPasswordContainer } from '@containers/reset-password';
import Head from 'next/head';

export default function ResetPasswordPage() {
  return (
    <div>
      <Head>
        <title>비밀번호 재설정 | iN!T</title>
      </Head>
      <ResetPasswordContainer />
    </div>
  );
}
