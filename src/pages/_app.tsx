import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@libs/material-ui/create-emotion-cache';
import theme from '@libs/material-ui/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import store from '@redux/store';
import '@styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CookiesProvider } from 'react-cookie';
import { Provider as ReduxProvider } from 'react-redux';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface AppPropsExtended extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}: AppPropsExtended) {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>
        <CookiesProvider>
          <CacheProvider value={emotionCache}>
            <Head>
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
            </Head>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </CacheProvider>
        </CookiesProvider>
      </ReduxProvider>
    </SessionProvider>
  );
}
