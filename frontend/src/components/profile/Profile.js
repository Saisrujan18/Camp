/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react'
import Sidebar from '../Sidebar'
import { useAuth } from '../../authContext/AuthContext'
import axios from 'axios';

export default function Profile() 
{
    let {user,loading} =useAuth();
    const [userData,setUserData]=useState({});
    const [isLoading,setLoading]=useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:3001/api/profile/"+user.email)
            .then((res)=>{
                setUserData(res.data);
                setLoading(false);
            })
            .catch((err)=>console.log(err))
    },[])

    return (
        <div className="flex flex-row">
            <Sidebar/>
            <div className="flex-grow bg-whit md:rounded-r-lg md:mr-2 my-2 sm-custom:rounded-lg sm-custom:mx-2 flex flex-col w-screen-lg">
                <div>
                
                </div>
            </div>
            
        </div>
    )
}
