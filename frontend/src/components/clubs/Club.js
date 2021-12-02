/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react'
import axios from 'axios';

import Spinner from '../Spinner';
import {PostAdd} from "@mui/icons-material";

import Event from './Event';
import AddNewEvent from './AddNewEvent';

import { useHistory } from "react-router";
import { useAuth } from '../../authContext/AuthContext';
import { SidebarH } from '../../App';
import {feed_styles} from './clubs_className'



export default function Club(props) 
{
	//Variables required for a Club page
	let {user,loading}=useAuth();
	const [postsData,updatePosts]=useState([]);
	const [Loading,setLoading]=useState(true);
	const [ownerData,setOwnerData]=useState([]);
	const {history} = useHistory();

	const whichClub=props.name;

	const [popup,setPopup]=useState(false);

    //Fetch posts from the Server
	useEffect(() => {
		axios
		.get("/api/clubs/"+whichClub)
		.then((res) => {
			updatePosts(res.data);
			setLoading(false);
		})
		.catch((err) => console.log(err));
		axios.get("/api/clubs/"+whichClub+"/access")
			.then((res)=>{
				setOwnerData(res.data[0].members);
			})
			.catch((err)=>console.log(err));
	},[]);

	//Function that is called to toggle the popup for adding new posts
	function showPopup(event)
	{
		setPopup(true);
		event.preventDefault();
	}

	//Button i.e. Toggle for the popup
	const addButton = () => {
		return (  
			<button className="block p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
				onClick={showPopup}>
				<svg className="h-svg-icon-small w-svg-icon-small self-center">
                	<PostAdd/>
              	</svg>
			</button>
		);
	}

	//Renders every post in the feed using the Event component
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

	//Handles addition of a new post to the feed and updates feed
	const addNewEvent = async (data) => {
		setLoading(true);
		await axios.post("/api/clubs/newpost",data);
	
		await axios.get("/api/clubs/"+whichClub)
					.then((res) => {
						  updatePosts(res.data);
						  setLoading(false);
						})
					.catch((err) => console.log(err));
	  };

	//Popup used to add new post
	const renderPopup=()=>{return (popup && <AddNewEvent visibility={setPopup} addEvent={addNewEvent} club={whichClub} />);}

	//Content of the clubs page i.e. the feed
    const renderContent = ()=>{
		return(
		!popup &&
		(
		// Club Feed
		<div className={feed_styles.feed__body}>
			{/* Sidebar */}
            <SidebarH hasEditor={false}/>

			{/* Feed Content */}
            <div className={feed_styles.feed__content}>
				{/* Header */}
				<div className={feed_styles.feed__header}>
            		<div className={feed_styles.feed__flex_grow}/>
              		<div className={feed_styles.header__title}>
						<svg xmlns="http://www.w3.org/2000/svg" className={feed_styles.header__svg} fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
						</svg>
						{props.name}
              		</div>
              		<div className={feed_styles.feed__flex_grow}></div>
					  {Loading?<Spinner/>:ownerData.includes(user.email) && addButton()}
            	</div>
				

				{Loading?<Spinner/>:
					// Render all the posts for the feed. The actual content
					<div className={feed_styles.feed__posts}>
							{postsData.map((exp) => renderPost(exp))}
					</div>
				}
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