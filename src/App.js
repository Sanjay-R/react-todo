import Overlay from './components/Overlay';
import Backdrop from './components/Backdrop';
import Task from './components/Task';

function App() {
  return (
    <div>
      <h1>All Tasks</h1>
      <Task title="first one"/>
      <Task title="task 2"/>
      <Task title="third"/>
      <Overlay/>
      <Backdrop/>
    </div>
  );
}

export default App;
