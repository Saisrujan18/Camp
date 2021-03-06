import React from 'react'

// A reusable card to the contents of different Experiences.
export default function ExpCard(props) 
{
	// Variables required
	const colors=["blue","green","pink","purple","gray","yellow","indigo","red"];
	let selected=colors[Math.floor(Math.random()*colors.length)];
	selected=" bg-"+selected+"-500";
	const cssAuthor="mr-auto truncate text-xs text-white font-semibold rounded-full py-1 px-2 mb-1 "+selected
	const { title, author, description, _id, navigate, type,company } = props;

	// Renders a single experience card
	return (
		<div className="card ml-2 mr-2 mt-1.5 mb-1.5 cursor-pointer transition duration-500 ease-in-out transform hover:scale-105">
			<div className="flex flex-col bg-white w-full h-full min-h-collab-exp-card p-3 rounded-md shadow-md hover:shadow-glow_db" onClick={() => navigate(_id)}>
				<div className="flex flex-row">
				<div className={cssAuthor}>{company}</div>
				<div className="ml-auto truncate text-xs text-gray-500 rounded bg-whit self-center">{author}</div>
				</div>
				
				<div className="truncate text-xl font-bold">{title}</div> 
				<div className="flex-grow"></div>
				<div className="truncate text-sm my-1">{description}</div>
				<div className="ml-auto text-sm font-bold rounded-full bg-blue-500 text-white">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
				</svg>
				</div>
			</div>
		</div>
		)
}
