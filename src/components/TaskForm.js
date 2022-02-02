import React, { useState } from "react";

function TaskForm(props) {

    const [title, setTitle] = useState('');
    const [task, setTask] = useState('');

    function setNewTitle(event) {
        setTitle(event.target.value);
    }

    function setNewTask(event) {
        setTask(event.target.value);
    }

    function submitTask(event) {
        // https://youtu.be/pJiRj02PkJQ
        event.preventDefault(); //prevents the page from doing a defualt refresh
        const newTask = { title, task };

        fetch('./data/tempDB.json');

        console.log(newTask);
    }

    return (
        <div>
            <form className="task-card task-form" onSubmit={submitTask}>
                {/* https://youtu.be/IkMND33x0qQ?t=240 */}
                <input
                    type="text"
                    className="input-bar"
                    placeholder="Title"
                    value={title}
                    onChange={setNewTitle}
                    required />
                <input
                    type="text"
                    className="input-bar"
                    placeholder="Add a task"
                    value={task}
                    onChange={setNewTask}
                    required />
                <button className="btn" onClick={submitTask}>Add</button>
            </form>
        </div>
    );
}

export default TaskForm;