import {React, useState} from 'react'
import "./Home.css";
import {Tile} from "./AltTile"
import fire from "../home/assets/Camp.png";
import { style } from '@mui/system';

// This page is the page that appears after logging in
// This page shows the links to all the pages of the webapp
// User can navigate through the webapp from the home

// styles object to reduce inline styling
const styles = {
    
    BG:"BG bg-fixed w-screen",
    body:"flex flex-col justify-center min-h-screen h-full py-4 small:mx-4 medium:mx-4 large:mx-4",
    
    content: "patternContent flex-grow bg-whit85 p-5 rounded-b-lg h-auto w-auto",
    content_body:"main h-full w-full overflow-y-auto",
    grid_links:"grid medium_l:grid-cols-2 grid-rows-auto grid-cols-1 place-content-center place-items-center gap-x-8 gap-y-4 p-4 small_l:p-6",

    title:"patternTitle bg-darkBlue85 p-5 h-home-title-small medium_l:h-home-title rounded-t-lg w-auto cursor-default",
    title_body:"flex flex-row justify-center h-full",
    logo:"w-auto h-2/3 mx-2 self-center",
    heading:"flex flex-col mx-2 justify-center",
    font_welcome:"text-whit subpixel-antialiased font-bold text-lg medium_l:text-xl px-4 self-center",
    font_camp:"font-camp text-whit subpixel-antialiased font-italic text-3xl medium_l:text-6xl px-4 self-center",

    tile_span2:"Tile w-full h-full col-start-1 col-span-1 medium_l:col-span-2 cursor-pointer transition duration-500 ease-in-out transform hover:scale-105",
    tile_span1:"Tile w-full h-full col-start-1 col-span-1 medium_l:col-span-1 cursor-pointer transition duration-500 ease-in-out transform hover:scale-105"
  };

export function AltHome() 
{
    const [tiles, setTiles] =  useState([
        {title:'Collab', id:1},
        {title:'Experiences', id:2},
        {title:'Profile', id:3},
        {title:'AboutUs', id:4},
        {title:'Sports', id:5},
        {title:'DigitalWizards', id:6},
        {title:'Techmaniacs', id:7},
        {title:'Sargam', id:8}
    ])

    //Renders each Tile
    const getTile = (tile, index) => {
        if(index===tiles.length-1 && tiles.length%2===1)
        {
            return(
                <div className={styles.tile_span2} key={tile.id}><Tile title={tile.title}/></div>
            )
        }
        else
        {
            return(
                <div className={styles.tile_span1} key={tile.id}><Tile title={tile.title}/></div>
            )
        }
    }

    //Renders the Title for Home Page
    const getTitle = () => {
        return (
            <div className={styles.title_body}>
                <img src={fire} className={styles.logo} alt="Not found"></img>
                <div className={styles.heading}>
                    <div className={styles.font_welcome}>Welcome to </div>
                    <div className={styles.font_camp}>Camp</div>
                </div>
            </div>
        )
    }

    //Renders the content i.e. Links to all the pages
    const getContent = () => {
        return ( 
            <div className={styles.content_body}>    
                <div className={styles.grid_links}>
                    {
                        tiles.map((tile, index)=>(
                            getTile(tile, index)
                        ))
                    }               
                </div>
            </div>
        )
    }

    //Renders the Home Screen
    const getHomeScreen = () => {
        return (
            <div className={styles.BG}>
                <div className={styles.body}>
                    <div className={styles.title}>
                        {getTitle()}
                    </div>
                    <div className={styles.content}>
                        {getContent()}
                    </div>
                </div>
            </div>
        )
    }
    return(
        getHomeScreen()
    )
}