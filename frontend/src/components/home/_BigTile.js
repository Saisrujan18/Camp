import Spinner from '../Spinner';
const BigTile = (props) => {
    return ( 
        <div className="flex flex-row w-full h-full bg-lightestBlu rounded-lg p-10 content-center cursor-pointer">
            <p className="font-title_1 font-bold text-lg text-darkOrang overflow-ellipsis overflow-hidden flex-grow self-center cursor-pointer mr-1 ml-2">{props.title}</p>
            <div className="loading justify-self-end self-center ml-1 mr-2">
                {(props.loading_id===props.id) && <Spinner/>}
            </div>
        </div>
    );
}

export default BigTile;