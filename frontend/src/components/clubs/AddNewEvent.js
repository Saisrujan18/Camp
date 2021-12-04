import React, { useState } from "react";
import { SidebarH } from "../../App"
import { postsRef, uB } from "../../firebase";
import { getDownloadURL } from "firebase/storage";
import { useAuth } from "../../authContext/AuthContext";


import TextField from '@mui/material/TextField';
import {Publish} from "@material-ui/icons";
import {AddAPhotoOutlined, UploadFileTwoTone} from '@mui/icons-material';
import Spinner from "../Spinner";
import {newpost_styles} from "./clubs_className"


export default function AddNewEvent(props) 
{
	//Variables required for file upload
	const [des, setDes] = useState();
	const [file, setFile] = useState();
	const [imgSrc, setImgSrc] = useState("");
	const [loading,setLoading]=useState(false);
	const [editorNegative, setNegative]=useState(false);
	
	//Get current user details
	let {user}=useAuth();
	const [post,setPost]=useState({
		club:props.club,
		hasImage:false,
		imageData:"",
		title:"",
		author:user.email,
		description: ""
	});

	//Append details to the already existing post
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

	//Used to set/reset if the post contains a picture
	const handleToggle=(event) => 
	{
		let temp={...post};
		if(event.target.name==="hasImage"){temp.hasImage=!temp.hasImage;}
		//else if(event.target.name==="registrable"){temp.registrable=!temp.registrable;}
		setPost(temp);
    };

	//Handle file change
	const handleFileChange = async (event) => {
		setFile(event.target.files[0])
		imageHandler()
	}

	//Handle the upload of post to the Server
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
	}

	//Button for Adding Images
	const addImageOption = () => {
		return (  
			<button className={newpost_styles.newpost__addImageButton
				+(!post.hasImage?newpost_styles.addImageButton__hoverAddImg:newpost_styles.addImageButton__hoverRemoveImg)} 
				name="hasImage" onClick={handleToggle}>
				<svg className={newpost_styles.addImageButton__svg}>
                	<AddAPhotoOutlined/>
              	</svg>
				Add Image
			</button>
		);
	}

	//Helper function to display preview of Image
	function imageHandler(event)
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
	function setEditor(flag){setNegative(flag)}
	

//Returns the entire AddNewEvent component
return (
    <div className={newpost_styles.newpost__screen}>
		{/* Sidebar */}
      	<SidebarH hasEditor={true} handleEditor={setEditor}/>
		<div className={newpost_styles.newpost__body+((editorNegative)?" -z-10":"")}>
			{/* Header */}
			<div className={newpost_styles.newpost__header}>
            	<div className={newpost_styles.newpost__flexgrow}/>
              	<div className={newpost_styles.newpost__title}>
			  		{"Create a new "+props.club+" post"}
              	</div>
              	<div className={newpost_styles.newpost__flexgrow}/>
              	<button
                	className={newpost_styles.newpost__backButton}
					onClick={closePopup}
				>
					<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-svg-icon-small w-svg-icon-small"
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
			<div className={newpost_styles.newpost__inputFields}>
				
				<TextField 
					label="Author" 
					className="p-4" 
					id="outlined-basic"  
					variant="filled" 
					value={post.author} 
					disabled
				/>
				<TextField 
					className="p-4"
					id="outlined-basic" 
					helperText="Enter the title for the post"
					label="Title" 
					variant="filled" 
					name="title"
					value={post.title} 
					onChange={handleChange}
				/>
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
				{/* Toggle hasImage */}
				{addImageOption()}
				{/* Upload image file from system */}
				{post.hasImage && 
					<div className={newpost_styles.newpost__imagePreview}>
						<input className="hidden" type="file" id="image" name="image" accept="image/png, image/jpeg" onChange={handleFileChange}/>
						<label for="image" className={newpost_styles.newpost__selectFromFilesButton}>
							<svg className={newpost_styles.selectFromFilesButton__svg}>
								<UploadFileTwoTone/>
							</svg>
							Select from Files
						</label>
						{/* <div className={newpost_styles.newpost__imageHolder}>
							{imgSrc!=="" && <img className={newpost_styles.newpost__image} src={imgSrc} alt="Couldn't load. Please try again"/>}
						</div> */}
					</div>
				}
				{loading?
					<div className={newpost_styles.publishButton_spinner}>
						<Spinner/>
					</div>:
					<button
						className={newpost_styles.newpost__publishButton}
						onClick={handleUpload}>
						<svg className={newpost_styles.publishButton_svg}>
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