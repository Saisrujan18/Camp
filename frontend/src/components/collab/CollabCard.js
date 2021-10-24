import React from 'react'

export default function CollabCard(props) {
    const { title, author, description, _id, navigate} = props;
    return (
        <div className="flex flex-col bg-white max-w-xs p-3 max-h-36 rounded-md shadow-md m-1" onClick={() => navigate(_id)}>
          <div className="text-xl font-bold">{title}</div> 
          <div className="text-xs text-gray-500">{author}</div>
          <div className="text-sm my-1">{description}</div>
          <div className="ml-auto text-sm font-bold rounded-full w-5 bg-blue-500 bg-opacity-3 text-center text-white ">+</div>
        </div>
    )
}
