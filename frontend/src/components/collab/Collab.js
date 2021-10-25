import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import Sidebar from '../Sidebar'
import axios from "axios";
import { useAuth } from '../../authContext/AuthContext';
import './Collab.css'
import Spinner from '../Spinner';

export function Collab() {

    const {user}=useAuth()
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [collabData, setCollabData] = useState({});
    const [showInfo, setShowInfo] = useState(true);
    const [showMembers, setShowMembers] = useState(false);
    
    useEffect(() => {
        axios.post("http://localhost:3001/api/collab/id", {id})
        .then((res) => {

            // receive the data.
			setCollabData(res.data);
			setLoading(false);
		})
        .catch((err) => console.log(err));
    },[]);

    // const [showChat, setShowChat] = useState(false);
    // Shows the current contributors for the project

    const getMember = (member) => {
        return (
            <div className='bg-white rounded-lg p-4 shadow-lg border '>
                <p className=''> {member} </p>
            </div>
        )
    }

    // Returns the important links included by the project owner
    const getLinks = (link) => {
        return (
            <li className='bg-white rounded-lg p-4 shadow-lg border'> 
                <a href='/'> {link} </a>
            </li>
        )
    }


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
        // total screen
       <div className='h-screen flex '>
            
            {/* left sidebar */}
            
            <Sidebar />

            {/* center part */}
            {loading?<Spinner/>:
            <div className=" overflow-y-auto flex-grow flex-1 flex flex-col max-w-screen-lg p-3 bg-white my-2 mr-2 rounded-r-lg">
                {/* above of center */}
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

                {/* below of center */}
                <main className="flex-1 p-2 bg-white ">
                        <h1 className={'font-bold m-1 ' + (showInfo ? '' : ' hidden')}> Description </h1>
                        <div className={'bg-white rounded-lg text-1xl p-2 shadow-md font-sans ' + (showInfo ? "" : "hidden")}> 
                            <p>{collabData.description} </p>
                            {/* <div className=' space-y-1'>
                                <h1 className='m-1 font-bold'> Links </h1>
                                {
                                    links.map(link => (
                                        getLinks(link)
                                    ))
                                }
                            </div> */}
                        </div>

                        {/* Members */}
                        <div className={(showMembers ? "space-y-1 m-2" : "hidden")}>
                            {
                                collabData.members.map(member => (
                                    getMember(member)
                                ))
                            }
                        </div>

                        {/* Chat */}
                        {/* <div className={(showChat ? "space-y-1 m-2" : "hidden")}>
                            I dont know what chat includes
                        </div> */}


                        
                </main>
            </div>
        }
        </div>
    )
}
