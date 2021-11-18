/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react'
import { useAuth } from '../../authContext/AuthContext'
import axios from 'axios';
import Avatar from './Avatar';
import Scene from './Scene'
import { SidebarH } from '../../App';

export default function Profile() 
{
    let {user,loading} =useAuth();
    const [userData,setUserData]=useState({});
    const [isLoading,setLoading]=useState(true);
    const [isPlaying, setPlaying]=useState(false);

    useEffect(() => {
        // axios
        //     .get("http://localhost:3001/api/profile/"+user.email)
        //     .then((res)=>{
        //         setUserData(res.data);
        //         setLoading(false);
        //     })
        //     .catch((err)=>console.log(err))
    },[])

    async function handleAnim()
    {
        console.log(`It was ${isPlaying}`)
        setPlaying(!isPlaying)
        console.log(`It is ${isPlaying} now`)
    }
    return (
        <div className="h-screen w-screen flex flex-row bg-black">
            <div onMouseOver={handleAnim} onMouseOut={handleAnim} className={"bg-darkOrang m-4 w-1/4 h-1/2"}>
                <Avatar isPlaying={isPlaying}/>
           </div>
           <div className="flex flex-grow"/>
        </div>
    )
}
