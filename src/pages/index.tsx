import { UserProfile, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import React from 'react';
import { HomeTemplate } from '../templates/home.template';

export default function Home({ user }: { user: UserProfile }) {
  return (
    <div>
      <Head>
        <title>Hello Auth0</title>
      </Head>
      <HomeTemplate user={user} />
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
