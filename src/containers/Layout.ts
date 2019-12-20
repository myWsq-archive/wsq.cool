import { useState } from "react";
import { createContainer } from "unstated-next";
import * as bodyScrollLock from "body-scroll-lock";

function useLayout() {
  const [searchPanelVisible, setSearchPanelVisibleOrigin] = useState(false);
  function setSearchPanelVisible(value: boolean) {
    if (value) {
      bodyScrollLock.disableBodyScroll(document.body);
    } else {
      bodyScrollLock.enableBodyScroll(document.body);
    }
    setSearchPanelVisibleOrigin(value);
  }
  return {
    searchPanelVisible,
    setSearchPanelVisible
  };
}

export const LayoutContainer = createContainer(useLayout);
