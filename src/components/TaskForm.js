import React, { useState } from "react";
import TaskList from "./TaskList";

function TaskForm() {

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

        if (title.trim() !== "" && task.trim() !== "") {

            const newTask = { title, task };

            //https://stackoverflow.com/a/18060563
            var jason = require('../data/tempDB.json').all_tasks;
            console.log(jason);
            console.log('push')
            jason.push({...newTask, "id": jason.length+1}); //https://stackoverflow.com/a/52807852

            let arr = []
            arr = jason;
            console.log("jason array -> " , arr);
            // fetch('../data/tempDB.json', {
            //     headers: {
            //         'Content-type': 'application/json',
            //         'Accept': 'application/json'
            //     }
            // })
            //     .then(response => {
            //         return response.json();
            //     })
            //     .then(data => console.log(data))
            //     .catch(err => {
            //         console.log("error mfs ", err)
            //     })

            <TaskList passArray={arr}></TaskList>
        }
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