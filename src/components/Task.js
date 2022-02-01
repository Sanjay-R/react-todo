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

    return (
        < div className="task-card">
            <h2 className="task-title">{props.title}</h2>
            <div className="actions">
                {/* NEED to use 'onClick' for <button> cz its not custom component, but a built-in one */}
                <button className="red-btn btn" onClick={openOverlayState}>Delete</button>
            </div>
            {overlayOpen ? <Overlay onCancel={closeOverlayState} onConfirm={closeOverlayState} /> : null}
            {overlayOpen ? <Backdrop onCancel={closeOverlayState} /> : null}
            {/* my component (custom) so I can name it 'onClick', 'onCancel' or whatever I want */}
        </div >
    );
}

export default Task;