import './App.css';
import SpeechText from "./recorder";
import WriteEditor from "./writeEditor";

function App() {
  return (
    <div className="App">
       <SpeechText />
       <br/>
       <WriteEditor />
    </div>
  );
}

export default App;
