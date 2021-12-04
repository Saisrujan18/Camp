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
			className="bg-lightRed30 block p-3 mr-3 w-auto rounded flex flex-row gap-x-4 self-end
			font-semibold text-darkOrang shadow-glow_r1 transition duration-500 ease-in-out transform hover:bg-lightRed40 hover:scale-105 hover:shadow-glow_r2 items-center justify-center">
	
			<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
				<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
			</svg>
		</Link>
	)
	}

	// Rendering the About Us Content
	return (
		<div className="w-screen h-screen">
			<div className="flex flex-col h-full p-2 bg-whit small_l:my-2 small_l:rounded-lg small_l:mx-2 overflow-y-auto">
				{/* The header of the page */}
				<div className="flex flex-row bg-whit rounded-t-lg border-b-2 items-center pb-2">
					<div className="flex-grow"/>
					<div className="mx-2 p-2 text-2xl small_l:text-3xl items-center cursor-default font-medium flex flex-row gap-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 self-center" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
						</svg>
						About Us
					</div>
					<div className="flex-grow"/>
					<HomeButton/>
				</div>
				<div className=" grid grid-cols-1 small:grid-cols-2 medium:grid-cols-4 rounded-lg mx-2 my-2 bg-whit justify-between flex-grow small:flex-col gap-y-2">
					<AboutMe url={url1} description={"FrontEnd Developer"}/>
					<AboutMe url={url2} description={"FrontEnd Developer"}/>
					<AboutMe url={url3} description={"FullStack Developer"}/>
					<AboutMe url={url4} description={"FullStack Developer"}/>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;