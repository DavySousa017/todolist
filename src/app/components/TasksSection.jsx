import React, { useContext } from "react";
import Tasks from "./Tasks";
import ComponentTaskComplet from "./ComponentTaskComplete";
import AppContext from "../context/appContext";

const TasksSection = () => {
  const { tasks, tasksComplete } = useContext(AppContext);

  return (
    <section className="flex justify-center pt-16">
      <div className="w-full max-w-[640px] h-full px-3">
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
              {tasksComplete.length}
            </span>
          </span>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          {tasks.map((item) => (
            <div key={item.text}>
              <Tasks text={item.text} />
            </div>
          ))}
          {tasksComplete.map((item) => (
            <div key={item.value}>
              <ComponentTaskComplet text={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TasksSection;
