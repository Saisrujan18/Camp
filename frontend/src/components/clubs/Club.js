import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Sidebar from '../Sidebar'
import Post from './Post';
import Spinner from '../Spinner';

export default function Club(props) 
{
	const [postsData,updatePosts]=useState([]);
	const [loading,setLoading]=useState(true);

    useEffect(() => {
		axios
		.get("http://localhost:3001/api/clubs/"+props)
		.then((res) => {
			updatePosts(res.data);
			setLoading(false);
		})
		.catch((err) => console.log(err));
	},[]);

	function renderCard(props)
	{
		return (
			<Post
				club={props.club}
				image={props.image}
				imageData={props.imageData}
				title={props.title}
				author={props.author}
				description={props.description}
				registerable={props.registerable}
				registered= {props.registered}
			/>
		);
	}

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
				{/* Minor change */}
				{loading?<Spinner/>:
					<div className="grid grid-cols-1 small:grid-cols-2 medium:grid-cols-3 large:grid-cols-4 bg-whit items-center p-2">
        				{postsData.map((exp) => renderCard(exp))}
      				</div>
				}

				<Post displayName="Srujan" username="none" verified="no" text="yo"/>
				<div className="flex-grow bg-whit rounded-br-lg"></div>
			</div>
        </div>
    )
}