import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import Sidebar from '../Sidebar'
import axios from "axios";
import { useAuth } from '../../authContext/AuthContext';
import './Collab.css'
import Spinner from '../Spinner';

export function Collab() {

    // All the useState variables that might be used are declared over here.

    const {user}=useAuth()
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [collabData, setCollabData] = useState({});
    const [showInfo, setShowInfo] = useState(true);
    const [showMembers, setShowMembers] = useState(false);
    
    // Fetching all the data required to show in this page
    useEffect(() => {
        axios.post("http://localhost:3001/api/collab/id", {id})
        .then((res) => {

            // receive the data.
			setCollabData(res.data);
			setLoading(false);
		})
        .catch((err) => console.log(err));
    },[]);

    // A resuable component to show the members of the collab.
    const getMember = (member) => {
        return (
            <div className='bg-white rounded-lg p-4 shadow-lg border '>
                <p className=''> {member} </p>
            </div>
        )
    }

    // A resuable component to show the links related to the collab.
    const getLinks = (link) => {
        return (
            <li className='bg-white rounded-lg p-4 shadow-lg border'> 
                <a href='/'> {link} </a>
            </li>
        )
    }

    // The join request  of a specific user is handled over here. 
    async function addMember()
    {
        const {email} =user;
        const {members}=collabData;
        axios.post("http://localhost:3001/api/collab/id/join", {email,id,members})
        .then((res) => {
            const newCollabData=collabData
            newCollabData.members=[...res.data];
			console.log(res.data);
            setCollabData(newCollabData);
			setLoading(false);
		})
        .catch((err) => console.log(err));
    }

    return (

       <div className='h-screen flex '>
            
            {/* Side bar appears on the left as default.*/}
            <Sidebar />
            
            {/* If the data is being processed we render a loading spinner */}
            {/* Or else we show the content of the page */}
            

            {loading?<Spinner/>:
            
            <div className=" overflow-y-auto flex-grow flex-1 flex flex-col max-w-screen-lg p-3 bg-white my-2 mr-2 rounded-r-lg">
                
                <div className=" border-gray-200">
                    {/* The Whole Project Description */}
                    <div>
                        <div className='bg-whit rounded-lg m-2 '>
                           
                            <div className='rounded-xl text-5xl m-2 justify-center flex '>
                                <p className='text-5xl p-3 m-1 font-serif font-bold'> {collabData.title} </p>
                            </div>

                            <div className='flex place-content-end'>
                                <p className=' rounded-lg text-lg m-2 pl-4 pr-4 p-1 font-bold '> {collabData.author} </p>
                            </div>

                            {/* Inpage navigation */}
                            <div className='flex'>
                                <button to='/collab' className={'font-bold rounded-lg text-md m-2 pl-4 pr-4 p-1 hover:bg-gray-200 ' + 
                                'transition duration-500 ease-in-out ' + (showInfo? ' bg-gray-200 transform scale-110' : '')} onClick={() => {setShowInfo(true);  setShowMembers(false)}}> Info </button>

                                <button to='/collab' className={'font-bold rounded-lg text-md m-2 pl-4 pr-4 p-1 hover:bg-gray-200 ' + 
                                'transition duration-500 ease-in-out ' + (showMembers? ' bg-gray-200 transform scale-110': "")} onClick={() => {setShowInfo(false); setShowMembers(true)}}> Members </button>

                                {/* <button to='/collab' className={'font-bold rounded-lg text-md m-2 pl-4 pr-4 p-1 hover:bg-gray-200 ' +
                                ' transition duration-500 ease-in-out ' + (showChat ? " bg-gray-200 transform scale-110" : '')} onClick={() => {setShowInfo(false); setShowChat(true); setShowMembers(false)}}> Chat </button> */}

                                {!collabData.members.includes(user.email)  && <button className={'font-bold rounded-lg text-md m-2 pl-4 pr-4 p-1 ml-auto hover:bg-blue-500 transition duration-500 ease-in-out'} onClick={addMember}> Join </button>}
                            
                            </div>
                        
                        </div>

                            <hr className='bg-gray-500 h-0.5 border-none rounded-xl'></hr>
                    
                    </div>
                </div>

                <main className="flex-1 p-2 bg-white ">
                        {/* Description*/}
                        <h1 className={'font-bold m-1 ' + (showInfo ? '' : ' hidden')}> Description </h1>
                        <div className={'bg-white rounded-lg text-1xl p-2 shadow-md font-sans ' + (showInfo ? "" : "hidden")}> 
                            <p>{collabData.description} </p>
                        </div>

                        {/* Members */}
                        <div className={(showMembers ? "space-y-1 m-2" : "hidden")}>
                            {
                                collabData.members.map(member => (
                                    getMember(member)
                                ))
                            }
                        </div>
                </main>
            
            </div>
        }
        </div>
    )
}
