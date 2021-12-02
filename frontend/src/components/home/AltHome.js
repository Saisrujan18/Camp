import {React, useState} from 'react'
import "./Home.css";

//import {BigTile} from "./AltTile"
import {Tile} from "./AltTile"
import fire from "../home/assets/Camp.png";

// This page is the page that appears after logging in
// This page shows the links to all the pages of the webapp
// User can navigate through the webapp from the home


const styles = {
    body: "body flex flex-row rounded-lg text-blac",
    login_menu:
      "login-menu bg-whit justify-around rounded-lg flex-1 small_l:rounded-l-lg",
    login_body: "login-body flex flex-col rounded-l h-full",
    logo: "logo  mx-auto flex items-center gap-x-2 text-black",
    login_header: "login-header my-5 mx-auto text-xl font-semibold",
    login_button:
      "login-button flex items-center my-2 mx-auto bg-blue-500 rounded text-gray-50 px-10 py-2 transition duration-700 ease-in-out transform hover:scale-105 hover:shadow-glow_sb2",
    login_image:
      "login-image items-center overflow-hidden h-auto hidden medium_l:block medium_l:w-3/4 large:w-5/7 rounded-r-lg",
    logofont: "subpixel-antialiased font-bold text-3xl text-black",
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
    const getTile = (tile, index) => {
        if(index===tiles.length-1 && tiles.length%2===1)
        {
            return(
                <div className="Tile w-full h-full col-start-1 col-span-1 medium_l:col-span-2 cursor-pointer transition duration-500 ease-in-out transform hover:scale-105" key={tile.id}><Tile title={tile.title}/></div>
            )
        }
        else
        {
            return(
                <div className="Tile w-full h-full col-start-1 col-span-1 medium_l:col-span-1 cursor-pointer transition duration-500 ease-in-out transform hover:scale-105" key={tile.id}><Tile title={tile.title}/></div>
            )
        }
    }
    const getTitle = () => {
        return (
            <div className="flex flex-row justify-center bg-white rounded-t-lg py-2">
                    <div className={styles.logo}>
                        <div className={styles.logofont}>Welcome to</div>
                        <img src={fire} className="w-12" alt="Not found"></img>
                        <div className={styles.logofont}>Camp</div>
                    </div>
            </div>
        )
    }
    const getContent = () => {
        return ( 
            <div className="main h-full w-full overflow-y-auto">    
                <div className="grid medium_l:grid-cols-2 grid-rows-auto grid-cols-1 place-content-center place-items-center gap-x-8 gap-y-4 p-4 small_l:p-6 ">
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
            <div className="BG bg-fixed h-screen w-screen py-2">
                <div className="flex flex-col py-2 h-full small:mx-4 medium:mx-4 large:mx-4">
                    <div className="rounded-t-lg w-auto">
                        {getTitle()}
                    </div>
                    <div className="bod flex flex-col flex-grow rounded-b-lg">
                        <div className="py-12 px-8 rounded-b-lg h-full w-full">
                            {getContent()}
                            <div className="flex-grow bg-red-600"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    // return (
    //     <div className="bod rounded-lg bg-darkBlu">
    //         <div className="flex flex-row">
    //             {/* <div className="flex-grow"></div> */}
    //             <div className="grid md:grid-cols-2 grid-rows-auto grid-cols-1 gap-x-6 gap-y-4 flex-wrap place-content-center overflow-y-auto justify-center pt-6 m-auto">
                            
    //                 <Link className="flex flex-row w-full h-full  content-center md:col-span-2 col-span-1 " to={"/home"} >
    //                         <div className="my-14 mx-auto flex items-center gap-x-2 text-white">
    //                             <div className="subpixel-antialiased font-bold text-2xl">Welcome to </div>
    //                                 <img src={fire} className="w-9" alt="Not found"></img>
    //                             <div className="subpixel-antialiased font-bold text-2xl">Camp</div>
    //                         </div>
    //                 </Link>

    //                 <BigTile title={"Collab"}/>           
    //                 <BigTile title={"Experiences"}/>
    //                 <BigTile title={"Profile"}/>
    //                 <BigTile title={"AboutUs"}/>
    //                 <BigTile title={"Sports"}/>
    //                 <BigTile title={"DigitalWizards"}/>
    //                 <BigTile title={"Techmaniacs"}/>
    //                 <BigTile title={"Sargam"}/>
    //             </div>
    //             {/* <div className="flex-grow"></div> */}
    //         </div>
    //     </div>
    // );
    return(
        getHomeScreen()
    )
}