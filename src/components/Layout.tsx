import Header from "./Header";
import SearchPanel from "./SearchPanel";
import { LayoutContainer } from "@/containers/Layout";
import { useEffect } from "react";
import hotkeys from "hotkeys-js";
import styled from "styled-components";
import Head from "next/head";
import { useContainer } from "unstated-next";
import { getAuthInfo } from "@/services/auth";
import theme from "@/theme";

function useSearchPanelListener() {
  const layout = LayoutContainer.useContainer();

  useEffect(() => {
    hotkeys("ctrl+f, command+f", e => {
      e.preventDefault();
      layout.setSearchPanelVisible(true);
    });
    hotkeys("esc", e => {
      if (layout.searchPanelVisible) {
        e.preventDefault();
        layout.setSearchPanelVisible(false);
      }
    });
  });
}

function useAuthInfo() {
  const layout = useContainer(LayoutContainer);
  useEffect(() => {
    getAuthInfo().then(auth => {
      layout.setAuth(auth);
    });
  }, []);
}

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3,
  p {
    margin-bottom: 1rem;
  }
  h3 {
    font-family: ${theme.fontFamily.title};
    color: ${theme.colors.gray[600]};
    @media (prefers-color-scheme: dark) {
      color: rgba(255, 255, 255, 0.75);
    }
  }
  i {
    color: ${theme.colors.gray[600]};
    @media (prefers-color-scheme: dark) {
      color: rgba(255, 255, 255, 0.55);
    }
    font-size: 1.5rem;
  }
  margin-bottom: 2rem;
`;

const Container = styled.div`
  @media (prefers-color-scheme: dark) {
    background: #191b1f;
  }
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout: React.FunctionComponent = props => {
  const layout = LayoutContainer.useContainer();
  useSearchPanelListener();
  useAuthInfo();
  return (
    <Container>
      <Head>
        <meta name="referrer" content="no-referrer" />
        {layout.auth ? (
          [
            <link
              rel="icon"
              href={layout.auth.small_avatar_url}
              key="favicon"
            />,
            <title key="title">{layout.auth.name} - wsq.cool</title>
          ]
        ) : (
          <title>Loading...</title>
        )}
      </Head>
      <Header></Header>
      {layout.searchPanelVisible && <SearchPanel></SearchPanel>}
      {props.children}
      <Footer>
        <h3>&copy; {new Date().getFullYear()} wsq.cool</h3>
        <a
          href="https://github.com/myWsq"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="iconfont icon-github"></i>
        </a>
      </Footer>
    </Container>
  );
};

export default Layout;
