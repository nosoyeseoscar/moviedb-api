import React from "react"; /* tamaño 500 = w500 */
import { ReactComponent as Star } from "../star.svg";

export default function Card( props ) {
  return (
    <div className="movie-row">
      <div className="movie-columns">
          {props.movie.poster_path ? <img
            src={`https://image.tmdb.org/t/p/w200/${props.movie.poster_path}`}
            alt="Poster"></img> 
            : <img src="no-poster.jpg" alt="No poster" />
          }
        <div>
          <h3>{props.movie.title}</h3>
          <p>{props.movie.overview}</p>
          <div>
            <Star fill="#FFD700" width="4%"></Star>
            <span className="vote">{props.movie.vote_average}</span>
            
          </div>
        </div>
      </div>
      <hr></hr> 
    </div>
  );
}
