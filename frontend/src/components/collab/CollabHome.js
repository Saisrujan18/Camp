import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import Sidebar from "../Sidebar";
import CollabCard from "./CollabCard";
import Spinner from "../Spinner";
import NewCollab from "./NewCollab";
import { SidebarH } from "../../App";

function CollabHome() {
  // All the neccessary useState variables are declared over here.

  const [collabData, setCollabData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popupVisible, setVisibility] = useState(false);
  const history = useHistory();

  // get the data for collabCards.
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/collab")
      .then((res) => {
        setCollabData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // Triggers the popup
  function showPopup(e) {
    setVisibility(true);
    e.preventDefault();
  }

  // Handles the request of adding a new collaboration
  const addNewCollab = async (collab) => {
    let updatedCollabData = [...collabData];
    updatedCollabData.push(collab);
    setCollabData(updatedCollabData);
    // redirect to the post.
    await axios.post("http://localhost:3001/api/collab", collab);
  };

  // A function to render all the collaborations in the community
  const renderCard = (collab) => {
    const navigate = (collab_id) => {
      history.push("/collab/" + collab_id);
    };

    return (
      <CollabCard
        _id={collab._id}
        navigate={navigate}
        title={collab.title}
        description={collab.description}
        author={collab.author}
      />
    );
  };

  // Loads a spinner if the the data is still processing
  // Renders the collaborations if its not loading.
  const collabContent = (loading) => {
    if (loading) return <Spinner />;
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 place-content-stretch content-around bg-white p-2 items-center bg-whit">
        {collabData.map((collab) => renderCard(collab))}
      </div>
    );
  };
  // Renders the popup when triggered.
  const renderPopup = () => {
    return (
      popupVisible && (
        <NewCollab visibility={setVisibility} addCollab={addNewCollab} />
      )
    );
  };
  // Renders the content of the page when popup is not triggered.
  const renderContent = () => {
    return (
      !popupVisible && (
        <div className="h-screen flex flex-row">
          {/* <SidebarH /> */}
          <SidebarH />
          <div className="flex-grow bg-white md:rounded-r-lg md:mr-2 my-2 sm-custom:rounded-lg sm-custom:mx-2 flex flex-col w-screen-lg">
            <div className="flex flex-row bg-whit rounded-tr-lg border-b-2">
              <div className="m-2 ml-4 mb-4 text-3xl text-left font-bold">
                Collab
              </div>
              <div className="flex-grow"></div>
              <button
                className="place-self-end block p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
                onClick={showPopup}
              >
                +New
              </button>
            </div>
            {/* Loading - show the spinner
             * else - show the collabData
             */}
            {collabContent(loading)}
            <div className="flex-grow bg-whit rounded-br-lg"></div>
            <div className="flex flex-row place-content-center">
              <button> {"<"} </button>
              <button> {">"} </button>
            </div>
          </div>
        </div>
      )
    );
  };

  return (
    <div>
      {renderPopup()}
      {renderContent()}
    </div>
  );
}
export default CollabHome;
