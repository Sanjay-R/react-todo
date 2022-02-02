import { useEffect, useState } from 'react';
import raw from '../data/placeholder.txt';
import Task from './Task';

function TaskList() {

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

    // data.forEach((d) => {
    //     console.log(d.split(", "));
    // });

    const listItems = data.map((x) => {
        const rando = Math.floor((Math.random() * 1000000) + 1); //random number between 1 and a millie
        const item = x.split(", ");
        return <Task key={rando} title={item[0]} task={item[1]} id={item[2]}/>
    });

    return (
        <div>
            {listItems}
        </div>
    )
}

export default TaskList;