/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react'
import axios from 'axios';

import Sidebar from '../Sidebar'
import Spinner from '../Spinner';
import {PostAdd} from "@mui/icons-material";

import Event from './Event';
import AddNewEvent from './AddNewEvent';

import { useHistory } from "react-router";
import { useAuth } from '../../authContext/AuthContext';



export default function Club(props) 
{
	let {user,loading}=useAuth();

	const [postsData,updatePosts]=useState([]);
	const [Loading,setLoading]=useState(true);
	const [ownerData,setOwnerData]=useState([]);
	const {history} = useHistory();

	const whichClub=props.name;

	const [popup,setPopup]=useState(false);

    useEffect(() => {
		axios
		.get("http://localhost:3001/api/clubs/"+whichClub)
		.then((res) => {
			// console.log(res.data);
			updatePosts(res.data);
			setLoading(false);
		})
		.catch((err) => console.log(err));
		axios.get("http://localhost:3001/api/clubs/"+whichClub+"/access")
			.then((res)=>{
				setOwnerData(res.data[0].members);
			})
			.catch((err)=>console.log(err));
	},[]);

	function showPopup(e)
	{
		setPopup(true);
		e.preventDefault();
	}

	const addButton = () => {
		return (  
			<button className="block p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
				onClick={showPopup}>
				<svg className="h-6 w-6 self-center">
                	<PostAdd/>
              	</svg>
			</button>
		);
	}

	function renderPost(props)
	{
		const navigate = (exp_id) => {
			history.push("/clubs/"+exp_id);
		  };
		return (
			<Event
			club={props.club}
			hasImage={props.hasImage}
			imageData={props.imageData}
			title={props.title}
			userid={props.userid}
			username={props.author}
			verified={true}
			description={props.description}
			registrable={props.registrable}
			registered= {props.registered}
			navigate={navigate}
			/>
		);
	}

	const addNewEvent = async (data) => {
		setLoading(true);
		await axios.post("http://localhost:3001/api/clubs/newpost",data);
	
		await axios.get("http://localhost:3001/api/clubs/"+whichClub)
					.then((res) => {
						  updatePosts(res.data);
						  setLoading(false);
						})
					.catch((err) => console.log(err));
	  };

	const renderPopup=()=>{return (popup && <AddNewEvent visibility={setPopup} addEvent={addNewEvent} club={whichClub} />);}

    const renderContent = ()=>{
		return(
		!popup &&
		(<div className="flex flex-row h-screen">
            <Sidebar/>
            <div className="flex-grow bg-whit large:rounded-r-lg large:mr-2 medium:rounded-r-lg medium:mr-2 my-2 small:rounded-lg small:mx-2 flex flex-col w-screen-lg">
			
				<div className="flex flex-row bg-whit rounded-tr-lg border-b-2 top-0">
            
            		<div className="flex-grow"></div>
              		<div className="m-2 ml-4 mb-4 text-3xl text-left font-medium flex flex-row ">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 self-end" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
						</svg>
						{props.name}
              		</div>
              		<div className="flex-grow"></div>
					  {/* {Loading?<Spinner/>:ownerData.includes(user.email) && addButton()} */}
					  {Loading?<Spinner/>:addButton()}
            	</div>
				

				{Loading?<Spinner/>:

				<div className="flex flex-col sm:mx-1 my-2 mx-0 bg-whit divide-y space-y-4 items-stretch overflow-y-scroll">
						{postsData.map((exp) => renderPost(exp))}
				</div>
				}

				<div className="flex-grow bg-whit rounded-br-lg"></div>
			</div>
        </div>)
		);
	}

	return(
		<div>
			{renderPopup()}
			{renderContent()}
		</div>
	);
}
		// <div className="grid grid-cols-1 small:grid-cols-2 medium:grid-cols-3 large:grid-cols-4 bg-whit items-center p-2 gap-y-4 divide-y">