// const BigTile = (props) => {
//     return ( 
//         <div className="BigTile">
//             <div className="w-auto h-auto bg-whit rounded-lg pr-10">
//                 <div className="bg-darkBlu text-whit w-auto h-full rounded-l-lg pt-5 pb-5">
//                     <a className="truncate mr-2 ml-2" href="/">{props.title}</a>
//                 </div>
//             </div>
//         </div>
//     );
// }
const BigTile = (props) => {
    return ( 
        <div className="w-full h-full bg-whit rounded-lg p-10">
            <p className="overflow-ellipsis overflow-hidden mr-2 ml-2">{props.title}</p>
        </div>
    );
}

export default BigTile;