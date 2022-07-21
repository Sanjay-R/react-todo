import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {

  const [update, setUpdate] = useState(true)

  const toggleUpdate = () => {
    setUpdate(v => !v)
  }

  return (
    <div>
      <h1>All Tasks</h1>
      <TaskForm onUpdate={toggleUpdate}/>
      <TaskList update={update}/>
    </div>
  );
}

export default App;

// Start server + app with "npm run startall" : https://stackoverflow.com/a/47973739