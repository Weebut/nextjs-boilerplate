import store from '@redux/store';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </Provider>
  );
}
