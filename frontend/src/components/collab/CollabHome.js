import React from 'react'
import Sidebar from '../Sidebar';
import CollabCard from './CollabCard';
function CollabHome() {
    return (
        <div className="h-screen flex flex-row">
            <Sidebar/>
            <div className="flex-grow bg-white rounded-lg m-2 flex flex-col max-w-screen-lg">
                
                <div className="flex flex-row">
                    <div className="m-2 ml-4 mb-4 text-3xl text-left font-bold">Collab</div>
                    <div className="flex-grow"></div>
                    <button className='place-self-end block p-2 m-1  hover:text-white hover:bg-blue-700 rounded font-bold'>+ New Collab</button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 place-content-stretch content-around bg-whit p-2 rounded-lg flex-grow">
                    <CollabCard title={"No"} description={"something"} author={"YOU"}/>
                    <CollabCard title={"No"} description={"something"} author={"YOU"}/>
                    <CollabCard title={"No"} description={"something"} author={"YOU"}/>
                    <CollabCard title={"No"} description={"something"} author={"YOU"}/>
                    <CollabCard title={"No"} description={"something"} author={"YOU"}/> 
                    <CollabCard title={"No"} description={"something"} author={"YOU"}/> 
                    <CollabCard title={"No"} description={"something"} author={"YOU"}/> 
                    <CollabCard title={"No"} description={"something"} author={"YOU"}/> 
                </div>
            </div>
            {/* <Sidebar/> */}
        </div>
    )
}
export default CollabHome;