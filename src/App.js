import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Movielist from "./components/movielist";
import getMovies from "./services/getMovies";
import popularMovies from "./services/popularMovies";

function App() {
/*   const [list, setlist] = useState([]);
 */  const [keyword, setKeyword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const searchKeyword = getMovies(keyword);
    searchKeyword.then((res)=>console.log(res))
    /* searchKeyword.then((res) => setlist(res)); */
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

/*   useEffect(() => {
    const popular = popularMovies();
    popular.then((res) => setlist(res))
  }, []); */

  return (
    <div className="App">
      <Header></Header>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={keyword}
          className="input-search"
          placeholder="Search Terms"
        ></input>
      </form>

      <Movielist></Movielist>
    </div>
  );
}

export default App;
