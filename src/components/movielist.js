import React from "react";
import Card from "./card"

function Movielist(props) {
    if (props.datos)return props.datos.map((movie)=><Card movie={movie} key={movie.id}></Card>)
    else return(<p>Sin datos</p>)
   
}

export default Movielist;
