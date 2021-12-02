import { useState } from "react";
import { useAuth } from "../../authContext/AuthContext";
import { TextField } from "@mui/material";

function NewCollab(props) {

	//Variables required for the popup are declared over here
	const initString = {"blocks":[{"key":"8r134","text":" ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}};
	const [tabNumber, setTabNumber] = useState(0);
	const {user} = useAuth();
    const [collab, setCollab] = useState({
        title: "",
        author: "",
		email:user.email,
		displayText:"",
        description: JSON.stringify(initString)
    });

	const addButton= <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 self-center mx-2" viewBox="0 0 20 20" fill="currentColor">
						<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
  					</svg>;


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

	//All the contents tab1, rendering and functionality are taken care of
	const tab1 = () => {
		// Input fields for the New Collab
		return (
			<div className={`modalContent flex flex-col rounded-lg px-10 py-4 w-full h-full bg-white`}>
			
			<div className="w-full h-full flex flex-col justify-between">
	
				<div className="self-center font-semibold text-black text-xl flex flex-row ">
				{addButton}New Collaboration
				
				{/* Text Fields to capture the input */}
				</div>
				<TextField id="outlined-basic" label="Email" variant="filled" onChange={handleChange} value={collab.email} name="email" autoComplete="off" disabled/>
				<TextField id="standard-basic" label="Author" variant="standard" onChange={handleChange} value={collab.author} name="author" autoComplete="off" />
				<TextField id="standard-basic" label="Title" variant="standard" onChange={handleChange} value={collab.title} name="title" autoComplete="off" />
				<TextField id="standard-basic" label="Short-Description" variant="standard" onChange={handleChange} value={collab.displayText} name="displayText" autoComplete="off" />
				<div className="flex flex-col rounded">
					<div className="text-red-300 font-semibold self-center">Please Edit the description of the collaboration later on the wall.</div>
					<div className="text-red-300 font-semibold self-center">Please be very precise !!!</div>
				</div>
				<div className="flex flex-row w-full justify-end z-auto mt-2">
				
				{/* Add and Close Buttons */}
				<button
					className="m-1 hover:bg-blue-700 font-semibold rounded bg-blue-600 px-2 py-1"
					onClick={() => {
					props.addCollab(collab);
					closePopup();
					}}
				>
					Add
				</button>
				<button
					className="m-1 font-semibold rounded bg-blue-600 hover:bg-blue-700  px-2 py-1"
					onClick={closePopup}
				>
					Close
				</button>
				</div>
			</div>
			</div>
		);
	};

	//An array consisting of the tab components
	const Tabs = [tab1()];
	
	//Rendering the popup
	return (
		<div className="modalBackground flex flex-row w-3/5 h-5/6 rounded-lg my-2 bg-blue-300 min-w-new-collab-experience min-h-new-collab-experience">
		{/* <SideBarMini /> */}
		{Tabs[tabNumber]}
		</div>
	);
}

export default NewCollab;
