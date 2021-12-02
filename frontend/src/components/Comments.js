import React,{useState} from 'react'

export default function Comments({currentUser, comments}) {
    console.log(comments)
    return (
        <div className="flex justify-center">
            <div className="flex flex-col">
            <NewComment username={currentUser} />
            {comments.map(comment => {
                return (
                    <div className="flex flex-col my-2 border-2 rounded-md px-3 py-2">
                        <div className="my-2 align-middle flex flex-row">
                            <div className="text-xl">{comment.username}</div>
                            <div className="text-gray-500 mx-3 text-md align-baseline">{comment.time}</div>
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

export function NewComment({username}){
    const [text,setText] = useState("");
    return (
        <div className="">
            <div className="w-full max-w-lg">
                <textarea rows="3" cols="50" onChange={(e) => {setText(e.target.value)}} placeholder="write a new comment.."/>
            </div>
            <button onClick={() => console.log("Commented")}>Comment</button>
        </div>
    )
}
