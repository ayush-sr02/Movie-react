import React from "react";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    return(
        <div className="movieContainer">
            <h3>Title: {Title}</h3>
            <p>Year: {Year}</p>
            <p>Type: {Type}</p>
            <img src={Poster} alt="poster" />
        </div>
    )
}
 
export default MovieCard;