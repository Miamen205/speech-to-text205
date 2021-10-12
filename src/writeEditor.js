import React, { useEffect, useState} from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import 'react-quill/dist/quill.snow.css'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";




export default function WriteEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
    <div>
        <center>
      <h1>Speech To Text Words Editor</h1>
      <h2>Start editing to see some magic happen!</h2>
      </center>
      <div style={{ marginLeft:"180px", background:"white", borderRadius:"10px", marginBottom:"80px", width: '70%', border: "1px solid black", padding: '2px', minHeight: '400px' }}>
        <Editor
        style={{ borderRadius:"10px", padding: '2px' }}
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>
      
      <br/>
    </div>
  );
}