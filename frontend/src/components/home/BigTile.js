const BigTile = (props) => {
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
 
export default BigTile;