import { useEffect, useState } from 'react';
import raw from '../data/placeholder.txt';

function TaskList() {

    const [data, setData] = useState([]);

    //get all the dummy data from the form
    useEffect(() => {
        const fetchData = async () => {
            let something = raw;
            // let anotherFile = '';
            await fetch(something)
                .then((response) => response.text())
                .then((result) => {
                    //https://thegermancoder.com/2018/11/29/how-to-parse-csv-with-javascript/
                    let lines = result.split(/(?:\r\n|\n)+/).filter(function(el) {return el.length !== 0});
                    setData(lines);
                });
        };
        fetchData()
    }, []);

    data.forEach((d) => {
        console.log(d.split(", "));
    });

    const listItems = data.map((x) =>
        <li>
            {x}
        </li>
    );

    return (
        <div>
            <p>list :</p>
            <ul>{listItems}</ul>
        </div>
    )
}

export default TaskList;