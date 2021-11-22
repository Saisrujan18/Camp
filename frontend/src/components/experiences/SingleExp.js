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
		.get("api/experiences/id", { params: {id} })
		.then((res) => {
		setExpData(res.data);
		setLoading(false);
		console.log(res.data);
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
			<div className={"flex-grow bg-whit large:rounded-r-lg large:mr-2 medium:rounded-r-lg medium:mr-2 my-2 small:rounded-lg small:mx-2 flex flex-col w-screen-lg overflow-y-auto"+((editorNegative)?" -z-10":"")}>
				{/* above of center */}
				{loading ? (<Spinner />) : 
				(
					<div className="flex flex-col large:w-3/4 medium:w-5/6 small:w-5/6 w-full self-center h-full mt-4 mb-2 rounded-lg shadow-lg bg-white ">
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
									<div className="flex">
										<button
											to="/experiences"
											className={
											"text-md border-b-2 mt-2 pl-4 pr-4 p-1 " +
											(showInfo ? "border-darkBlu" : "border-whit hover:border-gray-300")
											}
											onClick={() => {
											setShowInfo(true);
											}}
										>
											Info
											
										</button>
									</div>
									<hr className="bg-whit h-0.5 border-none rounded-sm"/>
								</div>
							</div>
						</div>

				{/* below of center */}
				<main className="flex-1 mx-4  my-2 flex flex-col overflow-y-auto ">
					<h1 className={"rounded-full py-1 px-2  font-semibold m-1 m-auto bg-orange-400 mb-2 " + (showInfo ? "" : " hidden")}>
					{" "}
					Description{" "}
					</h1>
					<div className=' pl-2 bg-whit rounded-t-lg '>
					<Edit 
						sendTo = {"api/experiences/id"}
						id = {id}
						data = {expData}
						turn = {1}
						editable = {user.email === expData.email}
					/>
					</div>
					<div className="flex-grow bg-whit mb-2 rounded-b-lg "></div>
				</main>
				</div>
			)}
			</div>
		</div>
	);
}