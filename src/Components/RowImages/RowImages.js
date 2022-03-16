import React, { useEffect, useState } from "react";
import axios from "../../Axios";
import "./RowImages.css";
import { img_url } from "../Constants/Constants";

function RowImages({url,title,bigPoster}) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(url).then((response) => {
          setMovies(response.data.results)
          console.log(url)
        })
    },[])
    return (
        <div className="row-container">
            <h2>{title}</h2>
            <div className="row-posters">
                {movies.map((obj) =>
                  <img
                  className={bigPoster ? 'big-posters' : 'poster'}
                  alt="poster"
                  src={`${img_url+obj.poster_path}`}
              />
             )}
            </div>
        </div>
    );
}
export default RowImages;
