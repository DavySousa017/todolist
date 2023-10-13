import React, { useState } from "react";
import AppContext from "./appContext";

const AppContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const value = {
    tasks,
    setTasks,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
