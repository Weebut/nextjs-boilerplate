import { Layout } from '@components/layouts/layout.component';
import store from '@redux/store';
import '@styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <CookiesProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CookiesProvider>
      </Provider>
    </SessionProvider>
  );
}
