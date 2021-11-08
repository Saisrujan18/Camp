import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import React, {useState} from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import Parser from 'html-react-parser'
import axios from 'axios';
import Experiences from './experiences/Experiences';

// THINGS TO NOTE
// CONTENT page - blogs
// SCHEMA: info : [strings] -> editable div
// 1) the editor should be used to add new blocks of content
// 2) on save, the content should be saved to backend and render as an <Editable> div in the front.
// 3) should be able to delete/edit one.
// this will take years now.

function Edit( {sendTo, id, expData} ) {

    // const [showEditor, setShowEditor] = useState(false);
    const [btnText, setBtnText] = useState("Add");
    const [showEditor, setShowEditor] = useState(false);
    const [editorState, setEditorState] = useState(EditorState.createWithContent(convertFromRaw(JSON.parse(expData.description))));
    const [editorContent, setEditorContent] = useState();
    // convertFromRaw(JSON.parse(expData.description))
    function onEditorStateChange(editorState) {
        setEditorState(editorState);
        // console.log(convertToRaw(editorState.getCurrentContent()));
        setEditorContent(convertToRaw(editorState.getCurrentContent()));
        // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    }

    const sendData = async () => {
        expData.description = JSON.stringify(editorContent);

        console.log(id);
        await axios
        .post(sendTo+"/edit", {id, expData})
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        
        <div className="flex flex-col ">

            {!showEditor ? <div className = " mt-1 bg-white rounded-lg text-1xl p-2 shadow-md font-sans ">
                {Parser(draftToHtml(convertToRaw(editorState.getCurrentContent())))}
            </div> : ""}
            {/* {console.log(EditorState.createEmpty())}
            {console.log(expData.description)}
            {console.log(convertFromRaw(JSON.parse(expData.description)))} */}

            <button className=" place-self-end bg-gray-200 block p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded "
            onClick={() => {setShowEditor(!showEditor); (showEditor ? setBtnText("Add") : setBtnText("Close"));}}> {btnText} 
            </button>

            {showEditor ? 
                <div className="flex flex-col place-items-end">
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={onEditorStateChange}
                    />
                
                    <button className="place-self-end block p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded"
                    onClick = {() => {setShowEditor(false); setBtnText("Add"); sendData()}}> Save </button>
                </div>
            : ""}
        </div>
    )
}

export default Edit;
