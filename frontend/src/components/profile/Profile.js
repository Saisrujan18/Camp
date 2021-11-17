/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react'
import { useAuth } from '../../authContext/AuthContext'
import axios from 'axios';
import Avatar from './Avatar';
import { SidebarH } from '../../App';

export default function Profile() 
{
    const [sidebarState, setSidebarState] = useState(false);
    let {user,loading} =useAuth();
    const [userData,setUserData]=useState({});
    const [isLoading,setLoading]=useState(true);

    useEffect(() => {
        // axios
        //     .get("http://localhost:3001/api/profile/"+user.email)
        //     .then((res)=>{
        //         setUserData(res.data);
        //         setLoading(false);
        //     })
        //     .catch((err)=>console.log(err))
    },[])

    return (
        <div className="h-screen flex flex-row ">
            <div>
                <SidebarH hasEditor={false}/>
            </div>
            
            <div className={"flex-1 bg-whit  md:rounded-r-lg md:mr-2 my-2 sm-custom:rounded-lg sm-custom:mx-2  w-1/2 max-h-full " + (!sidebarState? "z-m10" : " ")}>
                <Avatar />
           </div>
        </div>
    )
}
