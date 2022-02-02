import { useEffect, useState } from 'react';
import raw from '../data/placeholder.txt';

function TaskList() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let something = raw;
            // let anotherFile = '';
            await fetch(something)
                .then((response) => response.text())
                .then((result) => {
                    setData(result.replaceAll("\r\n", " ").split(" "));
                });
        };
        fetchData()
    }, []);

    data.forEach((d) => {
        console.log(d);
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