import { createContext, useContext } from "react";

const APP_CONTEXT_DEFAULT_VALUE = {
  drawerIsOpen: false,
  toggleDrawer: () => {},
};

export const AppContext = createContext(APP_CONTEXT_DEFAULT_VALUE);
export const useAppContext = () => useContext(AppContext);
