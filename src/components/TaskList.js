import { useEffect, useState } from 'react';
import raw from '../data/placeholder.txt';
import Task from './Task';

function TaskList() {

    function randomId(low = 1, high = 10000000) {
        return Math.floor((Math.random() * high) + low);
    }

    const [data, setData] = useState([]);
    const [jsonData, setJsonData] = useState([]);

    //get all the dummy data from the placeholder text file
    useEffect(() => {
        const fetchData = async () => {
            let something = raw;
            // let anotherFile = '';
            await fetch(something) //something + anotherFile
                .then((response) => response.text())
                .then((result) => {
                    //https://thegermancoder.com/2018/11/29/how-to-parse-csv-with-javascript/
                    const lines = result.split(/(?:\r\n|\n)+/).filter(function (el) { return el.length !== 0 });
                    setData(lines);
                })
                .catch((err) => console.log(err))
        };
        fetchData()
    }, []); //that array u pass is all the states u wanna listen to
    //useEffect will be called each time one of those states changes

    //https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react
    useEffect(() => {
        fetch('http://localhost:8000/all_tasks')
        .then((responseObj) => {
            if(!responseObj.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            return responseObj.json()
        })
        .then((data) => {
            setJsonData(data)
            // console.log(data)
            return;
        })
        .catch((err) => console.log(err));
    }, [])


    // useEffect(() => {
    //     const fetchData2 = async () => {
    //         const filepath = require('../data/tempDB.json');
    //         setJsonData(filepath)
    //         console.log('useEffect ', jsonData)
    //     };
    //     fetchData2();
    // });

    const listItems = data.map((x) => {
        const rando = randomId(); //random number between 1 and a millie
        const item = x.split(", ");
        return <Task key={rando} title={item[0]} task={item[1]} id={item[2]} />
    });

    const listItems2 = jsonData.map((i) => {
        const randomNum = randomId();
        return <Task key={randomNum} title={i.title} task={i.task} id={i.id} />
    })
    // if(jsonData !== null) {
    //     //https://simplernerd.com/js-iterate-json/
    //     for(let [, value] of Object.entries(jsonData)) {
    //         const rando2 = randomId();
    //         listItems2.push(<Task key={rando2} title={value.title} task={value.task} id={rando2}/>)
    //     }
    // }

    return (
        <div>            
            {listItems} 
            {listItems2}
        </div>
    )
}

export default TaskList;