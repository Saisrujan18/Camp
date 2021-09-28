import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar'
import './Collab.css'

export function Collab() {

    const [projName, setProjName] = useState("Project Name");
    const [owner, setOwner] = useState("Owner");
    const [description, setDescription] = useState();

    const scrollStyle = {
        
    };

    return (
        // total screen
        <div className='h-screen flex'>
            {/* left sidebar */}
            <Sidebar />



            {/* center part */}
            <div className=" flex-grow flex-1 flex flex-col">
                {/* above of center */}
                <div className="m-4 pb-2 border-gray-200">
                    <div>
                            <div className='rounded-xl text-5xl m-2 justify-center flex bg-blue-500'>
                                <p className='text-5xl p-3 m-1'> {projName} </p>
                            </div>

                            <div className='flex'>
                                <p className='bg-blue-500 rounded-lg text-lg m-2 pl-4 pr-4 p-1'> {owner} </p>
                            </div>

                            <div className='flex'>
                                <Link to='/campcollab' className='rounded-lg text-md m-2 pl-4 pr-4 p-1 hover:bg-blue-500 
                                transition duration-500 ease-in-out'> Info </Link>

                                <Link to='/campcollab' className='rounded-lg text-md m-2 pl-4 pr-4 p-1 hover:bg-blue-500 
                                transition duration-500 ease-in-out'> Members </Link>

                                <Link to='/campcollab' className='rounded-lg text-md m-2 pl-4 pr-4 p-1 hover:bg-blue-500 
                                transition duration-500 ease-in-out'> Chat </Link>

                                <button className='rounded-lg text-md m-2 pl-4 pr-4 p-1 bg-blue-400 ml-auto hover:bg-blue-500 transition duration-500 ease-in-out'> Join </button>
                            </div>

                            <hr className='bg-blue-500 h-0.5 border-none rounded-xl'></hr>
                    </div>
                
                </div >

                {/* below of center */}
                <main className="flex-1 overflow-y-auto p-2 bg-blue-200">
                    <div className="relative">
                        <p className='bg-blue-400 rounded-lg text-1xl p-2 m-2'> Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Vestibulum non tellus lobortis felis tristique maximus quis sit amet odio.
                            Pellentesque vulputate lectus vel sem imperdiet, ultrices tristique lorem venenatis. Sed a
                            tortor at est feugiat fringilla non in sapien. Duis nunc purus, mattis vel porttitor eu,
                            dignissim vitae nibh. Sed non metus volutpat, tempus nunc at, dignissim tortor. Maecenas
                            lacinia erat eros, porta facilisis libero mattis ut. Cras tristique et urna in facilisis.
                            Praesent placerat massa quis vulputate venenatis. Nulla sed ligula id nulla scelerisque
                            dignissim.
                            <br />
                            Phasellus vestibulum et turpis ac rhoncus. Mauris semper, nisl fermentum faucibus ullamcorper,
                            augue lacus dapibus orci, id consectetur mauris mauris nec turpis. Quisque sed enim blandit,
                            aliquam purus eu, commodo sem. Nam accumsan vel mi ac vulputate. Morbi pellentesque diam nec
                            nisl fringilla elementum. Nunc lacinia iaculis nibh at gravida. Nunc at elit quis orci dapibus
                            blandit. Vestibulum lobortis varius lobortis. Vestibulum sapien augue, facilisis nec tempor ut,
                            ultrices eget purus. Nam commodo tortor sit amet consequat aliquet. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Vestibulum non tellus lobortis felis tristique maximus quis sit amet odio.
                            Pellentesque vulputate lectus vel sem imperdiet, ultrices tristique lorem venenatis. Sed a
                            tortor at est feugiat fringilla non in sapien. Duis nunc purus, mattis vel porttitor eu,
                            dignissim vitae nibh. Sed non metus volutpat, tempus nunc at, dignissim tortor. Maecenas
                            lacinia erat eros, porta facilisis libero mattis ut. Cras tristique et urna in facilisis.
                            Praesent placerat massa quis vulputate venenatis. Nulla sed ligula id nulla scelerisque
                            dignissim.
                            <br />
                            Phasellus vestibulum et turpis ac rhoncus. Mauris semper, nisl fermentum faucibus ullamcorper,
                            augue lacus dapibus orci, id consectetur mauris mauris nec turpis. Quisque sed enim blandit,
                            aliquam purus eu, commodo sem. Nam accumsan vel mi ac vulputate. Morbi pellentesque diam nec
                            nisl fringilla elementum. Nunc lacinia iaculis nibh at gravida. Nunc at elit quis orci dapibus
                            blandit. Vestibulum lobortis varius lobortis. Vestibulum sapien augue, facilisis nec tempor ut,
                            ultrices eget purus. Nam commodo tortor sit amet consequat aliquet.
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Vestibulum non tellus lobortis felis tristique maximus quis sit amet odio.
                            Pellentesque vulputate lectus vel sem imperdiet, ultrices tristique lorem venenatis. Sed a
                            tortor at est feugiat fringilla non in sapien. Duis nunc purus, mattis vel porttitor eu,
                            dignissim vitae nibh. Sed non metus volutpat, tempus nunc at, dignissim tortor. Maecenas
                            lacinia erat eros, porta facilisis libero mattis ut. Cras tristique et urna in facilisis.
                            Praesent placerat massa quis vulputate venenatis. Nulla sed ligula id nulla scelerisque
                            dignissim.
                            <br />
                            Phasellus vestibulum et turpis ac rhoncus. Mauris semper, nisl fermentum faucibus ullamcorper,
                            augue lacus dapibus orci, id consectetur mauris mauris nec turpis. Quisque sed enim blandit,
                            aliquam purus eu, commodo sem. Nam accumsan vel mi ac vulputate. Morbi pellentesque diam nec
                            nisl fringilla elementum. Nunc lacinia iaculis nibh at gravida. Nunc at elit quis orci dapibus
                            blandit. Vestibulum lobortis varius lobortis. Vestibulum sapien augue, facilisis nec tempor ut,
                            ultrices eget purus. Nam commodo tortor sit amet consequat aliquet.</p>

                        <div>
                            <ul className='m-2 space-y-1'>
                                <li className='bg-blue-400 rounded-lg p-4'> <a href=''> Github </a> </li>
                                <li className='bg-blue-400 rounded-lg p-4'> <a href=''> Linkdin </a> </li>
                                <li className='bg-blue-400 rounded-lg p-4'> <a href=''> Any other </a> </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>

            {/* right sidebar */}
            <Sidebar />
        </div>
    )
}
