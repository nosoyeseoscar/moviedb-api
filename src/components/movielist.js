import React from "react";
import Card from "./card"

function Movielist(props) {
    return (
      <div className="movies-list">
        {  props.data.map((movie) => <Card movie={movie} key={movie.id}></Card>)}
      </div>
    )
}

export default Movielist;
