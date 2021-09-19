import React from 'react'

function red()
{
    
}

function BigTile(props)
{
    return (
        <div className="flex flex-row bg-white" onClick={red}>
            <div className="p-8 bg-darkBlu text-white">{props.title}</div>
            <div className="p-8 text-white">{props.title}</div>
        </div>
    )
}

export default BigTile;