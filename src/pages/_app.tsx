import { UserProvider } from '@auth0/nextjs-auth0';
import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </UserProvider>
  );
}
