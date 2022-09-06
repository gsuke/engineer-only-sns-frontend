import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { IconContext } from 'react-icons';
import { useMemo } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const iconContextValue = useMemo(() => ({ className: 'inline align-middle' }), []);

  return (
    <IconContext.Provider value={iconContextValue}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </IconContext.Provider>
  );
}
