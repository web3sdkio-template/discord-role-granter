import type { AppProps } from "next/app";
import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";
import { SessionProvider } from "next-auth/react";
import Web3sdkioGuideFooter from "../components/Web3sdkioGuideFooter";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdkioProvider desiredChainId={activeChainId}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
        <Web3sdkioGuideFooter />
      </SessionProvider>
    </Web3sdkioProvider>
  );
}

export default MyApp;
