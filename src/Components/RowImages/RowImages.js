import React, { useEffect, useState } from "react";
import axios from "../../Axios";
import "./RowImages.css";
import { img_url } from "../Constants/Constants";
import ScrollContainer from "react-indiana-drag-scroll";

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
            <ScrollContainer className="scroll-container" >
            <div className="row-posters">
                {movies.map((obj) =>
                  <img
                  className={bigPoster ? 'big-posters row-img' : 'poster row-img'}
                  alt="poster"
                  src={`${img_url+obj.poster_path}`}
              />
             )}
            </div>
            </ScrollContainer>
        </div>
       
    );
}
export default RowImages;
