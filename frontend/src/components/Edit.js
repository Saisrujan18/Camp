import { EditorState, convertToRaw } from 'draft-js';
import React, {useState} from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// THINGS TO NOTE
// CONTENT page - blogs
// SCHEMA: info : [strings] -> editable div
// 1) the editor should be used to add new blocks of content
// 2) on save, the content should be saved to backend and render as an <Editable> div in the front.
// 3) should be able to delete/edit one.
// this will take years now.

function Edit() {

    const [btnText, setBtnText] = useState("Add");
    const [showEditor, setShowEditor] = useState(false);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [editorContent, setEditorContent] = useState();

    function onEditorStateChange(editorState) {
        setEditorState(editorState);
        console.log(convertToRaw(editorState.getCurrentContent()));
        setEditorContent(convertToRaw(editorState.getCurrentContent()));
    }


    return (
        
        <div className="flex flex-col place-items-end">
            <button className=" place-self-auto bg-gray-200 block p-2 m-1 hover:text-darkBlu hover:bg-gray-200 font-bold rounded "
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
                    > Save </button>
                </div>
            : ""}
        </div>
    )
}

export default Edit;
