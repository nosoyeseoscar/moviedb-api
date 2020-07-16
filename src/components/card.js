import React from "react"; /* tamaño 500 = w500 */

/*  baseUrlPoster = "https://image.tmdb.org/t/p/w500/"; */ function Card(
  props
) {
  return (
    <div className="movie-row">
      <div className="movie-columns">
        <img
          src={`https://image.tmdb.org/t/p/w200/${props.movie.poster_path}`}
          alt="Poster"
        ></img>
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
