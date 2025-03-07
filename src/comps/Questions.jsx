import React, { useState } from "react";
import Score from "./Score";

export default function Questions({ data, topic, setDisplayState }) {
  const question = data.find((el) => el.title === topic);
  const [step, setStep] = useState(0);
  const [submitBtnTitle, setSubmitBtnTitle] = useState("Submit Question");
  const [userAnswer, setUserAnswer] = useState(null);
  const [errorTxt, setErrorTxt] = useState("");
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const progressPercentage = ((step + 1) / question.questions.length) * 100;

  const handleSubmit = () => {
    if (!userAnswer) {
      setErrorTxt("Please select an answer");
      return;
    }
    setErrorTxt("");
    setAnswered(true);
    if (userAnswer === question.questions[step].answer) {
      setScore((prevScore) => prevScore + 1); // Increment score if the answer is correct
    }
  };

  const handleNextQuestion = () => {
    if (step < question.questions.length - 1) {
      setStep((prev) => prev + 1);
      setUserAnswer(null);
      setAnswered(false);
    } else {
      setDisplayState("home"); // Go back to home after last question
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 w-full max-w-lg font-Rubik mt-5">
      {/* Topic Name */}
      <h1
        className="text-2xl font-bold text-center mb-4 ml-100"
        aria-live="assertive"
      >
        {topic}
      </h1>
      <div className=" ml-100 mt-20">
        <div className="ml-100 inline-flex gap-30">
          <h1 className="text-xl font-bold w-80 text-9x1">
            {question.questions[step].question}
          </h1>
          <div className="flex flex-col gap-2 w-80 ">
            {question.questions[step].options.map((el) => {
              const isCorrect = el === question.questions[step].answer;
              const isSelected = el === userAnswer;
              return (
                <div
                  key={el}
                  className={`border-2 p-3 rounded-lg text-lg cursor-pointer transition-all w-120 h-15
                ${isSelected ? "border-purple-500" : "border-gray-300"} 
                ${!answered && "hover:bg-purple-100"} 
                ${answered && isCorrect ? "bg-green-300 border-green-500" : ""} 
                ${
                  answered && isSelected && !isCorrect
                    ? "bg-red-300 border-red-500"
                    : ""
                }`}
                  onClick={() => !answered && setUserAnswer(el)}
                >
                  {el}
                </div>
              );
            })}
          </div>
        </div>
        <div className=" ml-100 inline-flex gap-30">
          <div className="w-80 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-500 transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          {answered ? (
            <button
              className="bg-purple-800 text-white px-4 py-2 rounded-lg w-80 cursor-pointer hover:bg-purple-600"
              onClick={handleNextQuestion}
            >
              Next Question
            </button>
          ) : (
            <button
              className="bg-purple-800 text-white px-4 py-2 rounded-lg w-80 cursor-pointer hover:bg-purple-600 "
              onClick={handleSubmit}
            >
              {submitBtnTitle}
            </button>
          )}
          <h1 className="text-red-600">{errorTxt}</h1>
        </div>

        {/* Show score in Score component */}
        {step === question.questions.length - 1 && (
          <Score score={score} totalQuestions={question.questions.length} />
        )}
      </div>
    </div>
  );
}
