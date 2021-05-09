import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axiosInstance from "../makeReq";
import "./Row.css";

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

const Row = (props) => {
  const { title, fetchUrl } = props;
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axiosInstance.get(fetchUrl);
      console.log(title, response.data.results);
      setMovies(response.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const handleMovie = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // if any movie trailer is already opened, close it
    } else {
      console.log("m name=",movie?.name)
      movieTrailer(movie?.name.replaceAll(" ", "") || "")
        .then((url) => {
            // to get queryParams, 
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("v=",urlParams.get("v"))
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log("error while getting url", err));
    }
  };

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            onClick={()=>handleMovie(movie)}
            src={`${imageBaseUrl}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;

// export default function Row(props) {
//     return(
//         <div>
//             {props.title}
//         </div>
//     )
// }
