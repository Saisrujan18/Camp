/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useParams } from "react-router";
import { useAuth } from "../../authContext/AuthContext";
import { SidebarH } from "../../App";
import Spinner from "../Spinner";
import Edit from "../Edit";
import draftToHtml from 'draftjs-to-html';
import Parser from 'html-react-parser'
import Sidebar from "../../components/Sidebar.js"
import Comments from "../Comments";

export function SingleExp() 
{
  //  ALl the neccessary variables are declared over here.
	const { user } = useAuth();
	const { id } = useParams();
	const [loading, setLoading] = useState(true);

	const [expData, setExpData] = useState({});
	const [showInfo, setShowInfo] = useState(true);
	const [editorNegative, setNegative] =useState(false);

	// Fetching all the neccessary data

	useEffect(() => {
	axios
		.get("/api/experiences/id", { params: {id} })
		.then((res) => {
			console.log("here" + res.data)
			setExpData(res.data);
			setLoading(false);
		})
		.catch((err) => console.log(err));
	}, []);

	function setEditor(flag){setNegative(flag)}

	// Renders the content of the whole screen.
	return (
	// total screen
		<div className="h-screen flex flex-row">
			{/* left sidebar */}
			<SidebarH hasEditor={true} handleEditor={setEditor}/>

			{/* Loads the spinner if its still loading or else rendering the content */}
			<div className={"flex-grow bg-whit small_l:my-2 medium_l:rounded-r-lg medium_l:mr-2 small:rounded-lg small:mx-2 flex flex-col w-screen-lg overflow-y-auto"+((editorNegative)?" -z-10":"")}>
				{/* above of center */}
				{loading ? (<Spinner />) : 
				(
					<div className="flex flex-col large:w-3/4 medium:w-5/6 small:w-5/6 w-full h-auto self-center mt-1 mb-1 min-h-full overflow-y-auto rounded-md shadow-lg bg-white">
						<div className="mx-3 ">
							{/* The Whole Project Description */}
							<div className="flex flex-col">
								<div className="rounded-full py-1 px-2 text-sm font-semibold  text-white mr-auto mt-4 bg-green-400">
									{expData.author}
								</div>
								
								<div className="rounded-lg">
									<h1 className=" text-2xl md:text-3xl text-justify font-bold my-6">
										{expData.title}
									</h1>
						
									{/* Inpage navigation */}
									<div className="flex flex-row">
										<div
											to="/experiences"
											className={
											"text-md border-b-2 mt-2 mr-3 pl-4 pr-4 p-1 " +
											(showInfo ? "border-darkBlu" : "border-whit hover:border-gray-300 cursor-pointer")
											}
											onClick={() => {
											setShowInfo(true);
											}}
										>
											Info
											
										</div>
										<div
											to="/experiences"
											className={
											"text-md border-b-2 mt-2 pl-4 pr-4 p-1 " +
											(!showInfo ? "border-darkBlu" : "border-whit hover:border-gray-300 cursor-pointer")
											}
											onClick={() => {
											setShowInfo(false);
											}}
										>
											Comments
											
										</div>
									</div>
									<hr className="bg-whit h-0.5 border-none rounded-sm"/>
								</div>
							</div>
						</div>

				{/* below of center */}
				{showInfo?
				<main className="flex-1 mx-4  my-2 flex flex-col">
					<div className={"rounded-full py-1 px-2  font-semibold m-auto bg-orange-400 mb-2" + (showInfo ? "" : " hidden")}>
					Description
					</div>
					<div className='ml-1 px-2 rounded-lg h-full cursor-default'>
						<Edit 
							sendTo = {"/api/experiences/id"}
							id = {id}
							data = {expData}
							turn = {1}
							editable = {user.email === expData.email}
						/>
					</div>
					<div className="flex-grow bg-white mb-2 rounded-b-lg "></div>
				</main>
				:<Comments currentUser={user.email} comments={[{text:"Hello this seems very interesting what are you up to now? asdf asdf asd asdf a", time:"13:40", username:"Dumped"}]}/>
				}
				</div>
			)}
			</div>
		</div>
	);
}