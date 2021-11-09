import React, { useState } from "react";
import Sidebar from "../Sidebar";

export default function AddNewEvent(props) {
  // const [post,setPost]=useState({});
    const [des, setDes] = useState();
  // console.log(props);
  // const handleChange = (event) => {
  //     event.preventDefault();
  //     const { name, value } = event.target;
  //     setExp((prevNote) => {
  //     return {
  //         ...prevNote,
  //         [name]: value,
  //     };
  //     });
  // };
  
const closePopup = () => {props.visibility(false)};

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-white md:rounded-r-lg md:mr-2 my-2 sm-custom:rounded-lg sm-custom:mx-2  w-screen-lg p-4 ">
        <div className="max-w-3xl mx-auto pt-1">
            <div className="flex flex-col">
            <button
                className="block p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded place-self-center ml-auto"
                onClick={closePopup}
            >
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
            </button>
            <h1 className="text-3xl md:text-4xl text-justify font-bold mb-14 mt-5">
                {"Create a New Post for " + props.club}
            </h1>
            <div className="flex flex-grow"></div>
            </div>
            <div className="flex flex-col p-4 border-2 mb-3 rounded-lg">
            <label className="text-xl md:text-2xl text-justify mb-5" for="iamge">Choose an image to upload</label>
                <input type="file" id="image" name="image"
                    accept="image/png, image/jpeg" />
            </div>
            <div className="flex flex-col p-4 border-2 rounded-lg">
            <label className="text-xl md:text-2xl text-justify mb-5" for="description">Description</label>
                <textarea className="border-1 focus:outline-none focus:ring focus:border-darkBlu rounded-sm p-2" id="description" name="description" type="text" placeholder="write something.." value={des} onChange={(e) => setDes(e.target.value)}/>
            </div>

            <button
            className="block p-3 my-2 text-justify hover:text-darkBlu hover:bg-gray-200 font-bold rounded ml-auto"
            onClick={console.log("hello")}
            >
            Post
            </button>
        </div>
      </div>
    </div>
  );
}
