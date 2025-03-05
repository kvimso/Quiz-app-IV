import React, { useState } from "react";

export default function Questions({ data, topic, setDisplayState, setScore }) {
  const question = data.find((el) => el.title === topic);
  const [step, setStep] = useState(0);
  const [submitBtnTitle, setSubmitBtnTitle] = useState("submit question");
  const [userAnswer, setUserAnswer] = useState(null);
  const [errorTxt, setErrorTxt] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  //const [score, setScore] = useState(0);
  // const handleNextQuestion = () => {
  //   setStep((prev) => prev + 1);
  // const nextQuestion =};

  const handleSubmit = () => {
    if (!userAnswer) {
      setErrorTxt("Please select an answer");
      return;
    }
    setErrorTxt("");

    if (userAnswer === question.questions[step].answer) {
      setCorrectAnswer(userAnswer);
    }
  };

  console.log(userAnswer, "user answer");
  return (
    <div>
      <div className=" flex flex-col gap-4 p-2">
        <h1>{question.questions[step].question}</h1>
        {question.questions[step].options.map((el) => (
          <div
            className={` border-2 w-60 h-10 cursor-pointer
              ${correctAnswer === el ? "bg-blue-300" : ""} 
              `}
            onClick={() => setUserAnswer(el)}
          >
            {el}
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>{submitBtnTitle}</button>
      <h1 className="text-red-600">{errorTxt}</h1>
    </div>
  );
}
