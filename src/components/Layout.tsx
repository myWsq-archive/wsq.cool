import Header from "./Header";
import SearchPanel from "./SearchPanel";
import { LayoutContainer } from "@/containers/Layout";
import { useEffect } from "react";
import hotkeys from "hotkeys-js";

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

const Layout: React.FunctionComponent = props => {
  const layout = LayoutContainer.useContainer();
  useSearchPanelListener();
  return (
    <div>
      <Header></Header>
      {layout.searchPanelVisible && <SearchPanel></SearchPanel>}
      {props.children}
    </div>
  );
};

export default Layout;
