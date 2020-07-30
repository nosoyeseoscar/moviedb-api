import React, { useState, useEffect } from "react";
import Card from "./card";
import popularMovies from "../services/popularMovies";
import getMovies from "../services/getMovies"

function Movielist({keyword}) {
  const [list, setlist] = useState([]);
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    if ( keyword === ""){
      const listResults = popularMovies();
      listResults.then((res) => {
        setlist(res)
        console.log(res);
        setLoading(false)
      })
      
    } else{
      const listResults = getMovies(keyword);
      listResults.then((res) => {
        setlist(res)
        setLoading(false)
      })
    }
  }, [keyword]);

  if (loading) return <p>Loading Movies</p>

  return (
    <div className="movies-list">
      {list.map((movie) => (
        <Card movie={movie} key={movie.id}></Card>
      ))}
    </div>
  );
}

export default Movielist;
