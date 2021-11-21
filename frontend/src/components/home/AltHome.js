import React from 'react'
import "./Home.css";

import {BigTile} from "./AltTile"
import fire from "../home/assets/Camp.png";
import { Link } from 'react-router-dom';

//  Neglect the files starting wuth "_" in the home folder
// This page is the page that appears after loggining in
// This page shows the all the different pages of webapp
//  User can navigate through the webapp using this.

export function AltHome() 
{
    return (
        <div className="bod rounded-lg bg-darkBlu">
            <div className="flex flex-row">
                {/* <div className="flex-grow"></div> */}
                <div className="grid md:grid-cols-2 grid-rows-auto grid-cols-1 gap-x-6 gap-y-4 flex-wrap place-content-center overflow-y-auto justify-center pt-6 m-auto">
                            
                    <Link className="flex flex-row w-full h-full  content-center md:col-span-2 col-span-1 " to={"/home"} >
                            <div className="my-14 mx-auto flex items-center gap-x-2 text-white">
                                <div className="subpixel-antialiased font-bold text-2xl">Welcome to </div>
                                    <img src={fire} className="w-9" alt="Not found"></img>
                                <div className="subpixel-antialiased font-bold text-2xl">Camp</div>
                            </div>
                    </Link>

                    <BigTile title={"Collab"}/>           
                    <BigTile title={"Experiences"}/>
                    <BigTile title={"Profile"}/>
                    <BigTile title={"AboutUs"}/>
                    <BigTile title={"Sports"}/>
                    <BigTile title={"DigitalWizards"}/>
                    <BigTile title={"Techmaniacs"}/>
                    <BigTile title={"Sargam"}/>
                </div>
                {/* <div className="flex-grow"></div> */}
            </div>
        </div>
    );
}