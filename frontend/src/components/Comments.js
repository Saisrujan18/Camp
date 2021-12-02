import React,{useState} from 'react'
import { TextField } from "@mui/material";


//An input area, followed by the list of already existing comments
export default function Comments({currentUser, comments, addComment, author}) {
    
    const colors=["blue","green","pink","purple","gray","yellow","indigo","red"];
    const cssAuthor="mr-auto truncate text-xs text-white font-semibold rounded-full py-1 px-2 mb-1"
    const commentCard = (comment) =>
    {
        let selected=colors[Math.floor(Math.random()*colors.length)];
        selected=" bg-"+selected+"-500";
        return(
                <div className="flex flex-col large:w-3/4 medium:w-5/6 small:w-5/6 w-11/12 max-w-comment-section h-auto self-center my-2 p-2 rounded-md shadow-lg bg-white cursor-default">
                    <div className="flex flex-row w-full px-2 my-2">
                        <div className={`${cssAuthor} ${selected}`}>{comment.username}</div>
                        <div className="flex-grow"/>
                        <div className="truncate text-sm font-bold">{comment.time}</div>
                    </div> 
                    <div className="flex-grow"/>
                    <div className="truncate text-lg my-1 px-3">{comment.text}</div>
                </div>
        )
    }
    return (
            <div className="flex flex-col w-full">
                <NewComment username={currentUser} addComment={addComment} author={author}/>
                {comments.map((comment)=>(commentCard(comment)))}
            </div>
    )
}
//This is the input area for adding new Comments
export function NewComment({username, addComment, author}){
    const [text,setText] = useState("");
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let month = months[d.getMonth()];
    let date = d.getDate();
    let time = month+", "+date;
    if (username === author) username += " (Author)"
    return (
        <div className="flex flex-col large:w-3/4 medium:w-5/6 small:w-5/6 w-11/12 max-w-comment-section h-auto self-center my-2 p-2 rounded-md shadow-lg bg-white">
            <TextField 
                id="outlined-basic"
                label="Comment"
                variant="filled"
                multiline
                fullWidth
                minRows={2}
                onChange={(e) => setText(e.target.value)}
                value={text}
                autoComplete="off"/>
            <button 
                className="flex items-center my-2 self-end bg-blue-500 rounded text-gray-50 px-4 py-2 hover:shadow-glow_sb2"
                onClick={() => {addComment({username: username, text: text, time: time}); setText("")}}>
                    Add Comment
            </button>
        </div>
    )
}
