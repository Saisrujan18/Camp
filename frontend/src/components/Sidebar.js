import React from "react";
import { useLayoutEffect, useState, useEffect } from "react";
import fire from "../components/login/assets/Camp.png";
import { useAuth } from "../authContext/AuthContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  // Required variables are defined over here like sidebar state
  let { logOut } = useAuth();
  const history = useHistory();
  const [open, setOpen] = useState(true);
  const [drop, setDrop] = useState(false);

  let labelCss =
    "bg-whit80 block py-2.5 px-4 hover:text-darkBlu hover:bg-gray-200 font-semibold rounded cursor-pointer ";

  // Shows/Hides the sidebar based on the screen size
  useLayoutEffect(() => {
    function updateOpen() {
      if (window.innerWidth < 1100) set_Open(false);
      else set_Open(true);
    }

    window.addEventListener("resize", updateOpen);
    updateOpen();
    return () => window.removeEventListener("resize", updateOpen);
  }, []);

  function handleLogOut() {
    logOut();
  }
  function set_Open(flag) {
    setOpen(flag);
    if (props.hasEditor) props.handleEditor(!open);
  }

//   Facilitates nav to different pages
  return (
    <div className="z-100 absolute medium_l:relative min-h-screen medium_l:flex ">
      {/* hamburger icon to open the sidebar */}
      <div
        className={
          "bg-whit text-gray-400 p-2 focus:outline-none hover:text-darkBlu hover:bg-gray-200 rounded relative z-200 opacity-20 transition duration-300 ease-in-out hover:opacity-100 " +
          "medium_l:hidden top-2 left-1 small_l:top-4 small_l:left-4 cursor-pointer" +
          (open ? " hidden" : "")
        }
        onClick={() => set_Open(!open)}
      >
        <svg
          className="h-6"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <aside
        className={
          " bg-whit text-blue-100 w-60 small:mt-2 small:mb-2 space-y-6 px-2 py-4 absolute inset-y-0 z-100 " +
          " left-0 transform medium_l:relative transition duration-200 ease-in-out " +
          (open
            ? " translate-x-0 small_l:my-2 small_l:ml-2 small_l:rounded-l-lg border-r-2"
            : "-translate-x-full")
        }
      >
        <div className=" flex flex-row justify-between ">
          <a href="/home" className="text-white flex items-center space-x-2">
            <img src={fire} className="w-9 ml-2" alt="Not found"></img>

            <span className="text-black text-2xl font-extrabold">Camp</span>
          </a>

          <button
            className="p-2 bg-whit text-gray-800 hover:bg-gray-200 hover:text-darkBlu rounded focus:outline-none medium_l:hidden"
            onClick={() => set_Open(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="text-blac max-h-96 divide-y">
			{/* Redirects to home page */}
          <Link to="/home" className={labelCss + "flex flex-row gap-x-4"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 self-center"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Home
          </Link>

			{/* Redirects to Experiences page */}
          <Link
            to="/experiences"
            className={labelCss + "flex flex-row gap-x-4"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 self-center"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            Experiences
          </Link>

			{/* Redirects to Collab page */}
          <Link to="/collab" className={labelCss + "flex flex-row gap-x-4"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5  self-center"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Collab
          </Link>
          <div>
            <div
              onClick={() => {
                setDrop(!drop);
              }}
              className={labelCss + "flex flex-row gap-x-4"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 self-center"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
              Clubs
              {!drop ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 self-center ml-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 self-center ml-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>

            <div hidden={!drop} className="relative overflow-y-auto max-h-24 ">
              <Link to="/sports" className={labelCss + "flex flex-row gap-x-1"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 self-center"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                    clipRule="evenodd"
                  />
                </svg>
                Sports
              </Link>
              <Link
                to="/digitalwizards"
                className={labelCss + "flex flex-row gap-x-1"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 self-center"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                    clipRule="evenodd"
                  />
                </svg>
                Digital Wizards
              </Link>
              <Link to="/sargam" className={labelCss + "flex flex-row gap-x-1"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 self-center"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                    clipRule="evenodd"
                  />
                </svg>
                Sargam
              </Link>
              <Link
                to="/techmaniacs"
                className={labelCss + "flex flex-row gap-x-1"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 self-center"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                    clipRule="evenodd"
                  />
                </svg>
                Techmaniacs
              </Link>
            </div>
          </div>

		  {/* Redirects to Profile page */}
          <Link to="/profile" className={labelCss + "flex flex-row gap-x-4"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 self-center"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            Profile
          </Link>

			{/* Redirects to About us Page */}
          <Link to="/AboutUs" className={labelCss + "flex flex-row gap-x-4"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 self-center"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            AboutUs
          </Link>

			{/* Logs out of the webapp */}
          <Link
            className="text-blac py-2.5 px-4 hover:text-red-500 hover:bg-red-200 block font-semibold rounded flex flex-row gap-x-4"
            onClick={handleLogOut}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 self-center"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clipRule="evenodd"
              />
            </svg>
            Logout
          </Link>
        </div>
      </aside>
    </div>
  );
}
