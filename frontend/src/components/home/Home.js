import { useState, React } from 'react'
import BigTile from "./BigTile"
import Tile from "./Tile"
import "./Home.css"
import CollabCard from '../collab/CollabCard';

export function Home() {
    
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
            console.log(index+" last case")
            return(
                <div className={`bigTile col-start-1 col-span-1 md:col-start-1 md:col-span-2`} key={bigTile.id}><BigTile title={bigTile.title}/></div>
            )
        }
        else
        {
            console.log(index+" normal case")
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
        <div className="body rounded-lg">
            
            <div className=" main flex justify-center items-center h-full">
                <div className="flex max-w-3xl md:max-w-auto p-16">

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
    )
}