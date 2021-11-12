import React from 'react'

export default function Event(props) 
{
    return(
        <div className="flex flex-col bg-darkBlu w-full max-w-post-feed min-w-post-feed h-auto rounded-lg self-center">
            
            <div className="flex flex-row">
                <div className="Avatar w-avatar-dp h-avatar-dp">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full self-center" viewBox="0 0 20 20" fill="currentColor">
					    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
				    </svg>    
                </div>
                <div className="flex flex-col px-2 py-4">
                    <div className="text-2xl font-camp">{props.title}</div>
                    <div className="user_info flex flex-row w-auto">
                        <div className="font-semibold italic text-black">{props.username}</div>
                        <div className="italic text-gre">{"@"+props.userid}</div>
                        <div className="flex-grow bg-whit"></div>
                    </div>
                    <div className="flex-grow bg-whit"></div>
                </div>
            </div>
            
            <div className="font-title_1 italic px-6 py-1">{props.description}</div>
            <div className="self-center px-4 w-98">
                {props.hasImage && <img className="w-full h-auto rounded-lg" src={props.imageData} alt="Couldn't load. Please try again"></img>}
            </div>
            <div className="flex flex-row w-full px-4 py-1 justify-around">
                <div>Like</div>
                <div>Follow</div>
                <div>Comment</div>
            </div>
            {props.registarable && <button>R</button>}
        </div>
    )
}
