import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import Sidebar from "../Sidebar";
import ExpCard from "./ExpCard";
import Spinner from "../Spinner";
import NewExperience from "./NewExperience";

function Experiences() 
{
	const [expData, setexpData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [popupVisible, setVisibility] = useState(false);
	const history = useHistory();

	useEffect(() => {
		axios
		.get("http://localhost:3001/api/experiences")
		.then((res) => {
			setexpData(res.data);
			setLoading(false);
		})
		.catch((err) => console.log(err));
	},[]);

	function showPopup(e) 
	{
		setVisibility(true);
		e.preventDefault();
	}

	const addNewExp = async (exp) => 
	{

		let updatedexpData = [...expData];
		updatedexpData.push(exp);
		setexpData(updatedexpData);
		// redirect to the post.
		await axios.post("http://localhost:3001/api/experiences",exp)
	}

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

	const renderPopup = () => {
		return (popupVisible && <NewExperience visibility={setVisibility} addExp={addNewExp}/>);
	}
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

	return (
		<div>
		{renderPopup()}
		{renderContent()}
		</div>
	);
}
export default Experiences;
