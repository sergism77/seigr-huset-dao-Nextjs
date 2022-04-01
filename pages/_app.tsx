import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navigation } from "../components/Navigation"
import { ThirdwebProvider } from '@thirdweb-dev/react';

function MyApp({ Component, pageProps }: AppProps) {
  const desiredChainId = 137;

  /**
   * Make sure that your app is wrapped with these contexts.
   * If you're using React, you'll have to replace the Component setup with {children}
   */
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <Navigation />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
