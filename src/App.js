import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Searcher from "./components/searcher";
import Movielist from "./components/movielist";

const apiKey = "50b9918d626f4c7d70f884deda9f2281";
const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const baseUrlPoster = "https://image.tmdb.org/t/p/w500/"; /* tamaño 500 */

const movies = [
  {
    id: 0,
    title: "Avengers: Ininity War 0",
    overview:
      "Dolore ea reprehenderit consequat eu eu consequat consequat ex. Sint veniam veniam aute excepteur exercitation ea tempor elit aliquip amet. Deserunt duis commodo anim cupidatat ex.",
  },
  {
    id: 1,
    title: "Avengers: Ininity War 1",
    overview:
      "Dolore ea reprehenderit consequat eu eu consequat consequat ex. Sint veniam veniam aute excepteur exercitation ea tempor elit aliquip amet. Deserunt duis commodo anim cupidatat ex.",
  },
  {
    id: 2,
    title: "Avengers: Ininity War 2",
    overview:
      "Dolore ea reprehenderit consequat eu eu consequat consequat ex. Sint veniam veniam aute excepteur exercitation ea tempor elit aliquip amet. Deserunt duis commodo anim cupidatat ex.",
  },
];

let movieRows = [];

movies.forEach((movie) => {
  const movieRow = (
    <table key={movie.id}>
      <tbody>
        <tr>
          <td>
            <img scr=""></img>
          </td>
        </tr>
        <td>{movie.title}</td>
      </tbody>
    </table>
  );
  movieRows.push(movieRow);
});

function App() {
  const searchDefault = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  const [list, setlist] = useState([]);

  useEffect(() => {
    const fechtData = async () => {
      const resp = await fetch(searchDefault);
      const resJson = await resp.json();
      console.log(resJson.results);
    };
    fechtData();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Searcher></Searcher>
      <Movielist></Movielist>
    </div>
  );
}

export default App;
