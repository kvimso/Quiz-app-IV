import { useState } from "react";
import "./App.css";
import Home from "./comps/Home";
import { data } from "./Question.js";
import Questions from "./comps/Questions.jsx";

function App() {
  const [displayState, setDisplayState] = useState('home')
  const [topic, setTopic] = useState('')
//ელისაბეთის ნაწილი დაწყების დრო 28:2

  return (
    <>
      <h1 className="w2">header</h1>
      {displayState === 'home' && <Home setTopic={setTopic} setDisplayState={setDisplayState} data={data} />}
      {displayState === 'questions' && <Questions data={data} topic={topic} setDisplayState={setDisplayState} />}

      <h1>questions</h1>
    </>
  );
}

export default App;

// მეცხრე ხაზი შეცვალე ამით : <Home data={data} />
