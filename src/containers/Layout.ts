import { useState } from "react";
import { createContainer } from "unstated-next";
import * as bodyScrollLock from "body-scroll-lock";
import { Auth } from "@/services/auth";

function useLayout() {
  const [searchPanelVisible, setSearchPanelVisibleOrigin] = useState(false);
  const [auth, setAuth] = useState<Auth | null>(null);
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
    setSearchPanelVisible,
    auth,
    setAuth
  };
}

export const LayoutContainer = createContainer(useLayout);
