import React from 'react'

export default function CollabCard(props) {
    const { title, author, description} = props;
    return (
        <div className="w-3/4 md:w-1/2 lg:w-1/3 bg-whit">
          <div className="text-2xl">{title}</div> 
          <div className="text-sm">{author}</div>
          <div className="text-lg">{description}</div>
        </div>
    )
}
