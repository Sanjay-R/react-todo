import raw from '../data/placeholder.txt';

function TaskList(props) {

    function fetcher() {
        fetch(raw)
            .then(r => r.text())
            .then(text => {
                console.log('decoded : ' + text);
            });
    }

    return (
        <div>
            <p>list :</p>
            <p>{fetcher}</p>
        </div>
    )
}

export default TaskList;