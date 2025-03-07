import { useState } from "react";
import "./App.css";
import Home from "./comps/Home";
import { data } from "./Question.js";
import Questions from "./comps/Questions.jsx";

function App() {
  const [displayState, setDisplayState] = useState("home");
  const [topic, setTopic] = useState("");
  const [score, setScore] = useState(0);
  

  return (
    <>
      <h1 className="w2">header</h1>
      {displayState === "home" && (
        <Home
          setTopic={setTopic}
          setDisplayState={setDisplayState}
          data={data}
        />
        
      )}
      {displayState === "questions" && (
        <Questions
          data={data}
          topic={topic}
          setDisplayState={setDisplayState}
          setScore={setScore}
          
        />
      )}
      
    </>
  );
}

export default App;


