import React, { useState } from "react";
import { AppContext } from "./context/AppContext";

const AppProvider = ({ children }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen);
  return (
    <AppContext.Provider value={{ drawerIsOpen, toggleDrawer }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
