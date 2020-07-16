import React from 'react'

/*  baseUrlPoster = "https://image.tmdb.org/t/p/w500/"; */ /* tamaño 500 = w500 */

function Card(props) {
    return (
        <div className="wrapper-movie">
            <div className="tam-img">
                <img src={`https://image.tmdb.org/t/p/w200/${props.movie.poster_path}`} alt="Poster" ></img>
            </div>
            <div>
                <h3>{props.movie.title}</h3>
                <p>{props.movie.overview}</p>
            </div>
        </div>
    )
}

export default Card
