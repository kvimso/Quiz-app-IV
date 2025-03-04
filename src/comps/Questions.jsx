import React, { useState } from "react";

export default function Questions({ data, topic, setDisplayState }) {


  const question = data.find(el => el.title === topic);
  const [step, setStep] = useState(0)
  const handleNextQuestion = () => {
    setStep(prev => prev + 1)
  }

  
  console.log(question, "question");
  
  return (
    <div>
      Questions
      <h1>{question.questions[step].question}</h1>
      {question.questions[step].options.map(el =>(
        <div>
          {el}
        </div>
      ))}
      <button onClick={handleNextQuestion}>Nexr question</button>
    </div>
  );
}