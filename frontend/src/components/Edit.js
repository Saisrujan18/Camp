import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import React, {useState} from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from 'axios';
import Spinner from "./Spinner";

function Edit( {sendTo, id, data, turn, editable } )
{
    // Variables required for initializing the editor content, mode (readonly/readwrite)
    const [mode, setMode] = useState("readOnly");
    const [editorState, setEditorState] = useState(EditorState.createWithContent(convertFromRaw(JSON.parse(data.description))));
    const [loading, setLoading] = useState(false);
    const [editorContent, setEditorContent] = useState();
    function onEditorStateChange(editorState) {
        setEditorState(editorState);
        setEditorContent(convertToRaw(editorState.getCurrentContent()));
    }

    // when the save button is clicked, handles the request to send the updated data to backend
    const sendData = async () => {
        data.description = JSON.stringify(editorContent);
        setLoading(true);
        await axios
        .post(sendTo+"/edit", {id, data})
        .then((res) => {
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    // Renders Editor
    // when the Edit button is clicked, the Editor is displayed for content update
    return (
        
        <div className="flex flex-col mb-10 ">
            {mode === "readOnly"?
                <button className={" ml-auto place-self-end bg-gray-200 block py-1 px-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded " + (editable? "" : " hidden ")}
                onClick={() => {setMode("readWrite")}}> Edit
                </button>
                : ""
            }

            <div className={"flex flex-col flex-1 "}>
                {/* Customisable editor using draft.js */}
                <Editor
                    placeholder={"Start writing something...."}
                    toolbarHidden={mode === "readOnly"}
                    readOnly= {mode === "readOnly"}
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName mx-4"
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