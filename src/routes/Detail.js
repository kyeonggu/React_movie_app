import {React, useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const [movieInfo, setMovieInfo] = useState([]);
    const [movieGenres, setMovieGenres] = useState([]);

    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovieInfo(json.data.movie)
        setMovieGenres(json.data.movie.genres);
    }
    useEffect(() => {
        getMovie();
    }, [])

    return (
        <>
            <div className="movie-sub-inner">
                <div className="movie-sub-header" style={{backgroundImage : `url(${movieInfo.background_image})`, backgroundSize: "cover"}}>
                    <Link to="/">뒤로가기</Link>
                </div>
                <div className="movie-info-box">
                    <h1>{movieInfo.title_long}</h1>
                    <div className="movie-genres">
                        <ul>
                            {movieGenres.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="movie-stats">
                        <ul>
                            <li>Runtime : {movieInfo.runtime} Minites</li>
                            <li>Rating : {movieInfo.rating} / 10</li>
                            <li>Release : {movieInfo.date_uploaded}</li>
                        </ul>
                    </div>
                    <div className="movie-info">
                        <div className="movie-poster">
                            <img src={movieInfo.large_cover_image} />
                        </div>
                        <div className="movie-summery">
                            <p>{movieInfo.description_full}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;