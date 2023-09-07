import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const [movie,setMovie] = useState({})

    const fetchDetails = async(m)=>{
        const f = await fetch(m);
        const json = await f?.json();
        setMovie(json);
    }
    const params = useParams();
    const apiURL = `https://www.omdbapi.com/?i=${params.id}&apikey=42b602aa&s=`;
    useEffect(()=>{
        fetchDetails(apiURL);
    },[apiURL])

    return (
        <div className="details">
            <img src={movie.Poster} alt="" />
            <h1>{movie.Title}</h1>
            <h3>Genre: {movie.Genre}</h3>
            <h3>Cast: {movie.Actors}</h3>
            <h3>Runtime: {movie.Runtime}</h3>
            <h3>IMDb Rating: {movie.imdbRating}</h3>
            <h4>Plot: {movie.Plot}</h4>

        </div>
    )
}
 
export default MovieDetails;