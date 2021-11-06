import React from "react";
import { useLayoutEffect, useState, useEffect } from "react";
import fire from "../components/login/assets/Camp.png";
import { useAuth } from "../authContext/AuthContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function Sidebar() 
{
	let { logOut } = useAuth();
	const history = useHistory();
	const [open, setOpen] = useState(true);
	const [drop, setDrop] = useState(false);

	let labelCss="block py-2.5 px-4 hover:text-darkBlu hover:bg-gray-200 font-bold  rounded ";
	// false for closed.

	useLayoutEffect(() => {
		function updateOpen() {
			if (window.innerWidth < 1024) {
			setOpen(false);
			} else setOpen(true);
		}

		window.addEventListener("resize", updateOpen);
		updateOpen();
		return () => window.removeEventListener("resize", updateOpen);
	}, []);

	function handleLogOut()
	{
		logOut();
		history.replace("/");
	}

  return (
    <div className="absolute medium_u:relative min-h-screen medium_u:flex">
      {/* Top Bar */}
      <div
        className={
          "bg-gray-800 text-gray-100 medium_u:hidden " + (open ? " hidden" : "")
        }
      >
        <button
          className="p-2 focus:outline-none hover:bg-gray-700 rounded"
          onClick={() => setOpen(!open)}
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
        </button>
      </div>

      <aside
        className={
          " bg-whit text-blue-100 w-60 space-y-6 px-2 py-4 absolute inset-y-0" +
          " left-0 transform medium_u:relative transition duration-200 ease-in-out " +
          (open
            ? " translate-x-0 mt-2 mb-2 ml-2 rounded-l-lg border-r-2"
            : "-translate-x-full")
        }
      >
        <div className=" flex flex-row justify-between">
          <a href="/home" className="text-white flex items-center space-x-2">
            <img src={fire} className="w-9" alt="Not found"></img>

            <span className="text-black text-2xl font-extrabold">Camp</span>
          </a>

          <button
            className="p-2 hover:bg-gray-200 rounded focus:outline-none medium_u:hidden"
            onClick={() => setOpen(!open)}
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
        <div className="text-blac overflow-y-auto max-h-96">
          
			<Link to="/home" className={labelCss}>Home</Link>
			<Link to="/experiences" className={labelCss}>Experiences</Link>
			<Link to="/collab" className={labelCss}>Collab</Link>
		
			<div onClick={() =>{setDrop(!drop);}} className={labelCss}>Clubs</div>

			<div  hidden={!drop} className="relative">
			
				<Link to="/sports" className={labelCss}>Sports</Link>
				<Link to="/digitalwizards" className={labelCss}>Digital Wizards</Link>
				<Link to="/sargam" className={labelCss}>Sargam</Link>
				<Link to="/techmaniacs" className={labelCss}>Techmaniacs</Link>

			</div>
			<Link to="/profile" className={labelCss}>Profile</Link>
			<Link to="/AboutUs" className={labelCss}>AboutUs</Link>

			<Link	className="text-blac py-2.5 px-4 hover:text-red-500 hover:bg-red-200 block font-bold rounded "
					onClick={handleLogOut}
			>Logout</Link>
		</div>
      </aside>
    </div>
  );
}

export default Sidebar;
