import React from "react";

const NewTask = () => {
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
      <div className="flex items-center justify-center absolute -bottom-[30px] w-full px-3">
        <input
          type="text"
          className="p-4 h-14 w-full max-w-[640px] rounded-lg bg-persongray_500 border border-personblack outline-none focus:border-blue duration-300"
        />
      </div>
    </div>
  );
};

export default NewTask;
