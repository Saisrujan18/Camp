import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import React, {useState} from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from 'axios';
import Spinner from "./Spinner";
import "./editor.css"


// THINGS TO NOTE
// CONTENT page - blogs
// SCHEMA: info : [strings] -> editable div
// 1) the editor should be used to add new blocks of content
// 2) on save, the content should be saved to backend and render as an <Editable> div in the front.
// 3) should be able to delete/edit one.
// this will take years now.

function Edit( {sendTo, id, data, turn, editable } )
{
    const [mode, setMode] = useState("readOnly");
    const [editorState, setEditorState] = useState(EditorState.createWithContent(convertFromRaw(JSON.parse(data.description))));
    // const [editorStateCollab, setEditorStateCollab] = useState(EditorState.createWithContent(convertFromRaw(JSON.parse(collabData.description))));
    const [loading, setLoading] = useState(false);
    const [editorContent, setEditorContent] = useState();
    function onEditorStateChange(editorState) {
        setEditorState(editorState);
        setEditorContent(convertToRaw(editorState.getCurrentContent()));
    }

    const sendData = async () => {
        data.description = JSON.stringify(editorContent);
        // console.log(data.description);
        setLoading(true);
        console.log(id);
        await axios
        .post(sendTo+"/edit", {id, data})
        .then((res) => {
            setLoading(false);
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        
        <div className="flex flex-col mb-10 ">
            {mode === "readOnly"?
                <button className={" ml-auto place-self-end bg-gray-200 block py-1 px-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded " + (editable? "" : " hidden ")}
                onClick={() => {setMode("readWrite")}}> Edit
                </button>
                : ""
            }

            <div className={"flex flex-col flex-1 "}>
                
                <Editor
                    placeholder={"Start writing something...."}
                    toolbarHidden={mode === "readOnly"}
                    readOnly= {mode === "readOnly"}
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onEditorStateChange}
                />
            
            {loading && <Spinner />}
            
            {!loading && mode === "readWrite" ? <div className="flex place-self-end ">
                <button className=" block py-1 px-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded "
                onClick = {() => {setMode("readOnly"); sendData()}}> Save </button> 
                <button className="place-self-end block py-1 px-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
                onClick = {() => {setMode("readOnly")}}> Close </button>
                </div>
                : ""
            }
            </div>
        </div>
    )
}

export default Edit;