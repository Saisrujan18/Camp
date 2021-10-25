/* eslint-disable no-unused-vars */

import { React, useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

import { useParams } from "react-router";
import { useAuth } from '../../authContext/AuthContext';
import Sidebar from '../Sidebar'
import Spinner from '../Spinner';
import './Experiences.css'

export function SingleExp() 
{
    //  ALl the neccessary variables are declared over here.
    const {user}=useAuth()
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    const [expData, setExpData] = useState({});
    const [showInfo, setShowInfo] = useState(true);

    // Fetching all the neccessary data
    useEffect(() => {
        axios.post("http://localhost:3001/api/experiences/id", {id})
            .then((res) => {
                setExpData(res.data);
                setLoading(false);
		    })
            .catch((err) => console.log(err));
    },[]);

    // Renders the content of the whole screen.
    return (
        
        // total screen
        <div className='h-screen flex '>
            
            {/* left sidebar */}
                <Sidebar />

            {/* Loads the spinner if its still loading or else rendering the content */}
            
            {loading?<Spinner/>:
            
                <div className=" overflow-y-auto flex-grow flex-1 flex flex-col max-w-screen-lg p-3 bg-white my-2 mr-2 rounded-r-lg">
                    {/* above of center */}
                    <div className=" border-gray-200">
                        {/* The Whole Project Description */}
                        <div>
                            <div className='bg-whit rounded-lg m-2 '>
                                <div className='rounded-xl text-5xl m-2 justify-center flex '>
                                    <p className='text-5xl p-3 m-1 font-serif font-bold'> {expData.title} </p>
                                </div>

                                <div className='flex place-content-end'>
                                    <p className=' rounded-lg text-lg m-2 pl-4 pr-4 p-1 font-bold '> {expData.author} </p>
                                </div>

                                {/* Inpage navigation */}
                                <div className='flex'>
                                    <button to='/collab' className={'font-bold rounded-lg text-md m-2 pl-4 pr-4 p-1 hover:bg-gray-200 ' + 
                                    'transition duration-500 ease-in-out ' + (showInfo? ' bg-gray-200 transform scale-110' : '')} onClick={() => {setShowInfo(true);}}> Info </button>
                                </div>
                            </div>

                                <hr className='bg-gray-500 h-0.5 border-none rounded-xl'></hr>
                        </div>
                    
                    </div>

                    {/* below of center */}
                    <main className="flex-1 p-2 bg-white ">
                            <h1 className={'font-bold m-1 ' + (showInfo ? '' : ' hidden')}> Description </h1>
                            <div className={'bg-white rounded-lg text-1xl p-2 shadow-md font-sans ' + (showInfo ? "" : "hidden")}> 
                                <p>{expData.description} </p>
                            </div>                        
                    </main>
                </div>
        }
        </div>
    );
}