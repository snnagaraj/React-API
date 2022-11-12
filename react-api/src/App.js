import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todos,setToDos]=useState([]);
  
  useEffect(()=>{
    fetchToDos();
  },[])

  const fetchToDos=async()=>{
    //  fetch('https://jsonplaceholder.typicode.com/todos')
      // .then(response => response.json())
      // .then(json => setToDos(json))
      const res= await fetch('https://jsonplaceholder.typicode.com/todos')
      const json= await res.json();
      console.log("res",json);
      setToDos(json);
  }
  return (
    <div className="App">
    {todos?.map((item,index)=>
       <p key={index}>{item?.title}</p>
    )}
    </div>
  );
}

export default App;
