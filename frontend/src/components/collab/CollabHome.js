import React, { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../Sidebar";
import CollabCard from "./CollabCard";
import Spinner from "../Spinner";
import NewCollab from "./NewCollab";

function CollabHome() {

	const [collabData, setCollabData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [popupVisible, setVisibility] = useState(false);

	// get the data for collabCards.
	useEffect(() => {
		axios
		.get("http://localhost:3001/api/collab")
		.then((res) => {
			setCollabData(res.data);
			setLoading(false);
		})
		.catch((err) => console.log(err));
	},[]);

	function addNewCollab(e) 
	{
		setVisibility(true);
		e.preventDefault();
		console.log("ADD");
	}
	
	const renderCard = (collab) => {
		return (
		<CollabCard
		title={collab.title}
		description={collab.description}
		author={collab.author}/>);
	}
	const collabContent = (loading) => {
		if(loading)
			return(
				<Spinner/>
			)
		return(
			<div className="grid grid-cols-2 md:grid-cols-3 place-content-stretch content-around bg-white p-2 rounded-lg flex-grow items-center">
				{collabData.map((collab) => (
				renderCard(collab)
				))}
			</div>
		)
	}

	const showPopup = () => {
		return (popupVisible && <NewCollab visibility={setVisibility}/>);
	}
	const showContent = () => {
		return (!popupVisible &&
		<div className="h-screen flex flex-row">
			<Sidebar />
			<div className="flex-grow bg-white md:rounded-r-lg md:mr-2 my-2 sm-custom:rounded-lg sm-custom:mx-2 flex flex-col w-screen-lg pl-1">
				<div className="flex flex-row">
					<div className="m-2 ml-4 mb-4 text-3xl text-left font-bold">
						Collab
					</div>
					<div className="flex-grow"></div>
					<button
						className="place-self-end block p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
						onClick={addNewCollab}
					>
						+ New Collab
					</button>	
				</div>
				{/* Loading - show the spinner
				* else - show the collabData
				*/}
				{collabContent(loading)}
			</div>
		</div>);
	}

	return (
		<div>
		{showPopup()}
		{showContent()}
		</div>
	);
}
export default CollabHome;
