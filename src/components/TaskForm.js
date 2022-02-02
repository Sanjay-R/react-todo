import React, { useState } from "react";

function TaskForm(props) {

    const [input, setInput] = useState('');

    return (
        <div>
            <form className="task-card task-form">
                <input type="text" className="input-bar" placeholder="Title" value={input} />
                <input type="text" className="input-bar" placeholder="Add a task" value={input} />
                <button className="btn">Add</button>
            </form>
        </div>
    );
}

export default TaskForm;