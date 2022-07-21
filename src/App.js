import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div>
      <h1>All Tasks</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;

// Start server + app with "npm run startall" : https://stackoverflow.com/a/47973739