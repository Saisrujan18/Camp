import { useState } from 'react';
import { AuthProvider } from '../../authContext/AuthContext';

function NewCollab(props)
{
	const [tabNumber, setTabNumber]=useState(0)
	const [collab, setCollab] = useState({
		title: "",
		name:"",
		description: "",
		links: "",
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
	const closePopup = (event) => {
		props.visibility(false)
		props.addCollab(collab)
		event.preventDefault();
	}
	const setTab = (event,number) =>
	{
		if(number!==tabNumber)
			setTabNumber(number);
		event.preventDefault();
	}
	const Tab = (props) => {
		return (
			<button className="block py-2 pr-1 w-full hover:text-darkBlu hover:bg-gray-200 font-bold text-xs rounded" onClick={(event) => {setTab(event, props.number)}}>
				{props.text}
			</button>
		);
	}
	const tab1 = () => {
		return (
			<div className={`modalContent flex flex-col justify-start rounded-r-lg p-10 sm-custom:w-{240} md:w-6/12 lg:w-5/12 xl:w-4/12 h-1/2 bg-white`}>
			<form className="w-100 h-100">
				<input className="w-full mx-1 my-2" name="title" onChange={handleChange} value={collab.title} placeholder="Project Title" />
				<textarea className="w-full mx-1 my-2" name="links" onChange={handleChange} value={collab.links} placeholder="Links Here" rows="4" />
				<div className="flex flex-row w-full justify-between justify-end">
					<button 
						className="p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded">Add</button>
					<button 
						className="p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
						onClick={closePopup}>Close</button>
				</div>
			</form>
			</div>
		);
	}
	const tab2 = () => {
		return (
			<div className={`modalContent flex flex-col justify-start rounded-r-lg p-10 sm-custom:w-{240} md:w-6/12 lg:w-5/12 xl:w-4/12 h-1/2 bg-white`}>
			<form className="w-100 h-100">
				<input className="w-full mx-1 my-2" name="name" onChange={handleChange} value={collab.name} placeholder="Name of Author" />
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
		);
	}
	const Tabs = [tab1(), tab2()]
	const SideTabMini = () => {
			return (
			<aside className=" bg-whit text-blue-100 w-25 h-1/2 space-y-6 px-2 py-4 rounded-l-lg">
				<nav className="text-blac">
				<Tab number={0} text="Overview"/>
				<Tab number={1} text="Description"/>
				</nav>
			</aside>
		);
	}
    return ( 
		<div className="modalBackground flex flex-row w-screen h-screen rounded-lg my-2 bg-gray-200 fixed justify-center items-center">
			<SideTabMini/>
			{Tabs[tabNumber]}
    	</div>
    );
}

export default NewCollab;