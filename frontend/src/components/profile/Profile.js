/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react'
import CountUp,{useCountUp} from 'react-countup'
import { useAuth } from '../../authContext/AuthContext'
import axios from 'axios';
import Scene from './Scene'
import {AutoStoriesTwoTone, NoteAddTwoTone, AddToHomeScreenTwoTone, PeopleAltTwoTone} from '@mui/icons-material';
import {AmpStories} from "@material-ui/icons";
import { SidebarH } from '../../App';

export default function Profile() 
{
    let {user,loading} =useAuth();
    const [userData,setUserData]=useState({});
    const [isLoading,setLoading]=useState(true);
    const [isPlaying, setPlaying]=useState(false);


    // data required
    // set this in the user collection

    const [blogsWritten, setBlogsWritten] = useState(10000)
    const [blogsRead, setBlogsRead] = useState(20000)
    const [collabsDone, setCollabs] = useState(5000)
    const [postsMade, setPosts] = useState(5000)
    const SVG=[<AutoStoriesTwoTone/>, <NoteAddTwoTone/>, <AddToHomeScreenTwoTone/>, <PeopleAltTwoTone/>]

    useEffect(() => {
        // axios
        //     .get("http://localhost:3001/api/profile/"+user.email)
        //     .then((res)=>{
        //         setUserData(res.data);
        //         setLoading(false);
        //     })
        //     .catch((err)=>console.log(err))
    },[])
    function setAnimTrue()
    {
        setPlaying(true)
        console.log("True Function : " + isPlaying)
    }
    function setAnimFalse()
    {
        setPlaying(false)
        console.log("False Function : " + isPlaying)
    }
    const Card = (props) => 
    {
        return(
        <div className="m-10 h-auto w-auto flex flex-col items-center rounded-lg shadow-glow_w">
            <div className="flex flex-row mb-0.5 w-full justify-center">
                <svg className={`h-10 w-10 mx-4 text-${props.colorcode} my-1`}>
                    {SVG[props.svgID]}
                </svg>
                <CountUp className="text-white text-3xl font-camp mx-4 my-2" start={props.countStart} end={props.countEnd} duration={2}/>
            </div>
            <div className="text-white text-4xl font-title_2 mt-0.5 truncate overflow-ellipsis">{props.desc}</div>
        </div>)   
    }
    document.documentElement.style.setProperty("--bg-master", "#000000")
    return (
        <div className="h-screen w-screen p-3 flex flex-col">
            <div className="top-part">
                <div className="bg-blackBlue large:rounded-lg medium_profile:rounded-lg small_profile:rounded-lg flex flex-row w-full h-full shadow-glow_b">
                    <div onMouseEnter={setAnimTrue} onMouseLeave={setAnimFalse} className={"bg-darkOrang m-4 w-avatar-display-home h-avatar-display-home"}>
                        <Scene isPlaying={isPlaying}/>
                    </div>
                    <div className="grid grid-cols-1 small_profile:grid-cols-2 medium_profile:grid-cols-4 large:grid-cols-4 items-center p-2 gap-y-4 gap-x-2 h-auto w-full">
                        <Card svgID={0} colorcode="gree" countStart={0} countEnd={blogsRead} desc="Blogs Read"/>
                        <Card svgID={1} colorcode="re" countStart={0} countEnd={blogsWritten} desc="Blogs Written"/>
                        <Card svgID={2} colorcode="purpl" countStart={0} countEnd={postsMade} desc="Posts Made"/>
                        <Card svgID={3} colorcode="orang" countStart={0} countEnd={collabsDone} desc="Collabs Done"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
