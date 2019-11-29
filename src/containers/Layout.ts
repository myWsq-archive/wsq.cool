import { useState } from "react";
import { createContainer } from "unstated-next";

function useLayout() {
  const [searchPanelVisible, setSearchPanelVisible] = useState(false);
  return {
    searchPanelVisible,
    setSearchPanelVisible
  };
}

export const LayoutContainer = createContainer(useLayout);
