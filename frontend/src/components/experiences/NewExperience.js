/* eslint-disable no-unused-vars */

import { useState } from "react";
import { AuthProvider } from "../../authContext/AuthContext";
import { EditorState, convertFromRaw } from 'draft-js';
import { TextField } from "@mui/material";
import { yellow } from "@mui/material/colors";
// import CancelIcon from '@mui/icons-material/Cancel';

function NewExperience(props) 
{
    // Variables required for the popup are declared over here.
    const initString = {"blocks":[{"key":"8r134","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}};
    const [tabNumber, setTabNumber] = useState(0);
    const [exp, setExp] = useState({
        title: "",
        author: "",
        company:"",
        type:"",
        description: JSON.stringify(initString),
    });
    //  Handles the change in content of the experiences.
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setExp((prevNote) => {
        return {
            ...prevNote,
            [name]: value,
        };
        });
    };
  
    // Closes the popup and renders the content of experiences page
    const closePopup = () => {props.visibility(false)};

    // Function to handle the change in tans of the popup.
    const setTab = (event, number) => {
        if (number !== tabNumber){setTabNumber(number);}
        event.preventDefault();
    };

    // Tab is the left side of the popup which renders the content of all tabs .
    const Tab = (props) => {
        return (
            <button
                className="block py-2 pr-1 w-full hover:text-darkBlu hover:bg-gray-200 font-bold text-xs rounded"
                onClick={(event) => {
                setTab(event, props.number);
                }}
            >
                {props.text}
            </button>
        );
    };
    // ALl the contents tab1 ,rendering and fucntionality are taken care of
    const tab1 = () => {
        return (
        <div className={`modalContent flex flex-col rounded-r-lg p-10 w-full h-full bg-white`}>
        
        <div className="w-full h-full flex flex-col justify-between">

            <TextField id="standard-basic" label="Title" variant="standard" onChange={handleChange} value={exp.title} name="title" autoComplete="off" />
            <TextField id="standard-basic" label="Role Offered" variant="standard" onChange={handleChange} value={exp.type} name="type" autoComplete="off" />
            <TextField id="standard-basic" label="Company" variant="standard" onChange={handleChange} value={exp.company} name="company" autoComplete="off" />

            {/* <input
                className="w-full mx-1 my-2"
                name="title"
                onChange={handleChange}
                value={exp.title}
                placeholder="Title"
            />
            <input
                className="w-full mx-1 my-2"
                name="type"
                onChange={handleChange}
                value={exp.type}
                placeholder="Type of role offered"
            />
            <input
                className="w-full mx-1 my-2"
                name="company"
                onChange={handleChange}
                value={exp.company}
                placeholder="Company Name"
            /> */}

          <div className="flex flex-row w-full justify-end z-auto ">
            <button
              className="p-2 m-1 hover:bg-blue-700 font-bold rounded bg-blue-600"
              onClick={() => {
                props.addExp(exp);
                closePopup();
              }}
            >
              Add
            </button>
            <button
              className="p-2 m-1 hover:bg-blue-700 font-bold rounded bg-blue-600"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  // ALl the contents tab2 ,rendering and fucntionality are taken care of
  const tab2 = () => {
    return (
      <div
        className={`modalContent flex flex-col justify-start rounded-r-lg p-10 w-full h-full bg-white`}
      >
        <div className="w-full h-full justify-between flex flex-col">
          {/* <input
            className="w-full mx-1 my-2"
            name="author"
            onChange={handleChange}
            value={exp.author}
            placeholder="Name of Author"
          /> */}

          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange}/>
          <TextField id="filled-basic" label="Filled" variant="filled" /> */}

          <TextField id="standard-basic" label="Author" variant="standard" onChange={handleChange} value={exp.author} name="author" autoComplete="off"/>
          {/* <textarea
            className="w-full mx-1 my-2"
            name="description"
            onChange={handleChange}
            value={exp.description}
            placeholder="Description"
            rows="4"
          /> */}
          <div className="flex flex-row w-full justify-end ">
            <button
              className="p-2 m-1 hover:bg-blue-700 font-bold rounded bg-blue-600"
              onClick={() => {
                props.addExp(exp);
                closePopup();
              }}
            >
              Add
            </button>
            <button
              className="p-2 m-1 hover:bg-blue-700 font-bold rounded bg-blue-600"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

    // An array to help switching in between tabs.  
    const Tabs = [tab1(), tab2()];
  //  This consists of the leftside of the popup.
    const SideTabMini = () => {
    return (
        <aside className="font-sans bg-blue-300 text-blue-100 w-25 h-1/2 space-y-6 px-2 py-4 rounded-l-lg m-2">
          <nav className="text-blac flex flex-col h-full p-2 ">
              <Tab number={0} text="Overview"/>
              <Tab number={1} text="Description"/>
          </nav>
        </aside>
    );
    };
    // Rendering the popup
    return (
        <div className="modalBackground flex flex-row w-2/5 h-1/2 rounded-lg my-2 bg-blue-300 ">
            <SideTabMini />
            {Tabs[tabNumber]}
        </div>
    );
}

export default NewExperience;