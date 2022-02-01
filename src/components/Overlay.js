function Overlay(props) {

    function closeOverlay() {
        props.onCancel();
    }

    function confirmDelete() {
        props.onConfirm();
    }


    return (
        <div className="overlay">
            <h3>You sure buddy?</h3>
            <button className='btn' onClick={closeOverlay} >Cancel</button>
            <button className="red-btn btn" onClick={confirmDelete}>Confirm</button>
        </div>
    );
}

export default Overlay;