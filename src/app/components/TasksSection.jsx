import React, { useContext } from "react";
import ComponentTask from "./ComponentTask";
import AppContext from "../context/AppContext";
import ComponentTaskComplet from "./ComponentTaskComplete";

const TasksSection = () => {
  const { tasks, tasksComplete } = useContext(AppContext);

  const total = tasks.length + tasksComplete.length;

  return (
    <section className="flex justify-center pt-16">
      <div className="w-full max-w-[640px] h-full px-3">
        <div className="font-bold flex justify-between">
          <span className="flex items-center gap-1 text-blue">
            Tarefas criadas{" "}
            <span className="w-6 h-6 rounded-full bg-persongray_500 flex items-center justify-center">
              {total}
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
              <ComponentTask text={item.text} />
            </div>
          ))}
          {tasksComplete.map((item) => (
            <div key={item.text}>
              <ComponentTaskComplet text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TasksSection;
