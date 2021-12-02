import AboutMe from "./AboutMe.js"
import pavan from "./images/pavan.jpg"
import harish from "./images/harish.jpg"
import manjunath from "./images/manjunathr.jpg"
import srujan from "./images/srujanr.jpg"
import { Link } from "react-router-dom";

function AboutUs() 
{
    // Variables for the images

    const url1 = pavan;
    const url2 = harish;
    const url3 = manjunath;
    const url4 = srujan;

    // Button component to divert back to Home
    const HomeButton = () => {
      return(
        <Link to="/home"
            className="bg-lightBlu30 py-3 px-4 m-2 w-30 rounded flex flex-row gap-x-4 place-self-start 
            font-semibold text-darkBlu shadow-glow_sb1 transition duration-500 ease-in-out transform hover:bg-lightBlu20 hover:scale-105 hover:shadow-glow_sb2">
    
          <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
            Home
        </Link>
      )
    }

    // Rendering the About Us Content
    return (
        <div className="flex flex-col h-screen rounded-lg mx-2 my-2 bg-whit overflow-y-auto">
            
            {/* The header of the page */}
            <div className="flex flex-row w-full mx-auto sm:justify-between ">
                
              <HomeButton />
              
              <div className=" justify-between m-2 ml-4 mb-4 text-3xl text-left font-medium flex flex-row gap-x-2 place-self-center">
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 self-center" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                About Us
                </div>
                <div className=""></div>
            </div>

            
            <div className="bg-white h-0.5 rounded-br-lg"></div>
            
            <div className=" grid grid-cols-1 small:grid-cols-2 medium:grid-cols-4 rounded-lg mx-2 my-2 bg-whit justify-between overflow-y-auto flex-grow small:flex-col gap-y-2">
                <AboutMe url={url1} description={"FrontEnd Developer"}/>
                <AboutMe url={url2} description={"FrontEnd Developer"}/>
                <AboutMe url={url3} description={"FullStack Developer"}/>
                <AboutMe url={url4} description={"FullStack Developer"}/>
            </div>
        </div>
    );
}

export default AboutUs;