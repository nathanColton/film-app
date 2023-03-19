import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopRatedMoviesCard from "../components/TopRatedMoviesCard";

import { AuthContext } from "../context/AuthContext";
import { MovieContext } from "../context/MovieContext";
import { toastWarnNotify } from "../helpers/Toast";
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const TopRatedMovies = () => {
  const { topRatedMovies, loading, getTopRatedMovies } = useContext(
    MovieContext
  );
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser && searchTerm) {
      getTopRatedMovies(SEARCH_API + searchTerm);
    } else if (!currentUser) {
      toastWarnNotify("Please login to search a movie");
      navigate("/login");
    } else {
      toastWarnNotify("Please enter a text");
    }
  };
  return (
    <div>
      <h1 className="text-center text-blue-500">Top Rated Movies</h1>
      <form className="flex justify-center p-2" onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2"
          placeholder="Search a movie..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-danger-bordered" type="submit">
          Search
        </button>
      </form>
      <div className="flex justify-center flex-wrap">
        {loading ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          topRatedMovies.map((movie) => (
            <TopRatedMoviesCard key={movie.id} {...movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default TopRatedMovies;
