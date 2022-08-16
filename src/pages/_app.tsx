import store from '@redux/store';
import '@styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'src/providers/theme-provider';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>
        <CookiesProvider>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </CookiesProvider>
      </ReduxProvider>
    </SessionProvider>
  );
}
