import React, { useEffect, useState } from "react"


function AddAnimals() {

    let data = JSON.parse(localStorage.getItem("animals")) || []

    let [alertTxt, setAlertTxt] = useState("");
    let [animal, setAnimal] = useState([...data]);
    let [name, setName] = useState("");
    let [day, setDay] = useState("");
    let [description, setDescription] = useState("");

    function addTask() {
        let newId = animal.length > 0 ? animal[animal.length - 1].id + 1 : 1;
        setAnimal([...animal, { id: newId, Name: name, Day: day, Description: description }]);
        setName("");
        setDay("");
        setDescription("");

        setAlertTxt("New task added");
        setTimeout(() => {
            setAlertTxt('');
        }, 2000);

        
    }
    useEffect(() => {
        localStorage.setItem("animals", JSON.stringify(animal));
    }, [animal]);


    

    return (
        <div className='addTask-page'>
            <h1>Add New Task</h1>
            <div className='addTask-page-enterBox'>
                <input className='addTask-page-enterBox-name' value={name} placeholder='Name...' onChange={e => setName(e.target.value)} />
                <input className='addTask-page-enterBox-day' value={day} placeholder='Day...' onChange={e => setDay(e.target.value)} />
                <input className='addTask-page-enterBox-description' value={description} placeholder='Description......' onChange={e => setDescription(e.target.value)} />
                <button onClick={addTask} />
            </div>
            <div className='addTask-page-popUp'>
                <h1>{alertTxt}</h1>
            </div>
        </div>
    )
}

export default AddAnimals