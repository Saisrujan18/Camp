import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { postsRef, uB } from "../../firebase";
import { getDownloadURL } from "firebase/storage";
import { useAuth } from "../../authContext/AuthContext";


import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';


export default function AddNewEvent(props) 
{
	const [des, setDes] = useState();
	const [file, setfile] = useState();
	
	let {user}=useAuth();

	const [post,setPost]=useState({
		club:props.club,
		hasImage:false,
		imageData:"",
		title:"",
		author:user.email,
		description: "",
		registrable: false,
		registered:[]
	});

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setPost((prevNote) => {
        return {
            ...prevNote,
            [name]: value,
        };
        });
    };

	const handleToggle=(e) => 
	{
		console.log(post);
		let temp={...post};
		temp.registrable=!temp.registrable;
		setPost(temp);
        // setPost((prevNote) => 
		// {
        // 	return {
        //     	...prevNote,
        //     	registrable: !prevNote.registrable,
        // 	};
        // });
    };
  


	const handleFileChange = (e) => {
		setfile(e.target.files[0]);
	}
	const handleUpload = async () =>{
		let date = new Date().toISOString();
		const filename = user.email + date;
		let ref = postsRef(filename);
		await uB(ref, file)
		let url = await getDownloadURL(ref)
		console.log(url)
	}
	const closePopup = () => {props.visibility(false)};

  return (
    <div className="flex flex-row">
      	<Sidebar />
		<div className="flex-grow bg-white medium:rounded-r-lg medium:mr-2 my-2 small:rounded-lg small:mx-2 flex flex-col w-screen-lg overflow-y-auto">
			{/* Header */}
			<div className="flex flex-row bg-whit rounded-tr-lg border-b-2 sticky top-0">
            	<div className="flex-grow"></div>
              	<div className="m-2 ml-4 mb-4 text-3xl text-left font-medium flex flex-row gap-x-2">
			  		{"Create a new "+props.club+" post"}
              	</div>
              	<div className="flex-grow"></div>
              	<button
                	className="block p-2 my-1 mr-4 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
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
            </div>
			{/* Input fields */}
			{/* <div className="max-w-3xl mx-auto pt-1">
            	
				<div className="flex flex-col p-4 border-2 mb-3 rounded-lg">
            
					<label className="text-xl md:text-2xl text-justify mb-5" for="iamge">Choose an image to upload</label>
						<input type="file" id="image" name="image"
						accept="image/png, image/jpeg" onChange={handleFileChange}/>
            	</div>
            	
				<div className="flex flex-col p-4 border-2 rounded-lg">
            
					<label className="text-xl md:text-2xl text-justify mb-5" for="description">Description</label>
						<textarea className="border-1 focus:outline-none focus:ring focus:border-darkBlu rounded-sm p-2" id="description" name="description" type="text" placeholder="write something.." value={des} onChange={(e) => setDes(e.target.value)}/>
            	</div>

				<button
				className="block p-3 my-2 text-justify hover:text-darkBlu hover:bg-gray-200 font-bold rounded ml-auto"
				onClick={handleUpload}>
				Post
				</button>
			</div> */}
			<div className="flex flex-col p-3">
				
				<div className="flex flex-row">
					<div className="flex-grow"></div>
					<Switch  
						className="self-center"
						name="registerable" 
						checked={post.registrable}
						onChange={handleToggle}
						size="small"	
						/>
					<div className="self-center text-lg">Reg</div>
					<div className="flex-grow"></div>
					<div className="flex-grow"></div>
					<div className="flex-grow"></div>
				</div>

				<div className="flex flex-row max-w-2xl">
					<div className="flex-grow"></div>
					<TextField label="Author" className="m-10" id="outlined-basic"  variant="outlined" value={post.author} disabled/>
					<div className="flex-grow"></div>
					<div className="flex-grow"></div>
					<div className="flex-grow"></div>
				</div>
				<TextField id="outlined-basic" label="Title" variant="outlined"/>
			</div>

			<div className="flex-grow bg-whit"></div>
      	</div>
    </div>
  );
}


// author uneditedable....email
// Title ....input text
// Description input field...wordlimit
// Registrable checkbox
// Image checkbox...?image:""