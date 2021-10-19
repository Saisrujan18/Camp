import { useState, React } from 'react'

import "./Home.css";

import BigTile from "./BigTile"
import Tile from "./Tile";

import fire from "../home/assets/Camp.png"

export function Home() 
{
    const [bigTiles, setBigTile] =  useState([
        {title:'Internship djvnjisvhuisnhuisjnodkmcksdmfionefnoaenojancjzvdnkjdnkjnkjnknknkjsdgnkjdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbsv', id:1},
        {title:'CampCollab', id:2},
        {title:'ndjadf', id:8},
        {title:'lksdnlksdf', id:9},
        {title:'lkdndsf', id:10},
        {title:'oaweredfscb', id:11},
        {title:'jhguwf', id:12},
        {title:'eoirjoai', id:13},
        {title:'C9wejdmfajef', id:14},
        {title:'qiwrasd', id:15},
        {title:'Ciowrjoiqrj', id:16},
        {title:'qoiwrjoiqfj', id:17},
        {title:'qiorejoif', id:18},
        {title:'qerefd', id:19},
        {title:'aoifjd', id:20},
        {title:'qoi3jriodab', id:21},
        {title:'wiejr', id:22},
    ])
    const [tiles, setTiles] = useState([
        {title:'Digital Wizards', id:3},
        {title:'TechManiacs', id:4},
        {title:'Gagan Vedhi', id:5},
        {title:'IDEA-Square', id:6},
        {title:'Artista', id:7}
    ])
    const getBigTile = (bigTile, index) => {
        if(index===bigTiles.length-1 && bigTiles.length%2===1)
        {
            return(
                <div className={`bigTile w-full h-full col-start-1 col-span-1 lg:col-span-2`} key={bigTile.id}><BigTile title={bigTile.title}/></div>
            )
        }
        else
        {
            return(
                <div className={`bigTile w-full h-full col-start-1 col-span-1 lg:col-span-1`} key={bigTile.id}><BigTile title={bigTile.title}/></div>
            )
        }
    }
    const getTile = (tile, index) =>{
        if(index===tiles.length-1 && tiles.length%2===1)
        {
            return(
                <div className={`tile w-full h-full col-start-1 col-span-1 lg:col-span-2`} key={tile.id}><Tile title={tile.title}/></div>
            )
        }
        else
        {
            return(
                <div className={`tile w-full h-full col-start-1 col-span-1 lg:col-span-1`} key={tile.id}><Tile title={tile.title}/></div>
            )
        }
    }
    const getContent = () => {
        return ( 
            <div className="main h-full w-full">    
                <div className="grid lg:grid-cols-2 grid-rows-auto grid-cols-1 place-content-center place-items-center gap-x-6 gap-y-4">
                    {
                        bigTiles.map((bigTile, index)=>(
                            getBigTile(bigTile, index)
                        ))
                    }     
                    {
                        tiles.map((tile, index)=>(
                            getTile(tile, index)
                        ))
                    }          
                </div>
            </div>
        )
    }
    const getHomeScreen = () => {

        return (
            <div className="BG bg-fixed h-screen w-screen overflow-y-scroll">
                <div className="flex flex-col justify-center">
                    <div className="bg-darkBlu80 p-5 h-1/3 mx-10 rounded-t-lg w-auto">
                        <div className="flex flex-row justify-start">
                            <img src={fire} className="w-14 mx-2" alt="Not found"></img>
                            <div className="flex flex-col mx-2">
                                <div className="text-whit subpixel-antialiased font-bold text-xl px-4 self-start">Welcome to </div>
                                <div className="font-camp text-whit subpixel-antialiased font-italic text-9xl px-4 self-center">Camp</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-whit80 p-5 mx-10 rounded-b-lg h-full w-auto">
                        {getContent()}
                    </div>
                </div>
            </div>
        )
    }

    return (
        getHomeScreen()
    );
}