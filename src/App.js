import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

export default () => {
   const [age, setAge] = useState(21);
   const [name, setName] = useState("Peter");
   return (
     <div className="App">
      <header className="App-header">
      <div>
        <p>
        Name: {" "}
        <input type="text"
        value={name}
        onChange={e => setName(e.target.value)}></input>
        </p>
        <p>Age: {age}</p>
        <button onClick={() => setAge(age+1)}>Increment Age by one </button>
        <p>
        State = age: {age}, name: {name}
        </p>
      </div>
      </header>
     </div>
   )
}




