import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import ExpCard from "./ExpCard";
import Spinner from "../Spinner";
import NewExperience from "./NewExperience";
import { SidebarH } from "../../App";
import {BsCaretLeft, BsCaretRight} from "react-icons/bs"

import Edit from "../Edit";

function Experiences() {
  // All the neccessary variables are declared over here.

  const [expData, setexpData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popupVisible, setVisibility] = useState(false);
  const history = useHistory();

  // Fetching all the content at the beggining itself.
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/experiences")
      .then((res) => {
        setexpData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // Triggers the popup visibility
  function showPopup(e) {
    setVisibility(true);
    e.preventDefault();
  }

  // Handles the request to add new experience
  const addNewExp = async (exp) => {
    let updatedexpData = [...expData];
    updatedexpData.push(exp);
    setexpData(updatedexpData);
    // redirect to the post.
    await axios.post("http://localhost:3001/api/experiences", exp);
  };

  // A function to render the contents of all experiences
  const renderCard = (exp) => {
    const navigate = (exp_id) => {
      history.push("/experiences/" + exp_id);
    };

    return (
      <ExpCard
        _id={exp._id}
        navigate={navigate}
        title={exp.title}
        company={exp.company}
        description={exp.description}
        type={exp.type}
        author={exp.author}
      />
    );
  };
  // Loads a spinner if the content is being fetched
  // or else renders the content in a certain format.
  const expContent = (loading) => {
    if (loading) return <Spinner />;
    return (
      <div className="grid grid-cols-1 small:grid-cols-2 medium:grid-cols-3 large:grid-cols-4 bg-whit items-center">
        {expData.map((exp) => renderCard(exp))}
      </div>
    );
  };

  // Renders the popup
  const renderPopup = () => {
    return (
      popupVisible && (
        <NewExperience visibility={setVisibility} addExp={addNewExp} />
      )
    );
  };
  // Renders the content if the popup visibility is false.
  const renderContent = () => {
    return (
      !popupVisible && (
        <div className="h-screen flex flex-row">
          <SidebarH />
          <div className="flex-grow bg-white md:rounded-r-lg md:mr-2 my-2 sm-custom:rounded-lg sm-custom:mx-2 flex flex-col w-screen-lg ">
            <div className="flex flex-row bg-whit rounded-tr-lg border-b-2">
              <div className="m-2 ml-4 mb-4 text-3xl text-left font-bold">
                Experiences
              </div>
              <div className="flex-grow"></div>
              <button
                className="block p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
                onClick={showPopup}
              >
                + Add New
              </button>
            </div>
            {expContent(loading)}
            
            <div className="flex-grow bg-whit rounded-br-lg"></div>
            <div className="flex flex-row place-content-center bg-whit p-1 rounded-lg">
              <button className="hover:bg-red-200 py-1"> <BsCaretLeft /> </button>
              <button className="hover:bg-red-200 py-1"> <BsCaretRight /> </button>
            </div>
          </div>
        </div>
      )
    );
  };
  // rendering of whole is done over here.
  return (
    <div>
      {renderPopup()}
      {renderContent()}
    </div>
  );
}
export default Experiences;
