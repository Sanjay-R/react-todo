import {useState} from 'react'; //cz its a 3rd party library 
import Backdrop from './Backdrop';
import Overlay from './Overlay';

function Task(props) {

    const [overlayOpen, setOverlayOpen] = useState(false); //https://reactjs.org/docs/hooks-state.html

    function changeOverlayState() {
        console.log("clicked " + props.title);
        setOverlayOpen(!overlayOpen);
    }

    return (
        < div className="task-card">
            <h2 className="task-title">{props.title}</h2>
            <div className="actions">
                <button className="red-btn btn" onClick={changeOverlayState}>Delete</button>
            </div>
            { overlayOpen ? <Overlay /> : null}
            { overlayOpen ? <Backdrop /> : null}
        </div >
    );
}

export default Task;