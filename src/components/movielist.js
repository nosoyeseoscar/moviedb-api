import React, { useState, useEffect } from "react";
import Card from "./card";
import popularMovies from "../services/popularMovies";

function Movielist() {
  const [list, setlist] = useState([]);
  
  useEffect(() => {
    const popular = popularMovies();
    popular.then((res) => setlist(res));
  }, []);

  return (
    <div className="movies-list">
      {list.map((movie) => (
        <Card movie={movie} key={movie.id}></Card>
      ))}
    </div>
  );
}

export default Movielist;
