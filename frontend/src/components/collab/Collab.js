import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import { useAuth } from "../../authContext/AuthContext";
import Spinner from "../Spinner";
import { SidebarH } from "../../App";
import Edit from "../Edit";

export function Collab()
{
	// All the useState variables that might be used are declared over here.
	const { user } = useAuth();
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [collabData, setCollabData] = useState({});
	const [showInfo, setShowInfo] = useState(true);
	const [showMembers, setShowMembers] = useState(false);
	const [editorNegative, setNegative] =useState(false);

	// Fetching all the data required to show in this page
	useEffect(() => {
		axios
		.get("/api/collab/id", { params: {id} })
		.then((res) => {
			// receive the data.
			setCollabData(res.data);
			setLoading(false);
		})
		.catch((err) => console.log(err));
	}, []);

	// A resuable component to show the members of the collab.
	const getMember = (member) => {
		return (
		<div className=" rounded-lg p-2 mt-1 border hover:bg-whit">
			<p> {member} </p>
		</div>
		);
	};

	// The join request of a specific user is handled over here.
	async function addMember() {
		const { email } = user;
		const { members } = collabData;
		axios
		.post("/api/collab/id/join", { email, id, members })
		.then((res) => {
			const newCollabData = {...collabData};
			newCollabData.members = [...res.data];
			setCollabData(newCollabData);
			setLoading(false);
		})
		.catch((err) => console.log(err));
	}
	function setEditor(flag)
	{
		setNegative(flag)
	}

	return (
	<div className="h-screen flex flex-row">
		{/* Side bar appears on the left as default.*/}
		<SidebarH hasEditor={true} handleEditor={setEditor}/>
		{/* If the data is being processed we render a loading spinner */}
		{/* Or else we show the content of the page */}

		<div className={"flex-grow bg-whit small_l:my-2 medium_l:rounded-r-lg medium_l:mr-2 small:rounded-lg small:mx-2 flex flex-col w-screen-lg overflow-y-auto"+((editorNegative)?" -z-10":"")}>
			{loading ? (
				<Spinner />
			) : (
				<div className="flex flex-col large:w-3/4 medium:w-5/6 small:w-5/6 w-full h-auto self-center mt-1 mb-1 min-h-full rounded-md shadow-lg overflow-y-auto bg-white">
					<div className="mx-3">
						{/* The Whole Project Description */}
						<div className="flex flex-col">
							<div className=" rounded-full py-1 px-2 text-sm font-semibold text-white mr-auto mt-4 bg-green-400">{collabData.author}</div>
							
							<div className="rounded-lg">
								<h1 className="text-2xl md:text-3xl text-justify font-bold my-6">
								{collabData.title}
								</h1>
								
								{/* Inpage navigation */}
								<div className="flex flex-row">
									<div
										to="/collab"
										className={
										"text-md border-b-2 mt-2 mr-3 pl-4 pr-4 p-1 cursor-pointer " +
										(showInfo ? "border-darkBlu" : "border-whit hover:border-gray-300")
										}
										onClick={() => {
										setShowInfo(true);
										setShowMembers(false);
										}}
									>
										Info
									</div>

									<div
										to="/collab"
										className={
										"text-md border-b-2 mt-2 pl-4 pr-4 p-1 cursor-pointer " +
										(showMembers ? "border-darkBlu" : "border-whit hover:border-gray-300")
										}
										onClick={() => {
										setShowInfo(false);
										setShowMembers(true);
										}}
									>
										Members
									</div>
										{!collabData.members.includes(user.email) && (
											<button
											className={
												"font-bold rounded-lg text-md m-2 pl-4 pr-4 p-1 ml-auto hover:bg-blue-200 transition duration-500 ease-in-out"
											}
											onClick={addMember}
											>
											Join
											</button>
										)}
									</div>
								</div>

								<hr className="bg-whit h-0.5 border-none rounded-sm"/>
							</div>
						</div>

					<main className="flex-1 mx-4 my-2 flex flex-col">
						{/* Description*/}
						<h1 className={"rounded-full py-1 px-2 font-semibold m-auto bg-orange-400 mb-2 " + (showInfo ? "" : " hidden")}>
						{" "}
						Description{" "}
						</h1>

						{/* Editor for updating the description */}
						<div
						className={
							"ml-1 px-2 rounded-lg h-full " +
							(showInfo ? "" : "hidden")}>
							<Edit 
								sendTo = {"/api/collab/id"}
								id = {id}
								data = {collabData}
								turn = {0}
								editable = {user.email === collabData.email}
							/>
						</div>

						{/* Shows the Members who are currently in the project */}
						<div className={showMembers ? "space-y-2 m-2" : "hidden"}>
							{collabData.members.map((member) => getMember(member))}
						</div>
						<div className={"flex-grow bg-white mb-2 rounded-b-lg "+(showInfo?"bg-whit":"bg-white")}></div>
					</main>
				</div>
			)}
			</div>
		
		</div>
	);
}

