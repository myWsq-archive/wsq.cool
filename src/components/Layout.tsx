import Header from "./Header";
import SearchPanel from "./SearchPanel";
import { LayoutContainer } from "@/containers/Layout";
import { useEffect } from "react";
import hotkeys from "hotkeys-js";
import styled from "styled-components";
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
  return (
    <Container>
      <Header></Header>
      {layout.searchPanelVisible && <SearchPanel></SearchPanel>}
      {props.children}
    </Container>
  );
};

export default Layout;
