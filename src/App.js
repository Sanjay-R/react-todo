import Task from './components/Task';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div>
      <h1>All Tasks</h1>
      <TaskForm />
      <TaskList />
      <Task title="first one" />
      <Task title="task 2" />
      <Task title="third" />
    </div>
  );
}

export default App;
