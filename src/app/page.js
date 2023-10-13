import NewTask from './components/NewTask'
import TasksSection from './components/TasksSection'

export default function Home() {
  return (
    <main className='min-h-screen bg-persongray'>
      <NewTask/>
      <TasksSection/>
    </main>
  )
}
