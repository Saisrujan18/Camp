import { React, useState } from 'react'
// import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar'
import './Collab.css'

export function Collab() {

    // State of this component contains:
    // 1. Name of the project
    // 2. Owner of the project
    // 3. Project Description
    // 4. Some important links eg:github
    // 5. Current Contributers
    const [projName, setProjName] = useState("Project Name");
    const [owner, setOwner] = useState("Owner");
    const [description, setDescription] = useState(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non tellus lobortis felis tristique maximus quis sit amet odio.
    Pellentesque vulputate lectus vel sem imperdiet, ultrices tristique lorem venenatis. Sed a
    tortor at est feugiat fringilla non i sapien. Duis nunc purus, mattis vel porttitor eu,
    dignissim vitae nibh. Sed non metus volutpat, tempus nunc at, dignissim tortor. Maecenas
    lacinia erat eros, porta facilisis libero mattis ut. Cras tristique et urna i facilisis.
    Praesent placerat massa quis vulputate venenatis. Nulla sed ligula id nulla scelerisque
    dignissim.
    Phasellus vestibulum et turpis ac rhoncus. Mauris semper, nisl fermentum faucibus ullamcorper,
    augue lacus dapibus orci, id consectetur mauris mauris nec turpis. Quisque sed enim blandit,
    aliquam purus eu, commodo sem. Nam accumsan vel mi ac vulputate. Morbi pellentesque diam nec
    nisl fringilla elementum. Nunc lacinia iaculis nibh at gravida. Nunc at elit quis orci dapibus
    blandit. Vestibulum lobortis varius lobortis. Vestibulum sapien augue, facilisis nec tempor ut,
    ultrices eget purus. Nam commodo tortor sit amet consequat aliquet. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Vestibulum non tellus lobortis felis tristique maximus quis sit amet odio.
    Pellentesque vulputate lectus vel sem imperdiet, ultrices tristique lorem venenatis. Sed a
    tortor at est feugiat fringilla non  sapien. Duis nunc purus, mattis vel porttitor eu,
    dignissim vitae nibh. Sed non metus volutpat, tempus nunc at, dignissim tortor. Maecenas
    lacinia erat eros, porta facilisis libero mattis ut. Cras tristique et urna i facilisis.
    Praesent placerat massa quis vulputate venenatis. Nulla sed ligula id nulla scelerisque
    dignissim.
    Phasellus vestibulum et turpis ac rhoncus. Mauris semper, nisl fermentum faucibus ullamcorper,
    augue lacus dapibus orci, id consectetur mauris mauris nec turpis. Quisque sed enim blandit,
    aliquam purus eu, commodo sem. Nam accumsan vel mi ac vulputate. Morbi pellentesque diam nec
    nisl fringilla elementum. Nunc lacinia iaculis nibh at gravida. Nunc at elit quis orci dapibus
    blandit. Vestibulum lobortis varius lobortis. Vestibulum sapien augue, facilisis nec tempor ut,
    ultrices eget purus. Nam commodo tortor sit amet consequat aliquet.
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Vestibulum non tellus lobortis felis tristique maximus quis sit amet odio.
    Pellentesque vulputate lectus vel sem imperdiet, ultrices tristique lorem venenatis. Sed a
    tortor at est feugiat fringilla non sapien. Duis nunc purus, mattis vel porttitor eu,
    dignissim vitae nibh. Sed non metus volutpat, tempus nunc at, dignissim tortor. Maecenas
    lacinia erat eros, porta facilisis libero mattis ut. Cras tristique et urna facilisis.
    Praesent placerat massa quis vulputate venenatis. Nulla sed ligula id nulla scelerisque
    dignissim.
    Phasellus vestibulum et turpis ac rhoncus. Mauris semper, nisl fermentum faucibus ullamcorper,
    augue lacus dapibus orci, id consectetur mauris mauris nec turpis. Quisque sed enim blandit,
    aliquam purus eu, commodo sem. Nam accumsan vel mi ac vulputate. Morbi pellentesque diam nec
    nisl fringilla elementum. Nunc lacinia iaculis nibh at gravida. Nunc at elit quis orci dapibus
    blandit. Vestibulum lobortis varius lobortis. Vestibulum sapien augue, facilisis nec tempor ut,
    ultrices eget purus. Nam commodo tortor sit amet consequat aliquet.`);

    const [links, setLinks] = useState(["Github", "LinkedIn"]);
    const [members, setMembers] = useState(["Owner", "Person1", "Person2"]);
    const [showInfo, setShowInfo] = useState(true);
    const [showMembers, setShowMembers] = useState(false);
    const [showChat, setShowChat] = useState(false);

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


    return (
        // total screen
        <div className='h-screen flex '>
            {/* left sidebar */}
            <Sidebar />



            {/* center part */}
            <div className=" overflow-y-auto flex-grow flex-1 flex flex-col max-w-screen-lg p-3 bg-white my-2 mr-2 rounded-r-lg">
                {/* above of center */}
                <div className=" border-gray-200">
                    {/* The Whole Project Description */}
                    <div>
                        <div className='bg-whit rounded-lg m-2 '>
                            <div className='rounded-xl text-5xl m-2 justify-center flex '>
                                <p className='text-5xl p-3 m-1 font-serif font-bold'> {projName} </p>
                            </div>

                            <div className='flex place-content-end'>
                                <p className=' rounded-lg text-lg m-2 pl-4 pr-4 p-1 font-bold '> {owner} </p>
                            </div>

                            {/* Inpage navigation */}
                            <div className='flex'>
                                <button to='/collab' className={'font-bold rounded-lg text-md m-2 pl-4 pr-4 p-1 hover:bg-gray-200 ' + 
                                'transition duration-500 ease-in-out ' + (showInfo? ' bg-gray-200 transform scale-110' : '')} onClick={() => {setShowInfo(true); setShowChat(false); setShowMembers(false)}}> Info </button>

                                <button to='/collab' className={'font-bold rounded-lg text-md m-2 pl-4 pr-4 p-1 hover:bg-gray-200 ' + 
                                'transition duration-500 ease-in-out ' + (showMembers? ' bg-gray-200 transform scale-110': "")} onClick={() => {setShowInfo(false); setShowChat(false); setShowMembers(true)}}> Members </button>

                                <button to='/collab' className={'font-bold rounded-lg text-md m-2 pl-4 pr-4 p-1 hover:bg-gray-200 ' +
                                ' transition duration-500 ease-in-out ' + (showChat ? " bg-gray-200 transform scale-110" : '')} onClick={() => {setShowInfo(false); setShowChat(true); setShowMembers(false)}}> Chat </button>

                                <button className={'font-bold rounded-lg text-md m-2 pl-4 pr-4 p-1 ml-auto hover:bg-blue-500 transition duration-500 ease-in-out'}> Join </button>
                            </div>
                        </div>

                            <hr className='bg-gray-500 h-0.5 border-none rounded-xl'></hr>
                    </div>
                
                </div>

                {/* below of center */}
                <main className="flex-1 p-2 bg-white ">
                        <h1 className={'font-bold m-1 ' + (showInfo ? '' : ' hidden')}> Description </h1>
                        <p className={'bg-white rounded-lg text-1xl p-2 shadow-md font-sans ' + (showInfo ? "" : "hidden")}> {description} </p>

                        {/* Members */}
                        <div className={(showMembers ? "space-y-1 m-2" : "hidden")}>
                            {
                                members.map(member => (
                                    getMember(member)
                                ))
                            }
                        </div>

                        {/* Chat */}
                        <div className={(showChat ? "space-y-1 m-2" : "hidden")}>
                            Nothing to show
                        </div>


                        <div className=' space-y-1'>
                            <h1 className='m-1 font-bold'> Links </h1>
                            {
                                links.map(link => (
                                    getLinks(link)
                                ))
                            }
                        </div>
                </main>
            </div>
        </div>
    )
}
