import {React, useState} from "react";
import {Link} from "react-router-dom";

function Movielist({backgroundimage, title, year, summary, index, id}) {
    const [visible, setVisible] = useState(false);
    return(
        <>
        <li key={index} onMouseEnter={() => {setVisible(true)}} onMouseLeave={() => {setVisible(false)}}>
            <Link to={`/movie/${id}`}>
                <div className="movie-inner" style={{backgroundImage: `url(${backgroundimage})`, backgroundSize: "cover", backgroundPosition: "top center"}}>
                    <div className={`movie-content-box ${visible ? "on" : ""}`}>
                        <div className="movie-content">
                        <h1>{title} ({year})</h1>
                        <p>{summary}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
        </>
    )
}

export default Movielist;