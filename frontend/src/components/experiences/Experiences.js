import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Sidebar from '../Sidebar'

export default function Experiences() 
{
    // The state of this component contains:
    // 1. Name of the company
    // 2. The experience of a particular person.
    // 3. Links to the social media accounts of that person.
    // 4. Chats if any 
    const [expData, setExpData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [companyName, setProjName] = useState("Deliotte");
    const [author, setOwner] = useState("ABC");
    
    const [links, setLinks] = useState(["Github", "LinkedIn"]);
    const [showChat, setShowChat] = useState(false);

    // On loading, this gets the data related to the experiences.
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/experiences")
      .then((res) => {
            setExpData(res.data);
            setLoading(false);
      })
      .catch((err) => console.log(err));
  },[]);

    // Links
    const getLinks = (link) => {
        return (
            <li className='bg-white rounded-lg p-4 shadow-lg border'> 
                <a href='/'> {link} </a>
            </li>
        )
    }

    return (
        <div className="flex flex-row">
            {/* Sidebar */}
            <Sidebar/>
            {/* Name of the company */}
            <div>
                {expData.map((collab) => (
                    <h1>{collab.title}</h1>
                ))}
            </div>

            <div className=" overflow-y-auto flex-grow flex-1 flex flex-col max-w-screen-lg p-3 bg-white my-2 mr-2 rounded-r-lg">
                {/* above of center */}
                <div className=" border-gray-200">
                    <div>
                        <div className='bg-whit rounded-lg m-2 '>
                            <div className='rounded-xl text-5xl m-2 justify-center flex '>
                                <p className='text-5xl p-3 m-1 font-serif font-bold'> {companyName} </p>
                            </div>

                            <div className='flex place-content-end'>
                                <p className=' rounded-lg text-lg m-2 pl-4 pr-4 p-1 font-bold '> {author} </p>
                            </div>

                            <div className='flex'>
                                <button to='/collab' className={'font-bold rounded-lg text-md m-2 pl-4 pr-4 p-1 hover:bg-gray-200 ' + 
                                'transition duration-500 ease-in-out ' + (showInfo? ' bg-gray-200 transform scale-110' : '')} onClick={() => {setShowInfo(true); setShowChat(false); setShowMembers(false)}}> Experience </button>

                                <button to='/collab' className={'font-bold rounded-lg text-md m-2 pl-4 pr-4 p-1 hover:bg-gray-200 ' +
                                ' transition duration-500 ease-in-out ' + (showChat ? " bg-gray-200 transform scale-110" : '')} onClick={() => {setShowInfo(false); setShowChat(true); setShowMembers(false)}}> Chat </button>

                                <button className={'font-bold rounded-lg text-md m-2 pl-4 pr-4 p-1 ml-auto hover:bg-blue-500 transition duration-500 ease-in-out'}> Follow </button>
                            </div>
                        </div>

                            <hr className='bg-gray-500 h-0.5 border-none rounded-xl'></hr>
                    </div>
                
                </div>

                {/* below of center */}
                <main className="flex-1 p-2 bg-white ">
                        <h1 className={'font-bold m-1 ' + (showInfo ? '' : ' hidden')}> Description </h1>
                        <p className={'bg-white rounded-lg text-1xl p-2 shadow-md font-sans ' + (showInfo ? "" : "hidden")}> {description} </p>

                        {/* Chat */}
                        <div className={(showChat ? "space-y-1 m-2" : "hidden")}>
                            Nothing to show for now
                        </div>

                        {/* displays links */}
                        <div className={(showChat ? "space-y-1 m-2" : "hidden")}>
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
