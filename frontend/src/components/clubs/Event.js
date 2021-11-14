import React from 'react'
import {
    ChatBubbleOutline,
    FavoriteBorder,
    Publish,
    Repeat,
    VerifiedUser,
    Person,
    Favorite,
    Bookmark,
    AddComment
} from "@material-ui/icons";

export default function Event(props) 
{
    return(
        <div className="flex flex-col bg-white border shadow-lg w-full max-w-post-feed min-w-post-feed h-auto rounded-lg self-center">
            
            <div className="flex flex-row w-full">
                <container className="Avatar w-avatar-dp-small h-avatar-dp-small md:w-avatar-dp md:h-avatar-dp">
                    <svg className="w-full h-full">
                        <Person className="w-auto flex flex-col"/>
                    </svg>
                </container>
                <div className="flex flex-col px-2 py-4">
                    <div className="text-2xl font-camp">{props.title}</div>
                    <div className="user_info flex flex-row w-auto">
                        <div className="font-semibold italic text-black">{props.username}</div>
                        {props.verified && <VerifiedUser className="text-darkBlu"/>}
                        <div className="italic text-gre">{"@"+props.userid}</div>
                        <div className="flex-grow bg-white"></div>
                    </div>
                    <div className="flex-grow bg-white"></div>
                </div>
            </div>
            
            <div className="font-title_1 italic px-6 py-1">{props.description}</div>
            <div className="self-center px-2 w-98">
                {props.hasImage && <img className="w-full h-auto rounded-lg" src={props.imageData} alt="Couldn't load. Please try again"></img>}
            </div>
            <div className="flex flex-row w-full px-4 py-1 justify-around">
                <div><Favorite/></div>
                <div><Bookmark/></div>
                <div><AddComment/></div>
            </div>
            {props.registarable && <button>R</button>}
        </div>
    )
}
