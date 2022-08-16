import { SignInContainer } from '@containers/sign-in';
import { BuiltInProviderType } from 'next-auth/providers';
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
} from 'next-auth/react';
import Head from 'next/head';

interface SignInPageProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
}

export default function SignInPage({ providers }: SignInPageProps) {
  return (
    <div>
      <Head>
        <title>Sign In</title>
      </Head>
      <SignInContainer providers={providers} />
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
