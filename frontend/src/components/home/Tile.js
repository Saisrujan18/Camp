// const Tile = (props) => {
//     return ( 
//         <div className="Tile">
//             <div className="w-auto h-auto bg-whit justify-center rounded-lg pt-3 pb-3">
//                 <a className="truncate mr-2 ml-2" href="/">{props.title}</a>
//             </div>
//         </div>
//     );
// }
const Tile = (props) => {
    return ( 
        <div className="w-full h-full bg-whit rounded-lg py-2 px-10">
            <p className="overflow-ellipsis overflow-hidden mr-2 ml-2">{props.title}</p>
        </div>
    );
}
 
export default Tile;