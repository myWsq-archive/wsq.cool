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
          <script
            dangerouslySetInnerHTML={{
              __html: `
                var _hmt = _hmt || [];
                (function() {
                  var hm = document.createElement("script");
                  hm.src = "https://hm.baidu.com/hm.js?c884cddaacc7844157e6b4b9614518d0";
                  var s = document.getElementsByTagName("script")[0];
                  s.parentNode.insertBefore(hm, s);
                })();`
            }}
          ></script>
        </Head>
        <Component {...pageProps} />
      </LayoutContainer.Provider>
    );
  }
}

export default MyApp;
