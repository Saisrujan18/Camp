import { useState, useLayoutEffect } from 'react';
import { AuthProvider } from '../../authContext/AuthContext';

function NewCollab(props)
{
    const closePopup = (event) => {
		props.visibility(false)
		event.preventDefault();
	}
	// const useWindowSize = () =>
	// {
	// 	const [size, setSize] = useState([0, 0])
	// 	useLayoutEffect(() => {
	// 	function updateSize() {
	// 		setSize([window.innerWidth, window.innerHeight]);
	// 	}
	// 	window.addEventListener('resize', updateSize);
	// 	updateSize();
	// 	return () => window.removeEventListener('resize', updateSize);
	// 	}, []);
	// 	return size;
	// }
	const [collab, setCollab] = useState({
		title: "",
		// name:"",
		description: "",
		// links: {},
	});
	const handleChange = (event) => {
		
		const {name, value} = event.target
    	setCollab(prevNote => {
      	return {
        	...prevNote,
        	[name]: value}
    	})
		event.preventDefault();
	}
	// const [width, height] = useWindowSize()
    // console.log(width+" "+height)
    return ( 
        <div className="modalBackground flex flex-row w-screen h-screen rounded-lg my-2 bg-gray-200 fixed justify-center items-center">
			
			<div className="modalContent flex flex-col justify-center rounded-lg p-10 w-auto h-auto bg-white">
			<form>
				<input className="w-full mx-1 my-2" name="title" onChange={handleChange} value={collab.title} placeholder="Project Title" />
				<textarea className="w-full mx-1 my-2" name="description" onChange={handleChange} value={collab.description} placeholder="Description" rows="4" />
				<div className="flex flex-row w-full justify-between">
					<button 
						className="p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded">Add</button>
					<button 
						className="p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
						onClick={closePopup}>Close</button>
				</div>
			</form>
			</div>
    	</div>
    );
}
 
export default NewCollab;