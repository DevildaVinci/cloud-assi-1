import './App.css';
import React, { useState } from 'react';
import Lists from './List/list';


function App() {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
      setInputList(event.target.value);
  };

  const listOftasks = () => {
      setItems((oldTasks) => {
        return [...oldTasks, inputList]
      });
      setInputList("");
  };

  const deleteTask = (id) => {
    console.log("Deleted")

    setItems((oldTasks) =>{
      return oldTasks.filter((arrElem,index)=>{
          return index !== id
      })
    })
}

  return (
    <div className="Back-ground">
      <div className='Card'>
        <div className='head'>
        <h1>TO DO </h1>
        <input type="text" placeholder="Add task" 
          value={inputList}
        onChange={itemEvent}/>
        <button className='Add' onClick={listOftasks}> Add</button>
        </div>
        <ul>
          { Items.map( (itemval,index) => {
            return <Lists 
            key={index} 
            id={index}
            task={itemval}
            onSelect ={deleteTask}/>
          })}
        </ul>
        
      </div>
          
    </div>
  );
}

export default App;
