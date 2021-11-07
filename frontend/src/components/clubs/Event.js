import React from 'react'

export default function Event(prop) 
{
    const props=prop.dummy;
    return(
        <div className="flex flex-col ">
            <div className="mr-auto p-1">Name</div>
            <div className="">{props.title}</div>
            <div className="">description</div>
            {props.hasImage && <div>image</div>}
            {props.registarable && <div>Register</div>}
        </div>
    )
}
