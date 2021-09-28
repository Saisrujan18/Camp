const BigTile = (props) => {
    return ( 
        <div className="BigTile">
            <div className="w-auto h-auto bg-white rounded-lg pr-10">
                <div className="bg-darkBlu text-white w-auto h-full rounded-l-lg pt-5 pb-5">
                    <a className="truncate mr-2 ml-2" href="/">{props.title}</a>
                </div>
            </div>
        </div>
    );
}
 
export default BigTile;