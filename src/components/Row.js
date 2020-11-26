import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import "./css/Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const basUrlOfImage = "https://image.tmdb.org/t/p/original/";

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParms = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParms.get("v"));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchURL);
      // console.log("RESULT:", requests);
      setMovies(requests.data.results);
      return requests;
    }
    fetchData();
  }, [fetchURL]);
  // console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            class={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${basUrlOfImage}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
