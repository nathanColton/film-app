import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import avatar from "../assets/icons/avatar.png";
import { AuthContext } from "../context/AuthContext";
import Switch from "./Switch";

const Navbar = () => {
  const { currentUser, logOut } = useContext(AuthContext);

  // const currentUser = { displayName: "Akif KA" };

  return (
    <div>
      <nav
        className="flex w-full flex-wrap items-center justify-between bg-neutral-100 dark:bg-gray-900 py-3 dark:text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start fixed top-0 z-20"
        data-te-navbar-ref=""
      >
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <Link className="pr-2 text-2xl font-semibold" to="/">
            React Movie App
          </Link>

          <button
            className="block border-0 bg-transparent py-2 px-2.5 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent4"
            aria-controls="navbarSupportedContent4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent4"
            data-te-collapse-item
          >
            {/* Left links */}
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row "
              data-te-navbar-nav-ref
            >
              <li className="p-2" data-te-nav-item-ref>
                <NavLink
                  className="   disabled:text-black/30 lg:px-2 [&.active]:text-blue-500 dark:[&.active]:text-blue-500"
                  to="/"
                  data-te-nav-link-ref
                >
                  Popular Movies
                </NavLink>
              </li>
              <li className="p-2" data-te-nav-item-ref>
                <NavLink
                  className="p-0 opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-blue-500 dark:[&.active]:text-blue-500"
                  to="movies2"
                  data-te-nav-link-ref
                >
                  Upcoming Movies
                </NavLink>
              </li>
              <li className="p-2" data-te-nav-item-ref>
                <NavLink
                  className="p-0 opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-blue-500 dark:[&.active]:text-blue-500"
                  to="movies3"
                  data-te-nav-link-ref
                >
                  Top Rated Movies
                </NavLink>
              </li>
            </ul>
            {/* Left links */}
          </div>

          <div className="relative flex items-center">
            {currentUser && (
              <h5 className="mr-2 text-sm ">{currentUser.displayName}</h5>
            )}
            <Switch />
            <div className="relative" data-te-dropdown-ref="">
              <span
                className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-te-dropdown-toggle-ref=""
                aria-expanded="false"
              >
                <img
                  src={currentUser.photoURL || avatar}
                  className="rounded-full"
                  style={{ height: 25, width: 25 }}
                  alt=""
                  loading="lazy"
                />
              </span>
              <ul
                className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton2"
                data-te-dropdown-menu-ref=""
              >
                <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    to="/register"
                    data-te-dropdown-item-ref=""
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    to="/login"
                    data-te-dropdown-item-ref=""
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <span
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    role="button"
                    data-te-dropdown-item-ref=""
                    onClick={() => logOut()}
                  >
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
      </nav>
      <div className="h-[70px]"></div>
    </div>
  );
};

export default Navbar;
