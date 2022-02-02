import { useEffect, useState } from 'react';
import raw from '../data/placeholder.txt';
import Task from './Task';

function TaskList(props) {

    function randomId(low = 1, high = 1000000) {
        return Math.floor((Math.random() * high) + low);
    }

    const [data, setData] = useState([]);

    //get all the dummy data from the placeholder text file
    useEffect(() => {
        const fetchData = async () => {
            let something = raw;
            // let anotherFile = '';
            await fetch(something) //something + anotherFile
                .then((response) => response.text())
                .then((result) => {
                    //https://thegermancoder.com/2018/11/29/how-to-parse-csv-with-javascript/
                    let lines = result.split(/(?:\r\n|\n)+/).filter(function (el) { return el.length !== 0 });
                    setData(lines);
                });
        };
        fetchData()
    }, []); //that array u pass is all the states u wanna listen to
    //useEffect will be called each time one of those states changes

    const listItems = data.map((x) => {
        const rando = randomId(); //random number between 1 and a millie
        const item = x.split(", ");
        return <Task key={rando} title={item[0]} task={item[1]} id={item[2]} />
    });

    if(props.passArray !== null) {
        console.log("not null");
    }
    // const listItems2 = props.arr.map((y) => {
    //     const rando2 = randomId();
    //     return <Task key={rando2} title={y.title} task={y.task} id={rando2}/>
    // });

    return (
        <div>
            {listItems}
        </div>
    )
}

export default TaskList;