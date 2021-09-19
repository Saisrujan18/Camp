import React from 'react'
import BigTile from "./BigTile"
import Tile from "./Tile"
import "./Home.css"
import bg from "./assets/BG.png";

export function Home() {
    return (
        <div className="main grid gap-4 grid-cols-1 md:grid-cols-2  place-content-center  place-items-center bg-whit m-3 rounded-lg">
            {/* <img src={bg} className="max-w-full max-h-full bg-contain imagee" /> */}
            <BigTile title={"Internships"} />
            <BigTile title={"CampCollab"}/>
            <Tile title={"Digital Wizards"} description={"Something"}/>
            <Tile title={"Cam"}  description={"Something"}/>
            <Tile title={"Ca"}  description={"Something"}/>
        </div>
    )
}

// justify-center items-center
//