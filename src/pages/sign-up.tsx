import { SignUpContainer } from '@containers/sign-up';
import Head from 'next/head';

export default function SignUpPage() {
  return (
    <div>
      <Head>
        <title>회원가입 | iN!T</title>
      </Head>
      <SignUpContainer />
    </div>
  );
}
