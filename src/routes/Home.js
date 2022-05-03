import {React, useState, useEffect} from "react";
import Movielist from "../components/Movielist";

function Home() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true);
  
    const getMovies = async() => {
      const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimun_rating=8.5&sort_by=year`);
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
  }
  
    useEffect(() => {
      getMovies();
    }, [])
  
    console.log(movies);
    return (
      <>
        {loading
        ? <h1>로딩중...</h1>
        : <div className="movie-listbox">
            <ul>
              {movies.map((item) => (
                <Movielist key={item.id} id={item.id} backgroundimage={item.background_image} title={item.title} year={item.year} summary={item.summary}/>
              ))}
            </ul>
          </div>
        }
      </>
    );
}

export default Home;