import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Movielist from "./components/movielist";


function App() {
  const [keyword, setKeyword] = useState("");

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <div className="App">
      <Header></Header>
      
        <input
          onChange={handleChange}
          type="text"
          value={keyword}
          className="input-search"
          placeholder="Search Terms"
        ></input>
      

      <Movielist keyword={keyword}></Movielist>
    </div>
  );
}

export default App;
