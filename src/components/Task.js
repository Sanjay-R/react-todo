import { useState } from 'react'; //cz its a 3rd party library 
import Backdrop from './Backdrop';
import Overlay from './Overlay';

function Task(props) {

    const [overlayOpen, setOverlayOpen] = useState(false); //https://reactjs.org/docs/hooks-state.html

    function openOverlayState() {
        console.log("clicked " + props.title);
        setOverlayOpen(true);
    }

    function closeOverlayState() {
        console.log("closed overlay");
        setOverlayOpen(false);
    }
    
    async function deleteTask() {
        //https://youtu.be/EcRFYF4B3IQ
        //https://youtu.be/Wb-0CkLiyQk
        await fetch('http://localhost:8000/all_tasks/' + props.id, {
            method: 'DELETE'
        })
            .then((response) => {
                if(response.status === 404) {
                    throw Error('Id not available for placeholder task')
                }
                closeOverlayState()
                console.log("Task Deleted!")
                return window.location.reload(); //to refresh page and get new tasks
            })
            .catch(err => console.log(err))

    }

    return (
        < div className="task-card">
            <h2 className="task-title">{props.title}</h2>
            <p>{props.task}</p>
            <div className="actions">
                {/* NEED to use 'onClick' for <button> cz its not custom component, but a built-in one */}
                <button className="red-btn btn" onClick={openOverlayState}>Delete</button>
            </div>
            {overlayOpen ? <Overlay onCancel={closeOverlayState} onConfirm={deleteTask} /> : null}
            {overlayOpen ? <Backdrop onCancel={closeOverlayState} /> : null}
            {/* my component (custom) so I can name it 'onClick', 'onCancel' or whatever I want */}
        </div >
    );
}

export default Task;