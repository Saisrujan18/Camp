import { useState, React } from 'react'

import "./Home.css";

import BigTile from "./BigTile"
import Tile from "./Tile";

import fire from "../home/assets/Camp.png";

import CollabCard from '../collab/CollabCard';

export function Home() 
{
    let pos=2
    const [bigTiles, setBigTile] =  useState([
        {title:'Internship', id:1},
        {title:'CampCollab', id:2},
        {title:'One More', id:7},
        {title:'2 more', id:9}
    ])
    const [tiles, setTiles] = useState([
        {title:'Digital Wizards', id:3},
        {title:'TechManiacs', id:4},
        {title:'Gagan Vedhi', id:5},
        {title:'Something', id:6},
        {title:'Something', id:8}
    ])
    const getBigTile = (bigTile, index) => {
        pos+=1
        pos%=2
        if(index===bigTiles.length-1 && bigTiles.length%2===1)
        {
            // console.log(index+" last case")
            return(
                <div className={`bigTile col-start-1 col-span-1 md:col-start-1 md:col-span-2`} key={bigTile.id}><BigTile title={bigTile.title}/></div>
            )
        }
        else
        {
            // console.log(index+" normal case")
            return(
                <div className={`bigTile col-start-1 col-span-1 md:col-start-{pos} md:col-span-1`} key={bigTile.id}><BigTile title={bigTile.title}/></div>
            )
        }
    }
    const getTile = (tile, index) =>{
        pos+=1
        pos%=2
        if(index===tiles.length-1 && tiles.length%2===1)
        {
            return(
                <div className={`tile col-start-1 col-span-1 md:col-start-1 md:col-span-2`} key={tile.id}><Tile title={tile.title}/></div>
            )
        }
        else
        {
            return(
                <div className={`tile col-start-1 col-span-1 md:col-start-{pos} md:col-span-1`} key={tile.id}><Tile title={tile.title}/></div>
            )
        }
    }
    return (
        <div className="outer rounded-lg bg-darkBlu h-full md:h-screen">
            
            <div className="main flex justify-center h-full">
                <div className="content flex flex-col h-full justify-center max-w-2xl md:max-w-auto p-16">

                    <div className="my-14 mx-auto flex items-center gap-x-2 text-white">
                        <div className="subpixel-antialiased font-bold text-2xl">Welcome to </div>
                        <img src={fire} className="w-9" alt="Not found"></img>
                        <div className="subpixel-antialiased font-bold text-2xl">Camp</div>
                    </div>

                    <div className="grid md:grid-cols-2 grid-rows-auto grid-cols-1 place-content-center place-items-center gap-x-6 gap-y-4">
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
            </div>
        
        </div>
    );
}