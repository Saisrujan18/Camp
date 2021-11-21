/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AuthProvider, useAuth } from "../../authContext/AuthContext";
import { TextField } from "@mui/material";

function NewCollab(props) {

	//Variables required for the popup are declared over here
	const initString = {"blocks":[{"key":"8r134","text":" ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}};
	const [tabNumber, setTabNumber] = useState(0);
	const {user} = useAuth();
    const [collab, setCollab] = useState({
        title: "",
        author: user.email,
        description: JSON.stringify(initString),
        links: "",
    });
	//Handles the change in content of the current collab
	const handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		setCollab((prevNote) => {
			return {
			...prevNote,
			[name]: value,
			};
		});
	};

	//Closes the popup and renders the content of collaborations on the collab page
	const closePopup = () => {props.visibility(false)};

	//Function to set the tab number i.e. switch between tabs
  	const setTab = (event, number) => {
    	if (number !== tabNumber) setTabNumber(number);
    	event.preventDefault();
  	};

	//Each tab label template that acts as a button to switch between tabs
  	const Tab = (props) => {
    	return (
      		<button
        		className="block py-2 px-2 w-full hover:text-darkBlu hover:bg-gray-200 font-bold text-xs rounded"
        		onClick={(event) => {setTab(event, props.number)}}>
        		{props.text}
      		</button>
    	);
  	};

	//All the contents tab1, rendering and functionality are taken care of
	const tab1 = () => {
    	return (
			<div className={`modalContent flex flex-col rounded-r-lg p-10 w-full h-full bg-white`}>
				
				<div className="w-full h-full flex flex-col justify-between">
					
					<TextField id="standard-basic" label="Project Title" variant="standard" onChange={handleChange} value={collab.title} name="title" autoComplete="off"/>
					<TextField
						id="standard-multiline-static"
						label="Links"
						multiline
						rows={4}
						defaultValue="Default Value"
						variant="standard"
						name="links"
						value={collab.links}
						onChange={handleChange}
					/>
					<div className="flex flex-row w-full justify-end">
						<button
						className="p-2 m-1 hover:bg-blue-700 font-bold rounded bg-blue-600"
						onClick={() => {
							props.addCollab(collab);
							closePopup();
						}}>Add</button>

						<button
						className="p-2 m-1 hover:bg-blue-700 font-bold rounded bg-blue-600"
						onClick={closePopup}
						>Close</button>
					</div>	
				</div>
			</div>
    	);
	};
	//All the contents tab2, rendering and functionality are taken care of
 	const tab2 = () => {	
		return (
		
		<div className={`modalContent flex flex-col justify-start rounded-r-lg p-10 w-full h-full bg-white`}>
			
			<div className="w-full h-full justify-between flex flex-col">

				<TextField id="standard-basic" label="Name of Author" variant="standard" onChange={handleChange} value={collab.author} name="author" autoComplete="off" disabled/>
				<div className="flex flex-row w-full justify-end">
					<button
					className="p-2 m-1 hover:bg-blue-700 font-bold rounded bg-blue-600"
					onClick={() => {
						props.addCollab(collab);
						closePopup();
					}}>Add</button>
					
					<button
						className="p-2 m-1 hover:bg-blue-700 font-bold rounded bg-blue-600"
						onClick={closePopup}
					>Close</button>
			
				</div>
			</div>
		</div>
    	);
	};

	//An array consisting of the tab components
	const Tabs = [tab1(), tab2()];
	//MiniSidebar used to switch between tabs
	const SideBarMini = () => {
		return (
		<aside className=" bg-blue-300 text-blue-100 w-25 h-1/2 space-y-6 px-2 py-4 rounded-l-lg m-2">
			<nav className="text-blac flex flex-col h-full p-2 ">
			<Tab number={0} text="Overview" />
			<Tab number={1} text="Description" />
			</nav>
		</aside>
		);
	};
	//Rendering the popup
	return (
		<div className="modalBackground flex flex-row w-3/5 h-2/3 rounded-lg my-2 bg-blue-300 min-w-new-collab-experience min-h-new-collab-experience">
		<SideBarMini />
		{Tabs[tabNumber]}
		</div>
	);
}

export default NewCollab;
