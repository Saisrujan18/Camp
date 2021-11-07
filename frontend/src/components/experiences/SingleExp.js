/* eslint-disable no-unused-vars */

import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useParams } from "react-router";
import { useAuth } from "../../authContext/AuthContext";
import Sidebar from "../Sidebar";
import Spinner from "../Spinner";
import "./Experiences.css";
import Edit from "../Edit";

export function SingleExp() {
  //  ALl the neccessary variables are declared over here.
  const { user } = useAuth();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const [expData, setExpData] = useState({});
  const [showInfo, setShowInfo] = useState(true);

  // Fetching all the neccessary data
  
  useEffect(() => {
    axios
      .post("http://localhost:3001/api/experiences/id", { id })
      .then((res) => {
        setExpData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // Renders the content of the whole screen.
  return (
    // total screen
    <div className="h-screen flex ">
      {/* left sidebar */}
      <Sidebar />

      {/* Loads the spinner if its still loading or else rendering the content */}

      <div className=" overflow-y-auto flex-1 py-3 bg-white my-2 mr-2 rounded-r-lg">
        {/* above of center */}
        {loading ? (
          <Spinner />
        ) : (
          <div className="max-w-3xl mx-auto pt-1">
            <div className="mx-3">
              {/* The Whole Project Description */}
              <div>
                <div className="rounded-lg text-sm md:text-lg m-2 my-4">{expData.author}</div>
                <div className="rounded-lg">
                  <h1 className="text-3xl md:text-4xl text-justify font-bold my-14">
                    {expData.title}
                  </h1>

                  {/* Inpage navigation */}
                  <div className="flex">
                    <button
                      to="/collab"
                      className={
                        "text-md border-b-2 mt-2 pl-4 pr-4 p-1 " +
                        (showInfo ? "border-darkBlu" : "")
                      }
                      onClick={() => {
                        setShowInfo(true);
                      }}
                    >
                      Info
                      
                    </button>
                  </div>
                  <hr className="bg-whit h-0.5 border-none rounded-sm"></hr>
                </div>
              </div>
            </div>

            {/* below of center */}
            <main className="flex-1 p-2 bg-white ">
              <h1 className={"font-bold m-1 " + (showInfo ? "" : " hidden")}>
                {" "}
                Description{" "}
              </h1>
              
              <div
                className={
                  "bg-white rounded-lg text-1xl p-2 shadow-md font-sans " +
                  (showInfo ? "" : "hidden")
                }
              >
                <p>{expData.description} </p>
              </div>
              <Edit />
            </main>
          </div>
        )}
      </div>
    </div>
  );
}
