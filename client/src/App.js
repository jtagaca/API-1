import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";


function App() {
  const [joke, setjoke] = useState("");

  const getJoke=()=>{
    axios.get("https://official-joke-api.appspot.com/random_joke").then((response)=>{
    // console.log(response)
    setjoke(response.data.punchline+" "+response.data.setup);
    })
  }
  return (
    <div>
    <h1 >Hey</h1>
    <button onClick={getJoke}>Get the joke</button>
   {joke}
    </div>
  );
}

export default App;
