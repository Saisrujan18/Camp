/* eslint-disable no-unused-vars */
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
  const [curr,setCurr]=useState(0);
  const [len,setLen]=useState(0);

  // Fetching all the content at the beggining itself.
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/experiences")
      .then((res) => {
        setexpData(res.data);
        setLen(res.data.length);
        setCurr(0);
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
    // let updatedexpData = [...expData];
    // updatedexpData.push(exp);
    // setexpData(updatedexpData);
    // redirect to the post.
    setLoading(true);
    await axios.post("http://localhost:3001/api/experiences",exp);

    await axios.get("http://localhost:3001/api/experiences")
                .then((res) => {
                      setexpData(res.data);
                      setLen(res.data.length);
                      setCurr(0);
                      setLoading(false);
                    })
                .catch((err) => console.log(err));
    
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
      <div className="grid grid-cols-1 small:grid-cols-2 medium:grid-cols-3 large:grid-cols-4 bg-whit items-center p-2 gap-y-4">
        {expData.map((exp,index) =>  index>=9*curr && index<9*curr+9 && renderCard(exp))}
      </div>
    );
  };
        // {/* {expData.map((exp,index) => console.log(index,exp))} */}

  // Renders the popup
  const renderPopup = () => {
    return (
      popupVisible && (
        <NewExperience visibility={setVisibility} addExp={addNewExp} />
      )
    );
  };

  function max(l,r)
  {
    if(l<=r)return r;
    return l;
  }
  function min(l,r)
  {
    if(l<=r)return l;
    return r;
  }


  function handleL()
  {
    let temp=max(0,curr-1);
    setCurr(temp);
  }
  function handleR()
  {
    let temp=min(curr+1,(len-len%6)/6);
    setCurr(temp);
  }
  // Renders the content if the popup visibility is false.
  const renderContent = () => {
    return (
      !popupVisible && (
        <div className="h-screen flex flex-row">
          <SidebarH />
          <div className="flex-grow bg-white medium:rounded-r-lg medium:mr-2 my-2 small:rounded-lg small:mx-2 flex flex-col w-screen-lg overflow-y-auto">
            <div className="flex flex-row bg-whit rounded-tr-lg border-b-2 sticky top-0">
            
            <div className="flex-grow"></div>
              <div className="m-2 ml-4 mb-4 text-3xl text-left font-medium flex flex-row gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 self-center" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
                Experiences
              
              </div>
              <div className="flex-grow"></div>
              <button
                className="block p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
                onClick={showPopup}
              >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 self-center" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
              </svg>
              </button>
            </div>
              
              {expContent(loading)}
              <div className="flex-grow bg-whit rounded-br-lg"></div>
              

            <div className="flex flex-row place-content-center bg-whit p-1 rounded-lg sticky bottom-0">
              <button className="hover:bg-gray-200 py-1" onClick={handleL}> <BsCaretLeft size={20}/></button>
              <button className="hover:bg-gray-200 py-1" onClick={handleR}> <BsCaretRight size={20}/></button>
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
