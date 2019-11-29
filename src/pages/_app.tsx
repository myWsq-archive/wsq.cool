import App from "next/app";
import "@/style.css";

import React from "react";
import { LayoutContainer } from "@/containers/Layout";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <LayoutContainer.Provider>
        <Component {...pageProps} />
      </LayoutContainer.Provider>
    );
  }
}

export default MyApp;
