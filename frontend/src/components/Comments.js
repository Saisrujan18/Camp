import React,{useState} from 'react'
import { TextField } from "@mui/material";


// An inpute area, followed by the list of comments
export default function Comments({currentUser, comments, addComment, author}) {
    return (
        <div className="flex items-center min-w-full">
            <div className="flex flex-col min-w-full ">
            
            <NewComment username={currentUser} addComment={addComment} author={author}/>

            {comments.map(comment => {
                return (
                    <div className="flex flex-col my-2 border-2 rounded-md px-3 py-2 md:w-96 sm:w-80 mx-auto">
                        <div className="my-2 flex flex-row">
                            <div className="text-xl">{comment.username}</div>
                            <div className="text-gray-500 mx-3 text-md ml-auto">{comment.time}</div>
                        </div>
                        <div className="flex-1 p-1 max-w-md"><p className="">{comment.text}</p></div>
                    </div>
                )
                })
            }
            </div>
        </div>
    )
}
// this is input area for new Comment
export function NewComment({username, addComment, author}){
    const [text,setText] = useState("");
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let month = months[d.getMonth()];
    let date = d.getDate();
    let time = month+", "+date;
    if (username == author) username += " (Author)"
    return (
        <div className="flex flex-col p-2 border-2 my-2 rounded-md md:w-96 sm:w-80 mx-auto">
            <TextField id="outlined-basic" label="Comment" variant="outlined" fullwidth onChange={(e) => setText(e.target.value)} value={text} autoComplete="off"/>
            <button className="flex items-center my-2 self-end bg-blue-500 rounded text-gray-50 px-10 py-2  hover:shadow-glow_sb2" onClick={() => {addComment({username: username, text: text, time: time}); setText("")}}>Comment</button>
        </div>
    )
}
