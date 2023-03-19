import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Movies from "../pages/Movies";
import UpcomingMovies from "../pages/UpcomingMovies";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import TopRatedMovies from "../pages/TopRatedMovies";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Movies />} />
          <Route path="movies2" element={<UpcomingMovies />} />
          <Route path="movies3" element={<TopRatedMovies />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
