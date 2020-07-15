import React from 'react'

/*  baseUrlPoster = "https://image.tmdb.org/t/p/w500/"; */ /* tamaño 500 */

function Card(props) {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt="Poster" ></img>
            <h3>{props.movie.original_title}</h3>
            <p>{props.movie.overview}</p>
        </div>
    )
}

export default Card
