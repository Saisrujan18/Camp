/* eslint-disable no-unused-vars */

import { useState } from "react";
import { AuthProvider } from "../../authContext/AuthContext";

function NewExperience(props) 
{
    // Variables required for the popup are declared over here.
    const [tabNumber, setTabNumber] = useState(0);
    const [exp, setExp] = useState({
        title: "",
        author: "",
        company:"",
        type:"",
        description: "",
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
        <div className={`modalContent flex flex-col justify-start rounded-r-lg p-10 sm-custom:w-{240} md:w-6/12 lg:w-5/12 xl:w-4/12 h-1/2 bg-white`}>
        
        <div className="w-100 h-100">
            <input
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
            />

          <div className="flex flex-row w-full justify-end">
            <button
              className="p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
              onClick={() => {
                props.addExp(exp);
                closePopup();
              }}
            >
              Add
            </button>
            <button
              className="p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
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
        className={`modalContent flex flex-col justify-start rounded-r-lg p-10 sm-custom:w-{240} md:w-6/12 lg:w-5/12 xl:w-4/12 h-1/2 bg-white`}
      >
        <div className="w-100 h-100">
          <input
            className="w-full mx-1 my-2"
            name="author"
            onChange={handleChange}
            value={exp.author}
            placeholder="Name of Author"
          />
          <textarea
            className="w-full mx-1 my-2"
            name="description"
            onChange={handleChange}
            value={exp.description}
            placeholder="Description"
            rows="4"
          />
          <div className="flex flex-row w-full justify-end">
            <button
              className="p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
              onClick={() => {
                props.addExp(exp);
                closePopup();
              }}
            >
              Add
            </button>
            <button
              className="p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
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
        <aside className=" bg-whit text-blue-100 w-25 h-1/2 space-y-6 px-2 py-4 rounded-l-lg">
        <nav className="text-blac">
            <Tab number={0} text="Overview" />
            <Tab number={1} text="Description" />
        </nav>
        </aside>
    );
    };
    // Rendering the popup
    return (
        <div className="modalBackground flex flex-row w-screen h-screen rounded-lg my-2 bg-gray-200 fixed justify-center items-center">
            <SideTabMini />
            {Tabs[tabNumber]}
        </div>
    );
}

export default NewExperience;