/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import Sidebar from "../Sidebar";
import CollabCard from "./CollabCard";
import Spinner from "../Spinner";
import NewCollab from "./NewCollab";
import { SidebarH } from "../../App";

import {BsCaretLeft, BsCaretRight} from "react-icons/bs"
import Backdrop from '@mui/material/Backdrop';
import draftToHtml from 'draftjs-to-html'
import Parser from 'html-react-parser'

function CollabHome() {
  // All the neccessary useState variables are declared over here.

  const [collabData, setCollabData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popupVisible, setVisibility] = useState(false);
  const history = useHistory();
  const [curr,setCurr]=useState(0);
  const [len,setLen]=useState(0);

  // get the data for collabCards.
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/collab")
      .then((res) => {
        setCollabData(res.data);
        setLen(res.data.length);
        setCurr(0);
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
    // let updatedCollabData = [...collabData];
    // updatedCollabData.push(collab);
    // setCollabData(updatedCollabData);
    // // redirect to the post.
    setLoading(true);
    await axios.post("http://localhost:3001/api/collab", collab);
    await axios
              .get("http://localhost:3001/api/collab")
              .then((res) => {
                    setCollabData(res.data);
                    setLen(res.data.length);
                    setCurr(0);
                    setLoading(false);
                  })
              .catch((err) => console.log(err));
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
        description={Parser(draftToHtml(JSON.parse(collab.description)))}
        author={collab.author}
      />
    );
  };

  // Loads a spinner if the the data is still processing
  // Renders the collaborations if its not loading.
  const collabContent = (loading) => {
    if (loading) return <Spinner />;
    return (
      <div className="grid grid-cols-1 small:grid-cols-2 medium:grid-cols-3 large:grid-cols-4 bg-whit items-center p-2 gap-y-4">
        {collabData.map((collab,index) =>  index>=9*curr && index<9*curr+9 && renderCard(collab))}
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
  // Renders the content of the page when popup is not triggered.
  const renderContent = () => {
    return (
      (
        <div className="h-screen flex flex-row">
          <SidebarH />
          <div className="flex-grow bg-whit large:rounded-r-lg large:mr-2 medium:rounded-r-lg medium:mr-2 my-2 small:rounded-lg small:mx-2 flex flex-col w-screen-lg overflow-y-auto">
          <div className="flex flex-row bg-whit rounded-tr-lg border-b-2 top-0">
            
            <div className="flex-grow"></div>
              <div className="m-2 ml-4 mb-4 text-3xl text-left font-medium flex flex-row gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 self-end" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
                Collab
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
            {collabContent(loading)}
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

  return (
    <div>
      { popupVisible && <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={popupVisible}
        // onClick={handleClose}
      >
        {renderPopup()}
      </Backdrop> }
      {renderContent()}
    </div>
  );
}
export default CollabHome;
