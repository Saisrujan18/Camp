import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Sidebar from '../Sidebar'
import Post from './Post';
import Spinner from '../Spinner';

export default function Club(props) 
{
	const [postsData,updatePosts]=useState({});
	const [loading,setLoading]=useState(true);

    useEffect(() => {
		axios
		.get("http://localhost:3001/api/clubs/"+props)
		.then((res) => {
			updatePosts(res);
			setLoading(false);
		})
		.catch((err) => console.log(err));
	},[]);

    return (
        <div className="flex flex-row">
            <Sidebar/>
            <div className="flex-grow bg-white md:rounded-r-lg md:mr-2 my-2 sm-custom:rounded-lg sm-custom:mx-2 flex flex-col w-screen-lg">
				<div className="flex flex-row bg-whit rounded-tr-lg border-b-2">
					<div className="m-2 ml-4 mb-4 text-3xl text-left font-bold">
						{props}
					</div>
					<div className="flex-grow"></div>
					<button
						className="place-self-end block p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
					>
						+New
					</button>	
				</div>
				{loading?<Spinner/>:<div className="bg-red-200"> yo</div>
}
				<div className="flex-grow bg-whit rounded-br-lg"></div>
			</div>
        </div>
    )
}