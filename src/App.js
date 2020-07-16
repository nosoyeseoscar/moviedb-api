import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Searcher from "./components/searcher";
import Movielist from "./components/movielist";

const apiKey = "50b9918d626f4c7d70f884deda9f2281";
const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

function App() {
 /*  const searchDefault = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`; */
  const [list, setlist] = useState([]);

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
      <Searcher></Searcher>
      {console.log(list)}
      <Movielist datos={list}></Movielist>
    </div>
  );
}

export default App;
