/* eslint-disable no-unused-vars */
import {Link,Redirect} from "react-router-dom";
const AltTile = (props) => {
    return ( 
        <div className="BigTile">
            <div className="flex w-40 h-20 flex-row flex-grow-0 bg-white border-radius-10" style={{borderRadius: '10px', alignItems:'center'}}>
                <div className="bg-darkBlu text-white w-auto" style={{borderTopLeftRadius : '10px', borderBottomLeftRadius : '10px', alignSelf : 'stretch'}}>
                    <a href="/" style={{padding:'10px'}}>{props.title}</a>
                </div>
            </div>
        </div>
    );
}
 
export const BigTile = (props) => {

    const redirection ="/"+props.title.toLowerCase()
    return ( 
        <Link className="flex flex-row w-full h-full bg-lightestBlu rounded-lg p-4 content-center cursor-pointer bg-whit" to={redirection} >
            <p className="font-hometext font-bold text-lg  overflow-ellipsis overflow-hidden flex-grow self-center cursor-pointer mr-1 ml-2 bg-whit">{props.title}</p>
        </Link>
    );
}

export default AltTile;
// onClick={<Redirect to={redirection}/>