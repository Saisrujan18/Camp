import React from 'react'
import BigTile from "./BigTile"
import Tile from "./Tile"
import "./Home.css"
import bg from "./assets/BG.png";

export function Home() {
    return (

        <div className=" main flex justify-center items-center min-h-screen">
            <div className="flex max-w-3xl md:max-w-auto p-16">
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
        

    )
}

// justify-center items-center
//