// lib
import "../src/lib/pico-master";
// styles
import "./public/styles/app.css";
// components
import DataUser from "./components/DataUser";
// hooks
import { useState } from "react";

function App() {
  const[username, setUserName] = useState()
  const handleData = (event) => {
    const username = document.querySelector("#username").value
    setUserName(username)
    event.preventDefault();
  }

  // const handleButton = () => {
    
  // }
  return (
    <div className="App">
      <div className="container">
        <h1>Search users in github</h1>
        <form className="form" onSubmit={handleData}>
          <input type="search" name="search" id="username"  autoComplete="off"/>
          <input type="submit" className="buttonSearch" onClick={handleData} value="search"/>
        </form>
      </div>
      <DataUser key={username} username={username}/>
    </div>
  );
}

export default App;
