import React, {useState} from "react";
import MovieCard from "./component/MovieCard";
import "./App.css";
//42b602aa;
const apiURL = "https://www.omdbapi.com/?apikey=42b602aa&s=";


const App = () => {
  const [search,setSearch] = useState("");
  const [movie,setMovie] = useState(null);
  const getMovie = async(movie)=>{
    const f = await fetch(apiURL+movie);
    const json = await f?.json();
    setMovie(json.Search);
  }

  return (
    <div className="container">
      <div className="searchContainer">
        <input type="text" className="searchBar" value={search} onChange={(e)=>{
          setSearch(e.target.value);
        }}/>
        <button className="searchBtn" onClick={()=>{
          getMovie(search);
        }}>Search</button>
      </div>
      <div className="result">
        {

          movie?.length > 0 ? (
            <div className="Maincontainer">
              {
                movie.map((movie,index) => (
                <MovieCard key={index} movie={movie} />
              ))}
            </div>
          )
         :
          (
            <div className="empty">
              <h2>Search For a movie</h2>
            </div>
          )
        }
      </div>
    </div>
  )
};
 
export default App;
