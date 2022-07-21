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

    //https://youtu.be/V_Kr9OSfDeU?t=224
    async function postTask() {

        const newTask = { title, task };

        //https://youtu.be/EcRFYF4B3IQ
        await fetch('http://localhost:8000/all_tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(() => {
                console.log("New Task added!")
                props.onUpdate();
                // return window.location.reload(); //to refresh page and get new tasks
            })
            .catch(err => console.log(err))

    }

    function submitTask(event) {

        // https://youtu.be/pJiRj02PkJQ
        event.preventDefault(); //prevents the page from doing a defualt refresh

        if (title.trim() !== "" && task.trim() !== "") {

            postTask()

            //https://stackoverflow.com/a/18060563
            // let jason = require('../data/tempDB.json').all_tasks;
            // console.log('push')
            // jason.push({...newTask, "id": jason.length+1}); //https://stackoverflow.com/a/52807852

            setTask('')
            setTitle('')

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