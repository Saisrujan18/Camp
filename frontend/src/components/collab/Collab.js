import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useAuth } from "../../authContext/AuthContext";
import "./Collab.css";
import Spinner from "../Spinner";
import { SidebarH } from "../../App";
import Edit from "../Edit";
import BackImg from "../experiences/images/Portrait.jpg"

export function Collab() {
  // All the useState variables that might be used are declared over here.

  const { user } = useAuth();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [collabData, setCollabData] = useState({});
  const [showInfo, setShowInfo] = useState(true);
  const [showMembers, setShowMembers] = useState(false);

  // Fetching all the data required to show in this page
  useEffect(() => {
    axios
      .post("http://localhost:3001/api/collab/id", { id })
      .then((res) => {
        // receive the data.
        setCollabData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // A resuable component to show the members of the collab.
  const getMember = (member) => {
    return (
      <div className=" rounded-lg p-2 border ">
        <p className=""> {member} </p>
      </div>
    );
  };

  // A resuable component to show the links related to the collab.
  const getLinks = (link) => {
    return (
      <li className="bg-white rounded-lg p-4 shadow-lg border">
        <a href="/"> {link} </a>
      </li>
    );
  };

  // The join request  of a specific user is handled over here.
  async function addMember() {
    const { email } = user;
    const { members } = collabData;
    axios
      .post("http://localhost:3001/api/collab/id/join", { email, id, members })
      .then((res) => {
        const newCollabData = collabData;
        newCollabData.members = [...res.data];
        console.log(res.data);
        setCollabData(newCollabData);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="h-screen flex ">
      {/* Side bar appears on the left as default.*/}
      <SidebarH />

      {/* If the data is being processed we render a loading spinner */}
      {/* Or else we show the content of the page */}

        <div className=" overflow-y-auto flex-1  p-3 bg-white my-2 mr-2 rounded-r-lg relative"
          style={{
            backgroundImage: "url(" + BackImg + ")"
          }}
        >
          {loading ? (
            <Spinner />
          ) : (
            <div className="flex flex-col md:max-w-3xl sm:max-w-2xl mx-auto pt-1 absolute h-full top-0 inset-x-0 rounded-lg"
              style={{
                backgroundImage: "url(" + BackImg + ")"
              }}
            >
              <div className="mx-3">
                {/* The Whole Project Description */}
                <div>
                  <div className=" rounded-lg text-sm md:text-lg m-2 my-4"><u>{collabData.author}</u></div>
                  <div className="rounded-lg">
                    <h1 className="text-3xl md:text-4xl text-justify font-bold my-10">
                      <u>{collabData.title}</u>
                    </h1>
                    
                    {/* Inpage navigation */}
                    <div className="flex flex-row">
                      <div
                        to="/collab"
                        className={
                          "text-md border-b-2 mt-2 mr-3 pl-4 pr-4 p-1  "  +
                          (showInfo ? "border-darkBlu" : "border-whit hover:border-gray-300")
                        }
                        onClick={() => {
                          setShowInfo(true);
                          setShowMembers(false);
                        }}
                      >
                        Info
                      </div>

                      <div
                        to="/collab"
                        className={
                          "text-md border-b-2 mt-2 pl-4 pr-4 p-1 "  +
                          (showMembers ? "border-darkBlu" : "border-whit hover:border-gray-300")
                        }
                        onClick={() => {
                          setShowInfo(false);
                          setShowMembers(true);
                        }}
                      >
                        Members
                      </div>

                      {/* <button to='/collab' className={'font-bold rounded-lg text-md m-2 pl-4 pr-4 p-1 hover:bg-gray-200 ' +
                                    ' transition duration-500 ease-in-out ' + (showChat ? " bg-gray-200 transform scale-110" : '')} onClick={() => {setShowInfo(false); setShowChat(true); setShowMembers(false)}}> Chat </button> */}

                      {!collabData.members.includes(user.email) && (
                        <button
                          className={
                            "font-bold rounded-lg text-md m-2 pl-4 pr-4 p-1 ml-auto hover:bg-blue-500 transition duration-500 ease-in-out"
                          }
                          onClick={addMember}
                        >
                          Join
                        </button>
                      )}
                    </div>
                  </div>

                  <hr className="bg-whit h-0.5 border-none rounded-sm"></hr>
                </div>
              </div>

              <main className="flex-1 p-2 bg-white "
                style={{
                  backgroundImage: "url(" + BackImg + ")"
                }}
              >
                {/* Description*/}
                <h1 className={"font-bold m-1 " + (showInfo ? "" : " hidden")}>
                  {" "}
                  <u>Description{" "}</u>
                </h1>
                
                

                {/* {collabData} */}
                <div
                  className={
                    " rounded-lg text-1xl my-2 p-2 font-sans " +
                    (showInfo ? "" : "hidden")
                  }
                >
                  <hr></hr>
                  <Edit 
                    sendTo = {"http://localhost:3001/api/collab/id"}
                    id = {id}
                    data = {collabData}
                    turn = {0}
                  />
                </div>

                {/* Members */}
                <div className={showMembers ? "space-y-1 m-2" : "hidden"}>
                  {collabData.members.map((member) => getMember(member))}
                </div>
              </main>
            </div>
          )}
        </div>
      
    </div>
  );
}

