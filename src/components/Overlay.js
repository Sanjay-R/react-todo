function Overlay(props) {

    function closeOverlay() {
        props.onCancel();
    }

    function confirmDelete() {
        props.onConfirm();
    }


    return (
        <div className="overlay">
            <h3>Confirm if the task has been completed</h3>
            <button className='btn' onClick={closeOverlay} >Cancel</button>
            <button className="red-btn btn" onClick={confirmDelete}>Delete</button>
        </div>
    );
}

export default Overlay;