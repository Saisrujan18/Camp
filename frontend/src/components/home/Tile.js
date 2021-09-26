import React from 'react'
const Tile = (props) => {
    return ( 
        <div className="Tile">
            <div className="flex w-40 h-15 flex-row flex-grow-0 bg-white border-radius-10" style={{borderRadius: '10px', alignItems:'center'}}>
                <a href="/" style={{padding:'10px'}}>{props.title}</a>
            </div>
        </div>
    );
}
 
export default Tile;