import React,{useEffect,useState} from 'react'
import CountUp,{useCountUp} from 'react-countup'
import { useAuth } from '../../authContext/AuthContext'
import axios from 'axios';
import Scene from './Scene'
import {NoteAddTwoTone, AddToHomeScreenTwoTone, PeopleAltTwoTone, MonetizationOnTwoTone} from '@mui/icons-material';
import {VerifiedUser} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Profile() 
{
    //Variables required for profile page
    let {user} =useAuth();
    const [loading,setLoading]=useState(true);
    const [userData,setUserData]=useState({});
    const [isPlaying, setPlaying]=useState(false);

    // data required
    // set this in the user collection
    const [avatarid, setAvatarid] = useState(-1);
    const [batchYear, setBatch] = useState("")

    const SVG=[<MonetizationOnTwoTone/>, <NoteAddTwoTone/>, <AddToHomeScreenTwoTone/>, <PeopleAltTwoTone/>]

    useEffect(() => {
        axios
		.get("/api/user/email", {params:{email:user.email}})
		.then((res) => {
            setUserData(res.data)
		    setLoading(false)
		})
		.catch((err) => console.log(err));
	}, []);

    //Set random avatar based on roll number and batch number
    function setAvatarAndBatch()
    {
        const rno = ~~user.email.substring(5, 8)
        let year = user.email.substring(2, 4)
        year="' "+year

        //No of Avatars are 3 currently
        if(avatarid===-1 && rno!==0)
            setAvatarid(rno%3)

        if(batchYear==="")
            setBatch(year)
    }
    setAvatarAndBatch()

    //Toggle animation of avatar
    function setAnimTrue()
    {
        setPlaying(true)
    }
    function setAnimFalse()
    {
        setPlaying(false)
    }

    //Card for User details
    const Card = (props) => 
    {
        return(
        <div className="p-2 min-h-user-details-card h-full w-full flex flex-col items-center justify-around rounded-lg shadow-glow_y transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-glow_y_in cursor-default">
            <div className="flex flex-row mb-1 w-full justify-center pt-1">
                <svg className={`h-svg-icon w-svg-icon ml-4 mr-2 text-${props.colorcode} my-1`}>
                    {SVG[props.svgID]}
                </svg>
                <CountUp className={`text-blac text-2xl font-camp ml-2 mr-4 my-2`} start={props.countStart} end={props.countEnd} duration={2}/>
            </div>
            <div className={`text-blac text-3xl font-title_2 mt-1 px-4 pb-1 truncate overflow-ellipsis`}>{props.desc}</div>
        </div>)   
    }

    //Card for User info
    const userInfo = () => {
        return (
            <div className="flex-grow w-full bg-lightYel1 px-6 py-2">
                <div className="flex flex-col items-center w-full py-4 rounded-lg transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-glow_y_in cursor-default">
                    <div className="user_info flex flex-row w-auto">
                        <div className="font-semibold truncate overflow-ellipsis italic text-blac">{userData.username}</div>
                        {userData.verified && <VerifiedUser className="h-1 w-1 text-re"/>}
                        <div className="truncate overflow-ellipsis italic text-re">{"@"+userData.email}</div>
                    </div>
                    <div className="text-xl text-darkBlue85 font-camp">{batchYear+" batch"}</div>
                </div>
            </div>
        );
    }

    //Render the content of the page
    const TopPart = () => {
        return (
            <div className="top-part flex flex-col flex-grow small_profile_l:flex-row w-auto h-full px-6 space-x-0 apace-y-2">
                <div className="flex flex-col flex-grow w-auto h-full items-center">
                    <div onMouseEnter={setAnimTrue} onMouseLeave={setAnimFalse} 
                        className="p-4 rounded-lg transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-glow_r_in
                        w-avatar-display-home h-avatar-display-home large:w-avatar-display-home-large large:h-avatar-display-home-large
                        larger_profile:w-avatar-display-home-larger larger_profile:h-avatar-display-home-larger">
                        <Scene isPlaying={isPlaying} avatarid={avatarid}/>
                    </div>
                    {userInfo()}
                    <div className="bg-lightYel1"></div>
                </div>
                <div className="grid grid-cols-1 medium_profile_l:grid-cols-2 items-center p-6 gap-y-4 gap-x-6 h-auto w-full justify-items-stretch content-center bg-lightYel1">
                    <Card svgID={0} colorcode="yel" countStart={0} countEnd={userData.coins} desc="Coins"/>
                    <Card svgID={1} colorcode="re" countStart={0} countEnd={userData.blogswritten} desc="Blogs Written"/>
                    <Card svgID={2} colorcode="purpl" countStart={0} countEnd={userData.postsmade} desc="Posts Made"/>
                    <Card svgID={3} colorcode="orang" countStart={0} countEnd={userData.collabsdone} desc="Collabs Done"/>
                </div>
            </div>
        );
    }

    //Home button for navigation
    const HomeButton = () => {
        return(
            <Link to="/home"
                className="bg-lightRed30 block p-3 my-4 mr-4 w-36 rounded flex flex-row gap-x-4 self-end
                font-semibold text-darkOrang shadow-glow_r1 transition duration-500 ease-in-out transform hover:bg-lightRed40 hover:scale-105 hover:shadow-glow_r2 items-center justify-center">
       
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
				</svg>
			    Home
			</Link>
        )
    }

    //Profile page body
    return (
        <div className="w-screen h-screen small_profile:py-2 medium_profile:py-2 large:py-2">
        <div className="flex flex-col items-stretch h-full p-2 small_profile:mx-2 medium_profile:mx-2 large:mx-2 bg-lightYel2 large:rounded-lg medium_profile:rounded-lg small_profile:rounded-lg shadow-glow_b overflow-y-auto">
            <HomeButton/>
            {TopPart()} 
            <div className="flex-grow"/>
        </div>
        </div>
    )
}