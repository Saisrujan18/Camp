/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react'
import CountUp,{useCountUp} from 'react-countup'
import { useAuth } from '../../authContext/AuthContext'
import axios from 'axios';
import Scene from './Scene'
import {AutoStoriesTwoTone, NoteAddTwoTone, AddToHomeScreenTwoTone, PeopleAltTwoTone} from '@mui/icons-material';
import {VerifiedUser} from "@material-ui/icons";
import { Link } from "react-router-dom";
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
    const [verified, setVerified] = useState(true)
    const [username, setUsername] = useState("Hello")
    const [userid, setUserid] = useState("World")
    const [avatarid, setAvatarid] = useState(-1);
    
    //Can be extracted from userid aka email
    const [batchYear, setBatch] = useState(2019)
    const SVG=[<AutoStoriesTwoTone/>, <NoteAddTwoTone/>, <AddToHomeScreenTwoTone/>, <PeopleAltTwoTone/>]

    function setRandomAvatar()
    {
        const rno = ~~user.email.substring(5, 8)
        //No of Avatars are 3 currently
        //Must save this value in backend
        if(avatarid==-1)
            setAvatarid(rno%3)
    }
    setRandomAvatar()
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
    }
    function setAnimFalse()
    {
        setPlaying(false)
    }
    const Card = (props) => 
    {
        return(
        <div className="my-2 p-2 h-full w-full flex flex-col items-center rounded-lg transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-glow_db cursor-default">
            <div className="flex flex-row mb-1 w-full justify-center pt-1">
                <svg className={`h-svg-icon w-svg-icon ml-4 mr-2 text-${props.colorcode} my-1`}>
                    {SVG[props.svgID]}
                </svg>
                <CountUp className="text-gray-800 text-2xl font-camp mr-4 my-2" start={props.countStart} end={props.countEnd} duration={2}/>
            </div>
            <div className="text-gray-800 text-3xl font-title_2 mt-1 px-4 pb-1 truncate overflow-ellipsis">{props.desc}</div>
        </div>)   
    }
    const userInfo = () => {
        return (
            <div className="flex flex-col items-center ml-4 mr-4 mt-4 px-2 py-4 rounded-lg transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-glow_db cursor-default">
                <div className="user_info flex sm:flex-col md:flex-row w-auto">
                    <div className="font-semibold italic text-gray-800">{username}</div>
                    {verified && <VerifiedUser className="h-1 w-1 text-darkBlu"/>}
                    <div className="italic text-lightBlu">{"@"+userid}</div>
                    <div className="flex-grow"/>
                </div>
                <div className="text-xl text-gray-800 font-camp">{batchYear}</div>
                <div className="flex-grow bg-gray-800"/>
            </div>
        );
    }
    const TopPart = () => {
        return (
            <div className="top-part flex flex-col md:flex-row w-auto h-auto p-4 md:mx-4 sm:self-center">
                <div className="flex flex-col w-auto h-auto">
                    <div onMouseEnter={setAnimTrue} onMouseLeave={setAnimFalse} 
                        className="mx-auto my-4 p-4 rounded-lg transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-glow_b_in
                        w-avatar-display-home-small h-avatar-display-home-small small_profile:w-avatar-display-home-medium small_profile:h-avatar-display-home-medium
                        medium_profile:w-avatar-display-home medium_profile:h-avatar-display-home large:w-avatar-display-home large:h-avatar-display-home ">
                        <Scene isPlaying={isPlaying} avatarid={avatarid}/>
                    </div>
                    {userInfo()}
                </div>
                <div className="flex-1 md:my-auto md:max-w-sm">
                    <Card svgID={0} colorcode="gree" countStart={0} countEnd={blogsRead} desc="Coins"/>
                </div>
            </div>
        );
    }
    const setBG = () => {
        document.documentElement.style.setProperty("--bg-master", "#ADC9FE")
    }
    const resetBG = () => {
        document.documentElement.style.setProperty("--bg-master", "#ADC9FE")
    }
    const HomeButton = () => {
        return(
            <Link to="/home"
                className="absolute top-5 bg-lightBlu30 block py-3 px-4 md:mr-8 w-48 rounded flex flex-row gap-x-4 self-center md:self-end
                font-semibold text-darkBlu shadow-glow_sb1 transition duration-500 ease-in-out transform hover:bg-lightBlu20 hover:scale-105 hover:shadow-glow_sb2 ">
       
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 self-center" viewBox="0 0 20 20" fill="currentColor">
					<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
				</svg>
                Home
			</Link>
        )
    }

    setBG()
    return (
        <div className="w-screen max-h-full">
        <div className="flex flex-col justify-center items-stretch min-h-screen h-full my-2 small_profile:mx-2 medium_profile:mx-2 large:mx-2 bg-whit large:rounded-lg medium_profile:rounded-lg small_profile:rounded-lg shadow-glow_b">
            <HomeButton onClick={resetBG()}/>
            {TopPart()} 
            <div className="flex-grow"/>
        </div>
        </div>
    )
}
