/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react'
import axios from 'axios';

import Sidebar from '../Sidebar'
import Spinner from '../Spinner';

import Post from './Post';
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

	const whichClub=props;

	const [popup,setPopup]=useState(false);

    useEffect(() => {
		axios
		.get("http://localhost:3001/api/clubs/"+props)
		.then((res) => {
			// console.log(res.data);
			updatePosts(res.data);
			setLoading(false);
		})
		.catch((err) => console.log(err));
		axios.get("http://localhost:3001/api/clubs/"+props+"/access")
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


	const addButton=
		<button className="block p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
			onClick={showPopup}>
			<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 self-center" viewBox="0 0 20 20" fill="currentColor">
				<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
			</svg>
		</button>;

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
				author={props.author}
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
	
		await axios.get("http://localhost:3001/api/clubs/"+props)
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
        (<div className="flex flex-row">
            <Sidebar/>
            <div className="flex-grow bg-whit md:rounded-r-lg md:mr-2 my-2 sm-custom:rounded-lg sm-custom:mx-2 flex flex-col w-screen-lg">
			
				<div className="flex flex-row bg-whit rounded-tr-lg border-b-2 sticky top-0">
            
            		<div className="flex-grow"></div>
              		<div className="m-2 ml-4 mb-4 text-3xl text-left font-medium flex flex-row ">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 self-end" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
						</svg>
						{props}
              		</div>
              		<div className="flex-grow"></div>
             		{loading?<Spinner/>:ownerData.includes(user.email) && addButton}
            	</div>
				

				{Loading?<Spinner/>:

				<div className="flex flex-col bg-whit divide-y space-y-4 justify-items-center">
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