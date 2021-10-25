import React from "react";
import { useLayoutEffect, useState, useEffect } from "react";
import fire from "../components/login/assets/Camp.png";
import { useAuth } from "../authContext/AuthContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function Sidebar() {
  let { logOut } = useAuth();
  const history = useHistory();
  const [open, setOpen] = useState(true);

  useLayoutEffect(() => {
    function updateOpen() {
      if (window.innerWidth < 768) {
        setOpen(false);
      } else setOpen(true);
    }

    window.addEventListener("resize", updateOpen);
    // console.log(window.innerWidth)
    updateOpen();
    return () => window.removeEventListener("resize", updateOpen);
  }, []);

  function handleLogOut() {
    logOut();
    history.replace("/");
  }

  return (
    <div className="absolute md:relative min-h-screen md:flex">
      {/* Top Bar */}
      <div
        className={
          "bg-gray-800 text-gray-100 md:hidden " + (open ? " hidden" : "")
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

      {/* side bar */}
      {/* bg-blue-900 */}

      <aside
        className={
          " bg-whit text-blue-100 w-60 space-y-6 px-2 py-4 absolute inset-y-0" +
          " left-0 transform md:relative transition duration-200 ease-in-out " +
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
            className="p-2 hover:bg-gray-200 rounded focus:outline-none md:hidden"
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

        <nav className="text-blac">
          {/* bg-blue-700 */}
          <Link
            to="/home"
            className="block py-2.5 px-4 hover:text-darkBlu hover:bg-gray-200 font-bold  rounded"
          >
            Home
          </Link>

          <Link
            to="/experiences"
            className="block py-2.5 px-4 hover:text-darkBlu hover:bg-gray-200 font-bold  rounded"
          >
            Experiences
          </Link>

          <Link
            to="/collab"
            className="block py-2.5 px-4 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
          >
            Collab
          </Link>


          {/* <Link to='/aboutus' className='block py-2.5 px-4 hover:text-white hover:bg-blue-700 rounded'>AboutUS</Link> */}

          <div
            className="py-2.5 px-4 hover:text-red-500 hover:bg-red-200 font-bold rounded cursor-pointer"
            onClick={handleLogOut}
          >
            logout
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      {/* <div className='p-10 text-2xl font-bold flex-1'>
                Content
            </div>  */}
    </div>
  );
}

export default Sidebar;





/* <Link
  to="/digitalwizards"
  className="block py-2.5 px-4 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
>
  Digital Wizards
</Link>

<Link
  to="/sports"
  className="block py-2.5 px-4 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
>
  Sports
</Link>

<Link
  to="/aboutus"
  className="block py-2.5 px-4 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
>
  AboutUS
</Link> */