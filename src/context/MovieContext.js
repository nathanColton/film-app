import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const MovieContext = createContext();

const API_KEY = process.env.REACT_APP_TMDB_KEY;

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const FEATURED_API2 = `  https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
const FEATURED_API3 = `  https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  useEffect(() => {
    getUpComingMovies(FEATURED_API2);
  }, []);

  useEffect(() => {
    getTopRatedMovies(FEATURED_API3);
  }, []);

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const getUpComingMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => setUpComingMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  const getTopRatedMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => setTopRatedMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  const values = {
    movies,
    loading,
    getMovies,
    upComingMovies,
    getUpComingMovies,
    topRatedMovies,
    getTopRatedMovies,
  };
  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
