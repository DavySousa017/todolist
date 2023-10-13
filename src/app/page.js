"use client";
import NewTask from "./components/NewTask";
import TasksSection from "./components/TasksSection";
import AppContextProvider from "./context/TaskProvider";

export default function Home() {
  return (
    <main className="min-h-screen bg-persongray">
      <AppContextProvider>
        <NewTask />
        <TasksSection />
      </AppContextProvider>
    </main>
  );
}
