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
      <TaskList update={update} setUpdate={toggleUpdate}/>
      {/* https://www.reddit.com/r/reactjs/comments/u5ol8w/comment/i5360o5/?utm_source=share&utm_medium=web2x&context=3 
      https://beta.reactjs.org/learn/sharing-state-between-components#lifting-state-up-by-example */}
    </div>
  );
}

export default App;

// Start server + app with "npm run startall" : https://stackoverflow.com/a/47973739