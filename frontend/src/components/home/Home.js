import React from 'react'

import "./Home.css";

import BigTile from "./BigTile"
import Tile from "./Tile";
import fire from "../home/assets/Camp.png";

import CollabCard from '../collab/CollabCard';

export function Home() 
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
                    <div className="grid md:grid-cols-2 grid-rows-auto grid-cols-1 place-content-center place-items-center gap-x-6 gap-y-4">
                        <BigTile title={"Internships"}/>
                        <BigTile title={"CampCollab"}/>
                        <Tile title={"Digital Wizards"}/>
                        <Tile title={"TechManiacs"}/>
                        <Tile title={"Gagan Vedhi"}/>
                        <Tile title={"Something"}/>            
                    </div>
                </div>
            </div>
        </div>

    );
}

// justify-center items-center
//