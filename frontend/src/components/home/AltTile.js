/* eslint-disable no-unused-vars */

// These are the reusable components that are used in the Home page
// Created a seperate component to avoid code repetition. 

import {Link} from "react-router-dom";
 
export const BigTile = (props) => {

    const redirection ="/"+props.title.toLowerCase()
    return ( 
        <Link className="flex flex-row w-full h-full rounded-lg p-4 content-center cursor-pointer bg-whit flex-shrink  transition duration-500 ease-in-out transform hover:scale-105 " to={redirection} >
            <p className=" font-semibold text-md  overflow-ellipsis overflow-hidden flex-grow self-center cursor-pointer mr-1 ml-2 bg-whit">{props.title}</p>
        </Link>
    );
}

export const Tile = (props) => {
    const redirection ="/"+props.title.toLowerCase()
    return ( 
        <Link className="flex flex-row w-full h-full rounded-lg py-4 px-6 cursor-pointer bg-whit" to={redirection}>
            <p className="font-semibold text-lg overflow-ellipsis overflow-hidden mr-2 ml-2">{props.title}</p>
        </Link>
    );
}