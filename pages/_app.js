import '../styles/global.scss'

import * as smoothscroll from 'smoothscroll-polyfill';

if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}