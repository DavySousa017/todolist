import React, { useContext } from "react";
import AppContext from "../context/appContext";

const Tasks = (props) => {
  const { tasks, setTasks } = useContext(AppContext);
  var updatedTasks = [];

  const deleteTask = (text) => {
    updatedTasks = tasks.filter((task) => task.text !== text);
    setTasks(updatedTasks);
  };

  return (
    <div className="rounded-2xl w-full bg-persongray_500 p-4 flex flex-row items-center justify-between gap-4">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#4ea8de"
            d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
          />
        </svg>
      </button>
      <p className="text-start w-full">{props.text}</p>
      <button onClick={() => deleteTask(props.text)} type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M216 48h-36V36a28 28 0 0 0-28-28h-48a28 28 0 0 0-28 28v12H40a12 12 0 0 0 0 24h4v136a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V72h4a12 12 0 0 0 0-24ZM100 36a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v12h-56Zm88 168H68V72h120Zm-72-100v64a12 12 0 0 1-24 0v-64a12 12 0 0 1 24 0Zm48 0v64a12 12 0 0 1-24 0v-64a12 12 0 0 1 24 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Tasks;
