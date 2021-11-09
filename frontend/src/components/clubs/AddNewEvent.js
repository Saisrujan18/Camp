import React,{useState} from 'react';
import Sidebar from '../Sidebar';

export default function AddNewEvent(props) 
{
    // const [post,setPost]=useState({});

    // console.log(props);
    // const handleChange = (event) => {
    //     event.preventDefault();
    //     const { name, value } = event.target;
    //     setExp((prevNote) => {
    //     return {
    //         ...prevNote,
    //         [name]: value,
    //     };
    //     });
    // };

    return (
        <div className="flex flex-row">
            <Sidebar/>
            <div className="flex flex-col flex-grow bg-white md:rounded-r-lg md:mr-2 my-2 sm-custom:rounded-lg sm-custom:mx-2  w-screen-lg ">
                <h1>Insert to {props.club}</h1>
            </div>
        </div>
    )
}
