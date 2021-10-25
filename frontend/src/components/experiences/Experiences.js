import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import Sidebar from "../Sidebar";
import ExpCard from "./ExpCard";
import Spinner from "../Spinner";
import NewExperience from "./NewExperience";

function Experiences() 
{
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
	},[]);

	// Triggers the popup visibility
	function showPopup(e) 
	{
		setVisibility(true);
		e.preventDefault();
	}

	// Handles the request to add new experience
	const addNewExp = async (exp) => 
	{
		let updatedexpData = [...expData];
		updatedexpData.push(exp);
		setexpData(updatedexpData);
		// redirect to the post.
		await axios.post("http://localhost:3001/api/experiences",exp)
	}

	// A function to render the contents of all experiences
	const renderCard = (exp) => {
		const navigate = (exp_id) => {
			history.push("/experiences/"+exp_id)
		}

		return (
		<ExpCard
		_id = {exp._id}
		navigate = {navigate}
		title={exp.title}
		company={exp.company}
		description={exp.description}
        type={exp.type}
		author={exp.author}/>);
	}
	// Loads a spinner if the content is being fetched
	// or else renders the content in a certain format. 
	const expContent = (loading) => {
		if(loading)
			return(
				<Spinner/>
			)
		return(
			<div className="grid grid-cols-2 md:grid-cols-3 place-content-stretch content-around bg-white p-2 rounded-lg flex-grow items-center">
				{expData.map((exp) => (
					renderCard(exp)
				))}
			</div>
		)
	}

	// Renders the popup
	const renderPopup = () => {
		return (popupVisible && <NewExperience visibility={setVisibility} addExp={addNewExp}/>);
	}
	// Renders the content if the popup visibility is false.
	const renderContent = () => {
		return (!popupVisible &&
		<div className="h-screen flex flex-row">
			<Sidebar />
			<div className="flex-grow bg-white md:rounded-r-lg md:mr-2 my-2 sm-custom:rounded-lg sm-custom:mx-2 flex flex-col w-screen-lg pl-1">
				<div className="flex flex-row">
					<div className="m-2 ml-4 mb-4 text-3xl text-left font-bold">
						Experiences
					</div>
					<div className="flex-grow"></div>
					<button
						className="place-self-end block p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
						onClick={showPopup}
					>
						+ New Experience
					</button>	
				</div>
				{expContent(loading)}
			</div>
		</div>);
	}
	// rendering of whole is done over here. 
	return (
		<div>
		{renderPopup()}
		{renderContent()}
		</div>
	);
}
export default Experiences;
