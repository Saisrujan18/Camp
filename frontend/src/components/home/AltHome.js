import React from 'react'

import "./Home.css";

import {BigTile} from "./AltTile"
import fire from "../home/assets/Camp.png";

export function AltHome() 
{
    return (
        <div className="bod rounded-lg bg-darkBlu">
            <div className="main flex justify-center items-center h-full">
                <div className="whole flex flex-col max-w-3xl md:max-w-auto p-16 rounded-lg">

                    <div className="my-14 mx-auto flex items-center gap-x-2 text-white">
                        <div className="subpixel-antialiased font-bold text-2xl">Welcome to </div>
                        <img src={fire} className="w-9" alt="Not found"></img>
                        <div className="subpixel-antialiased font-bold text-2xl">Camp</div>
                    </div>
                    
                    <div className="grid md:grid-cols-1 grid-rows-auto grid-cols-1 place-content-center place-items-center gap-x-6 gap-y-4">
                        <BigTile title={"Collab"}/>           
                        <BigTile title={"Experiences"}/>
                    </div>
                
                </div>
            </div>
        </div>

    );
}

// justify-center items-center
//