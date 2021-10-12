import {Editor, EditorState} from 'draft-js'

const RichtextEditor = () => {
  const [editorState, setEditorState] = useState(()=> EditorState.createEmpty())
  return (
    <div>
      <Editor editorState={editorState} onChange={setEditorState}/>
    </div>
  )
} 
export default RichtextEditor;