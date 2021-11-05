import { EditorState, convertToRaw } from 'draft-js';
import React, {useState} from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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