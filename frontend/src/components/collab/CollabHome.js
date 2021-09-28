import React from 'react'
import Sidebar from '../Sidebar';
import CollabCard from './CollabCard';
function CollabHome() {
    return (
        <div className="flex flex-row">
            <Sidebar/>
            <div className="flex-grow bg-white rounded-lg m-2 flex flex-col">
                <div className="flex flex-row">
                    <div className="m-2 ml-4 mb-4 text-3xl text-left font-bold">
                        Collab
                    </div>
                    <div className="content-end">
                        <button>New Collab</button>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 place-content-stretch bg-whit">
                    <CollabCard title={"No"} description={"something"} author={"YOU"}/>
                    <CollabCard title={"No"} description={"something"} author={"YOU"}/>
                    <CollabCard title={"No"} description={"something"} author={"YOU"}/>
                    <CollabCard title={"No"} description={"something"} author={"YOU"}/>
                    <CollabCard title={"No"} description={"something"} author={"YOU"}/> 
                </div>
            </div>
            <Sidebar/>
        </div>
    )
}
export default CollabHome;