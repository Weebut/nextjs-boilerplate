import store from '@redux/store';
import '@styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';
import { Provider as ReduxProvider } from 'react-redux';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>
        <CookiesProvider>
          <Component {...pageProps} />
        </CookiesProvider>
      </ReduxProvider>
    </SessionProvider>
  );
}
