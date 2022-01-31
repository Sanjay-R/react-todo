function Task(props) {
    function deleteHandler() {
        console.log("clicked " + props.title);
    }

    return (
        < div className="task-card">
            <h2 className="task-title">{props.title}</h2>
            <div className="actions">
                <button className="del-btn" onClick={deleteHandler}>Delete</button>
            </div>
        </div >
    );
}

export default Task;