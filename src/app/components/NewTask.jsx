"use client";
import React, { useContext, useState } from "react";
import AppContext from "app/context/AppContext.js";

const NewTask = () => {
  const [searchValue, setSearchValue] = useState("");
  const { tasks, setTasks, tasksComplete } = useContext(AppContext);

  const data = { text: searchValue };

  const Submit = (e) => {
    e.preventDefault();

    const taskExists = tasks.find((task) => task.text === data.text);
    const taskCompleteExists = tasksComplete.find(
      (task) => task.text === data.text
    );

    if (!taskExists && !taskCompleteExists) {
      setTasks([...tasks, data]);
      setSearchValue("");
    } else alert("Tarefa já existe");
  };

  return (
    <div className="bg-personblack h-[150px] w-full flex justify-center items-center relative">
      <div className="flex items-center text-3xl font-black">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3rem"
            viewBox="0 0 16 16"
          >
            <g
              fill="none"
              stroke="#4ea8de"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="m4.25 9.75l-2-.5s0-1.5.5-3s4-1.5 4-1.5m-.5 7l.5 2s1.5 0 3-.5s1.5-4 1.5-4m-7 .5l2 2s5-2 6.5-4.5s1.5-5.5 1.5-5.5s-3 0-5.5 1.5s-4.5 6.5-4.5 6.5z" />
              <path fill="#4ea8de" d="m1.75 14.25l2-1l-1-1z" />
              <circle cx="10.25" cy="5.75" r=".5" fill="#4ea8de" />
            </g>
          </svg>
        </span>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-purpleDark">
          todo
        </h1>
      </div>
      <form
        onSubmit={Submit}
        className="flex items-center justify-center gap-2 absolute -bottom-[30px] h-14 w-full px-3"
      >
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          required
          className="px-4 h-full w-full max-w-[640px] rounded-lg bg-persongray_500 border border-personblack outline-none focus:border-blue duration-300"
        />
        <button
          type="submit"
          className="w-[90px] h-full bg-blue font-bold rounded-lg flex items-center justify-center gap-1 p-2"
        >
          Criar
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 32 32"
            >
              <path
                fill="white"
                d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3zm0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5zm-1 5v5h-5v2h5v5h2v-5h5v-2h-5v-5h-2z"
              />
            </svg>
          </span>
        </button>
      </form>
    </div>
  );
};

export default NewTask;
