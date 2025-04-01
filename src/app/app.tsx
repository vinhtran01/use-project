import React, { createContext } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";
import useAppStore from "@/store/store";
const AppContext = createContext(useAppStore);
const App = () => {
  return (
    <AppContext.Provider value={useAppStore}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
};

export default App;
