import React, { useContext } from "react";
import AppContext from "../context/appContext";

const ComponentTaskComplet = (props) => {
  const { tasksComplete, setTasksComplete } = useContext(AppContext);
  var updatedTasks = [];

  const deleteTask = (value) => {
    updatedTasks = tasksComplete.filter((task) => task.value !== value);
    setTasksComplete(updatedTasks);
  };

  return (
    <div className="rounded-2xl w-full bg-persongray_500 p-4 flex flex-row items-center justify-between gap-4">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 48 48"
        >
          <mask id="ipSCorrect0">
            <path
              fill="#fff"
              fillRule="evenodd"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z"
              clipRule="evenodd"
            />
          </mask>
          <path fill="#4ea8de" d="M0 0h48v48H0z" mask="url(#ipSCorrect0)" />
        </svg>
      </button>
      <p className="text-start w-full">{props.text.value}</p>
      <button onClick={() => deleteTask(props.text.value)} type="button">
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

export default ComponentTaskComplet;
