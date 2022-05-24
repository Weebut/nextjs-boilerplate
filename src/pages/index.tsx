import { UserProfile, useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    (user && (
      <div>
        {user.picture && <Image src={user.picture} alt="Profile Image" width={30} height={30} />}
        <h2>{user.nickname}</h2>
        <p>{user.email}</p>
      </div>
    )) ??
    null
  );
}

export default function Home({ user }: { user: UserProfile }) {
  return (
    <div>
      <Head>
        <title>Hello Auth0</title>
      </Head>

      <main>
        <Profile />
        {user ? <Link href="/api/auth/logout">Logout</Link> : <Link href="/api/auth/login">Login</Link>}
        <div>
          <div>APIs</div>
          <Link href="/api/public" passHref>
            <a target={'_blank'}>
              <div>Public</div>
            </a>
          </Link>
          <Link href="/api/protected" passHref>
            <a target={'_blank'}>
              <div>Protected</div>
            </a>
          </Link>
          <Link href="/api/protected-scope" passHref>
            <a target={'_blank'}>
              <div>Protected, need authorization</div>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
