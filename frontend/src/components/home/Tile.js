import React from 'react'
const Tile = (props) => {
    return ( 
        <div className="Tile">
            <div className="w-auto h-auto bg-whit justify-center rounded-lg pt-3 pb-3">
                <a className="truncate mr-2 ml-2" href="/">{props.title}</a>
            </div>
        </div>
    );
}
 
export default Tile;