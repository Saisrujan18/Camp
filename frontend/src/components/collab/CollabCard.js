import React from 'react'
// A resuable to show all the ongoing collaborations in the community.
export default function CollabCard(props) 
{
    const { title, author, description, _id, navigate} = props;
    return (
        <div className="flex flex-col bg-white max-w-xs p-3 max-h-36 rounded-md shadow-md m-1" onClick={() => navigate(_id)}>
          <div className="truncate text-xs text-gray-500 mr-auto p-0.5 rounded bg-whit">{author}</div>
          <div className="truncate text-xl font-bold">{title}</div> 
          <div className="truncate text-sm my-1">{description}</div>
          <div className="ml-auto text-sm font-bold rounded-full bg-blue-500 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
    )
}
