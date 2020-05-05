import App from "next/app";
import "@/style.css";
import React from "react";
import { LayoutContainer } from "@/containers/Layout";
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <LayoutContainer.Provider>
        <Head>
          <script src="/baidu-stat.js"></script>
        </Head>
        <Component {...pageProps} />
      </LayoutContainer.Provider>
    );
  }
}

export default MyApp;
