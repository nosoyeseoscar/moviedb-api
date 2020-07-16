import React from "react"; /* tamaño 500 = w500 */

/*  baseUrlPoster = "https://image.tmdb.org/t/p/w500/"; */ function Card(
  props
) {
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
        </div>
      </div>
      <hr></hr> 
    </div>
  );
}

export default Card;
