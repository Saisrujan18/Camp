import { useState } from "react";
import { TextField } from "@mui/material";
import { yellow } from "@mui/material/colors";
import AboutMe from "./AboutMe.js"
import DP from "./images/deadpool.jpg"
// import Sidebar from "../Sidebar.js";

function AboutUs() 
{
    // Variables required for the popup are declared over here.
    // const [sidebarState, setSidebarState] = useState(false);
    const p1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus, urna et accumsan fermentum, elit est commodo nisl, at iaculis neque dui vitae arcu. Nulla et ante ornare, pharetra arcu in, tincidunt felis. Phasellus auctor odio nec est porttitor, nec rutrum sapien scelerisque. Vivamus id quam eget magna commodo pharetra vitae non augue. Vestibulum ullamcorper est ac lobortis luctus. Curabitur pharetra nisi et lacus ultricies, sit amet semper nunc pretium. Morbi at mauris sodales, lacinia sapien eget, dignissim turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum fermentum accumsan purus. Donec risus magna, vehicula sit amet felis quis, vehicula pharetra metus. Nam aliquam lorem congue augue convallis dignissim. Pellentesque vel nunc sed ligula bibendum ultricies ac ac erat. Fusce lobortis mattis lorem, eget tempus mauris consequat sed."
    const p2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus, urna et accumsan fermentum, elit est commodo nisl, at iaculis neque dui vitae arcu. Nulla et ante ornare, pharetra arcu in, tincidunt felis. Phasellus auctor odio nec est porttitor, nec rutrum sapien scelerisque. Vivamus id quam eget magna commodo pharetra vitae non augue. Vestibulum ullamcorper est ac lobortis luctus. Curabitur pharetra nisi et lacus ultricies, sit amet semper nunc pretium. Morbi at mauris sodales, lacinia sapien eget, dignissim turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum fermentum accumsan purus. Donec risus magna, vehicula sit amet felis quis, vehicula pharetra metus. Nam aliquam lorem congue augue convallis dignissim. Pellentesque vel nunc sed ligula bibendum ultricies ac ac erat. Fusce lobortis mattis lorem, eget tempus mauris consequat sed."
    const p3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus, urna et accumsan fermentum, elit est commodo nisl, at iaculis neque dui vitae arcu. Nulla et ante ornare, pharetra arcu in, tincidunt felis. Phasellus auctor odio nec est porttitor, nec rutrum sapien scelerisque. Vivamus id quam eget magna commodo pharetra vitae non augue. Vestibulum ullamcorper est ac lobortis luctus. Curabitur pharetra nisi et lacus ultricies, sit amet semper nunc pretium. Morbi at mauris sodales, lacinia sapien eget, dignissim turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum fermentum accumsan purus. Donec risus magna, vehicula sit amet felis quis, vehicula pharetra metus. Nam aliquam lorem congue augue convallis dignissim. Pellentesque vel nunc sed ligula bibendum ultricies ac ac erat. Fusce lobortis mattis lorem, eget tempus mauris consequat sed."
    const p4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus, urna et accumsan fermentum, elit est commodo nisl, at iaculis neque dui vitae arcu. Nulla et ante ornare, pharetra arcu in, tincidunt felis. Phasellus auctor odio nec est porttitor, nec rutrum sapien scelerisque. Vivamus id quam eget magna commodo pharetra vitae non augue. Vestibulum ullamcorper est ac lobortis luctus. Curabitur pharetra nisi et lacus ultricies, sit amet semper nunc pretium. Morbi at mauris sodales, lacinia sapien eget, dignissim turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum fermentum accumsan purus. Donec risus magna, vehicula sit amet felis quis, vehicula pharetra metus. Nam aliquam lorem congue augue convallis dignissim. Pellentesque vel nunc sed ligula bibendum ultricies ac ac erat. Fusce lobortis mattis lorem, eget tempus mauris consequat sed."
    const url1 = DP;
    const url2 = DP;
    const url3 = DP;
    const url4 = DP;

    return (
        <div className="flex flex-col rounded-lg mx-2 my-2 bg-whit justify-between overflow-y-auto">
            <div className="flex-grow"></div>
              <div className="m-2 ml-4 mb-4 text-3xl text-left font-medium flex flex-row gap-x-2 place-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 self-center" viewBox="0 0 20 20" fill="currentColor">
  					<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
				</svg>
              About Us
              </div>
              <div className="flex-grow"></div>
              <div className="flex-grow bg-white h-0.5 rounded-br-lg"></div>

            <div className=" flex flex-row rounded-lg mx-2 my-2 bg-whit justify-between overflow-y-auto">
                <AboutMe url={url1} description={p1}/>
                <AboutMe url={url2} description={p2}/>
                <AboutMe url={url3} description={p3}/>
                <AboutMe url={url4} description={p4}/>
            </div>
        </div>
    );
}

export default AboutUs;