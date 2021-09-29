import React, { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../Sidebar";
import CollabCard from "./CollabCard";
import Spinner from "../Spinner";

function CollabHome() {
  const [collabData, setCollabData] = useState([]);
  const [loading, setLoading] = useState(true);

  // get the data for collabCards.
  useEffect(() => {
    axios
      .get("http://localhost:3001/collab")
      .then((res) => {
        setCollabData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  });

  function addNewCollab(e) {
    e.preventDefault();
    console.log("ADD");
  }

  return (
    <div className="h-screen flex flex-row">
      <Sidebar />
      <div className="flex-grow bg-white rounded-lg m-2 flex flex-col max-w-screen-lg">
        <div className="flex flex-row">
          <div className="m-2 ml-4 mb-4 text-3xl text-left font-bold">
            Collab
          </div>
          <div className="flex-grow"></div>
          <button
            className="place-self-end block p-2 m-1  hover:text-white hover:bg-blue-700 rounded font-bold"
            onClick={addNewCollab}
          >
            + New Collab
          </button>
        </div>
        {/* Loading - show the spinner
         * else - show the collabData
         */}
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 place-content-stretch content-around bg-whit p-2 rounded-lg flex-grow items-center">
            {collabData.map((collab) => (
              <CollabCard
                title={collab.title}
                description={collab.description}
                author={collab.author}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default CollabHome;
