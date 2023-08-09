import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import Footer from "../components/footer";
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>zir</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className="w-screen flex flex-col font-inter">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default MyApp;
