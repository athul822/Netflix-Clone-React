import React, { useEffect, useState } from "react";
import { api_key,img_url} from "../Constants/Constants";
import axios from "../../Axios";
import "../Fontawsome";
import "./MainContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainContent() {
    const [title, setTitle] = useState("");
    const [bg, setBg] = useState("");
    useEffect(() => {
        axios.get(`trending/all/day?api_key=${api_key}`).then((response) => {
            const ranMov = (num) => {
                const movieData = response.data.results[num];
                if (movieData.title) {
                    // console.log(`ran num= ${num}
                    // ${(movieData.backdrop_path, movieData.title)}`);
                    setTitle(movieData.title);
                    setBg(movieData.backdrop_path);
                } else {
                    ranMov(Math.floor(Math.random() * response.data.results.length));
                }
            };
            ranMov(Math.floor(Math.random() * response.data.results.length));
            //console.log(response.data.results)
        });
    }, []);

    return (
        <div className="container" style={{ backgroundImage: `url('${img_url+bg}')` }}>
            <div className="main-content">
                <h1 className="main-title">{title}</h1>
                <div className="buttons">
                    <button className="btn-play btn">
                        <span className="fa-icons">
                            <FontAwesomeIcon icon="fa-solid fa-play" className="play-icon" />
                        </span>
                        Play
                    </button>
                    <button className="btn-info btn">
                        <span className="fa-icons">
                            <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                        </span>{" "}
                        More Info
                    </button>
                </div>
            </div>
            <div className="linear-bg"></div>
        </div>
    );
}

export default MainContent;
