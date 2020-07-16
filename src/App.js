import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Movielist from "./components/movielist";

const apiKey = "50b9918d626f4c7d70f884deda9f2281";
const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

function App() {
 /*  const searchDefault = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`; */
  const [list, setlist] = useState([]);
  const [keyword, setKeyword] = useState('')

  const handleSubmit = evt => {
    evt.preventDefault()
    const fechtData = async () => {
    const resp = await fetch(`${baseUrl}${keyword}`);
    const resJson = await resp.json();
      setlist(resJson.results)      
    };
    fechtData();
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  useEffect(() => {
    const fechtData = async () => {
      const resp = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
      const resJson = await resp.json();
      setlist(resJson.results)      
    };
    fechtData();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <form onSubmit={handleSubmit}> 
        <input onChange={handleChange} type="text" value={keyword} className="input-search" placeholder="Search Terms"></input>
      </form>
      
        { list.length ?  <Movielist data={list}></Movielist> : <p>No hay datos</p>}
      
    </div>
  );
}

export default App;
