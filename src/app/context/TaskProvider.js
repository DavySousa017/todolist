import React, { useState } from "react";
import AppContext from "app/context/AppContext.js";

const AppContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [tasksComplete, setTasksComplete] = useState([]);

  const value = {
    tasks,
    setTasks,
    tasksComplete,
    setTasksComplete,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
