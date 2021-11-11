import React from 'react'

export default function Event(props) 
{
    return(
        <div className="flex flex-col  bg-whit">
            <div className="mr-auto p-1">{props.author}</div>
            <div className="">{props.title}</div>
            <div className="">{props.description}</div>
            {props.hasImage && <img src={props.imageData} width={100} height={100} alt="Not Found"></img>}
            {props.registarable && <button>R</button>}
        </div>
    )
}
