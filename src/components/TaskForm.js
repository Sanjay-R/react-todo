import React, { useState } from "react";

function TaskForm(props) {

    const [input, setInput] = useState('');

    return (
        <div>
            <form>
                <input type="text" placeholder="Add a task" value={input} />
                <button className="btn">Add</button>
            </form>
        </div>
    );
}

export default TaskForm;