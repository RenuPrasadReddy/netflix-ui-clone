import React, { useEffect, useState } from "react";
import axiosInstance from "../makeReq";
import requests from "../requests";
import './banner.css'

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchData() {
        const response = await axiosInstance.get(requests.fetchNetflixOriginals);
        console.log({response});
        let randomNum = Math.ceil(Math.random() * response.data.results.length -1);
        // console.log('num=', randomNum);

        setMovie(response.data.results[randomNum]);
      // get random number and get that move and set it to setMovie
    }
    fetchData();
  }, []);

    // console.log('movie in banner=', movie);

    /* {some background-image} */
    /* {div with 2 buttons} */
    /* {desctiption} */   

  function truncate(str,n) {
    return str?.length > n ? str.substr(0, n-1)+'...' : str;
  }

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${imageBaseUrl}${movie?.backdrop_path})`,
        // backgroundPosition: "center center"
      }}
    >

      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">
            {/* {movie?.overview} */}
            {truncate(movie?.overview, 150)}
        </h1>
        
      </div>
    <div className="banner_fadeBottom"></div>
    </header>
  );
};

export default Banner;
