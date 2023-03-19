import React from "react";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";
import MovieContextProvider from "./context/MovieContext";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div className="dark:bg-gray-dark-main">
      <AuthContextProvider>
        <MovieContextProvider>
          <AppRouter />
        </MovieContextProvider>
        <ToastContainer />
        <Toaster />
      </AuthContextProvider>
    </div>
  );
};

export default App;
