import { UserProfile, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import React from 'react';
import { HomeContainer } from '../containers/home';

export default function HomePage({ user }: { user: UserProfile }) {
  return (
    <div>
      <Head>
        <title>Hello Auth0</title>
      </Head>
      <HomeContainer user={user} />
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
