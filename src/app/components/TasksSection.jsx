import React, { useContext } from "react";
import Tasks from "./Tasks";
import AppContext from "../context/appContext";

const TasksSection = () => {
  const { tasks } = useContext(AppContext);

  return (
    <section className="flex justify-center pt-16">
      <div className="w-full max-w-[640px] h-full">
        <div className="font-bold flex justify-between">
          <span className="flex items-center gap-1 text-blue">
            Tarefas criadas{" "}
            <span className="w-6 h-6 rounded-full bg-persongray_500 flex items-center justify-center">
              {tasks.length}
            </span>
          </span>
          <span className="flex items-center gap-1 text-purpleDark">
            Concluídas{" "}
            <span className="w-6 h-6 rounded-full bg-persongray_500 flex items-center justify-center">
              5
            </span>
          </span>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          {tasks.map((item) => (
            <>
              <Tasks text={item.text} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TasksSection;
