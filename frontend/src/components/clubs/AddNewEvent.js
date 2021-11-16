import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { postsRef, uB } from "../../firebase";
import { getDownloadURL } from "firebase/storage";
import { useAuth } from "../../authContext/AuthContext";


import TextField from '@mui/material/TextField';
import {
    Publish
} from "@material-ui/icons";
import {AddAPhotoOutlined} from '@mui/icons-material';
import Switch from '@mui/material/Switch';
import axios from "axios";
import Spinner from "../Spinner";
import InputBase from "@mui/material/InputBase";


export default function AddNewEvent(props) 
{
	const [des, setDes] = useState();
	const [file, setFile] = useState();
	const [imgSrc, setImgSrc] = useState("");
	const [loading,setLoading]=useState(false);
	
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
		let temp={...post};
		if(e.target.name==="hasImage"){temp.hasImage=!temp.hasImage;}
		else if(e.target.name==="registrable"){temp.registrable=!temp.registrable;}
		setPost(temp);
    };

	// const handleFileChange = async (e) => {
	// 	await setFile(e.target.files[0])
	// 	console.log(file)
	// }
	const handleFileChange = (e) => {
		setFile(e.target.files[0])
		console.log(file)
		imageHandler()
	}
	const handleUpload = async () =>{

		setLoading(true);
		let temp={...post};
		if(post.hasImage)
		{
			let date = new Date().toISOString();
			const filename = user.email + date;
			
			let ref = postsRef(filename);
			await uB(ref, file)
			
			let url = await getDownloadURL(ref)
			temp.imageData=url;	
		}
		props.addEvent(temp);
		closePopup();
		// axios.post("http://localhost:3001/api/clubs/newpost",temp)
		// 	.then((res)=>{closePopup();})
		// 	.catch((err)=>{console.log(err);})
	}
	const addImageOption = () => {
		return (  
			<button className={"flex flex-row gap-x-2 block p-2 m-1 self-center font-bold rounded "
				+(!post.hasImage?"hover:text-darkBlu hover:bg-gray-200 ":"text-darkBlu bg-gray-200 hover:text-black hover:bg-darkOrang25")} 
				name="hasImage" onClick={handleToggle}>
				<svg className="h-6 w-6 self-center">
                	<AddAPhotoOutlined/>
              	</svg>
				Add Image
			</button>
		);
	}
	function imageHandler(e)
	{
		const reader = new FileReader();
		reader.onload = () =>{
		  if(reader.readyState === 2){
			setImgSrc(reader.result)
		  }
		}
		if(file)
			reader.readAsDataURL(file)
	};
	const closePopup = () => {props.visibility(false)};
	

return (
    <div className="flex flex-row h-screen">
      	<Sidebar />
		<div className="flex-grow bg-whit large:rounded-r-lg large:mr-2 medium:rounded-r-lg medium:mr-2 my-2 small:rounded-lg small:mx-2 flex flex-col w-screen-lg overflow-y-auto">
			{/* Header */}
			<div className="flex flex-row bg-whit rounded-tr-lg border-b-2 top-0">
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
			<div className="flex flex-col h-auto px-4 py-2 w-2/3 rounded-lg justify-start self-center items-stretch bg-white overflow-y-scroll">
				
				
				<Switch  
					className="self-center"
					name="registrable" 
					checked={post.registrable}
					onChange={handleToggle}
					size="small"	
				/>
				<TextField 
					label="Author" 
					className="m-10" 
					id="outlined-basic"  
					variant="filled" 
					value={post.author} 
					disabled
				/>
				<div className="mt-3"></div>
				<TextField 
					className="p-3"
					id="outlined-basic" 
					helperText="Enter the title for the post"
					label="Title" 
					variant="filled" 
					name="title"
					value={post.title} 
					onChange={handleChange}
				/>
				<div className="mt-3"></div>
				<TextField 
					className="p-4"
					id="outlined-basic" 
					helperText="Enter the Description"
					label="Description" 
					variant="filled"
					multiline
					minRows={4}
					name="description" 
					value={post.description} 
					onChange={handleChange}
				/>
				{/* <Switch  
					className="self-center"
					name="hasImage" 
					checked={post.hasImage}
					onChange={handleToggle}
					size="small"	
				/> */}
				{addImageOption()}	
				{post.hasImage && 
				
					<div className="flex flex-col p-4 shadow-lg bg-whit mb-3 rounded-lg w-auto h-auto">
							<input className="hidden" type="file" id="image" name="image" accept="image/png, image/jpeg" onChange={handleFileChange}/>
							<label for="image" className="h-auto w-48 cursor-pointer flex flex-row gap-x-2 block p-3 my-2 text-justify hover:text-darkBlu hover:bg-gray-200 font-bold rounded">
								<svg className="h-6 w-6 self-center">
									<Publish/>
								</svg>
								Select from Files
							</label>
							<div className="self-center px-2 h-auto">
                				{imgSrc!=="" && <img className="w-full h-auto rounded-lg" src={imgSrc} alt="Couldn't load. Please try again"></img>}
            				</div>
					</div>
				}
				{loading?
					<button
					className="block p-3 my-2 text-justify hover:text-darkBlu hover:bg-gray-200 font-bold rounded ml-auto"
					>
					<Spinner/>
				</button>
				:
				<button
					className="flex flex-row gap-x-2 block p-3 my-2 text-justify hover:text-darkBlu hover:bg-gray-200 font-bold rounded ml-auto"
					onClick={handleUpload}>
					<svg className="h-6 w-6 self-center">
                		<Publish/>
              		</svg>
					Post
				</button>
				}
			</div>
      	</div>
    </div>
  );
}

// author uneditedable....email
// Title ....input text
// Description input field...wordlimit
// Registrable checkbox
// Image checkbox...?image:""