/* eslint-disable no-unused-vars */

import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useParams } from "react-router";
import { useAuth } from "../../authContext/AuthContext";
import { SidebarH } from "../../App";
import Spinner from "../Spinner";
import "./Experiences.css";
import Edit from "../Edit";
import draftToHtml from 'draftjs-to-html';
import Parser from 'html-react-parser'
import BackImg from "./images/Portrait.jpg"

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
    <div className="h-screen flex flex-row">
      {/* left sidebar */}
      <SidebarH />

      {/* Loads the spinner if its still loading or else rendering the content */}

      <div className="flex-grow bg-whit large:rounded-r-lg large:mr-2 medium:rounded-r-lg medium:mr-2 my-2 small:rounded-lg small:mx-2 flex flex-col w-screen-lg overflow-y-auto"
        style={{
          backgroundImage: "url(" + BackImg + ")"
        }}
      >
        {/* above of center */}
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col large:w-3/4 medium:w-5/6 small:w-5/6 w-full self-center h-full top-0 rounded-lg"
            style={{
              backgroundImage: "url(" + BackImg + ")"
            }}
          >
            <div className="mx-3 ">
              {/* The Whole Project Description */}
              <div>
                <div className=" rounded-lg text-sm md:text-lg m-2 my-4"><u>{expData.author}</u></div>
                <div className="rounded-lg">
                  <h1 className=" text-3xl md:text-4xl text-justify font-bold my-14">
                    <u>{expData.title}</u>
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
            <main className="flex-1 p-2 "
              style={{
                backgroundImage: "url(" + BackImg + ")"
              }}
            >
              <h1 className={"font-bold m-1 " + (showInfo ? "" : " hidden")}>
                {" "}
                <u>Description{" "}</u>
              </h1>
              <hr></hr>
              <div className=' '>
                <Edit 
                  sendTo = {"http://localhost:3001/api/experiences/id"}
                  id = {id}
                  data = {expData}
                  turn = {1}
                />
              </div>
            </main>
          </div>
        )}
      </div>
    </div>
  );
}

// <div
//   className={
//     "bg-white rounded-lg text-1xl p-2 shadow-md font-sans " +
//     (showInfo ? "" : "hidden")
//   }
// >
//   {/* {Parser(draftToHtml(JSON.parse(expData.description)))} */}
//   {/* {expData.description} */}
// </div>