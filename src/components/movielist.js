import React from "react";
import Card from "./card";

function Movielist(props) {
  if (props.datos)
    return (
      <div className="movies-list">
        {props.datos.map((movie) => 
            <Card movie={movie} key={movie.id}></Card>
        )}
      </div>
    );
  else return <p>Sin datos</p>;
}

export default Movielist;
