import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

export const emotionInsertionPointName = 'emotion-insertion-point';
export const emotionCacheKey = 'mui-style';

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export default function createEmotionCache() {
  let insertionPoint: HTMLElement | undefined;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector(
      `meta[name="${emotionInsertionPointName}"]`,
    );
    insertionPoint = (emotionInsertionPoint as HTMLElement) ?? undefined;
  }

  return createCache({ key: emotionCacheKey, insertionPoint });
}
