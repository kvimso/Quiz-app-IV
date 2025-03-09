import React, { useState, useEffect } from "react";
//import Score from "./Score";
import Switch from "react-switch";

export default function Questions({ data, topic, setDisplayState }) {
  const question = data.find((el) => el.title === topic);
  const [step, setStep] = useState(0);
  const [submitBtnTitle, setSubmitBtnTitle] = useState("Submit Question");
  const [userAnswer, setUserAnswer] = useState(null);
  const [errorTxt, setErrorTxt] = useState("");
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [dark, setDark] = useState(false);

  const progressPercentage = ((step + 1) / question.questions.length) * 100;

  const handleSubmit = () => {
    if (!userAnswer) {
      setErrorTxt("Please select an answer");
      return;
    }
    setErrorTxt("");
    setAnswered(true);
    if (userAnswer === question.questions[step].answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (step < question.questions.length - 1) {
      setStep((prev) => prev + 1);
      setUserAnswer(null);
      setAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setStep(0);
    setScore(0);
    setQuizFinished(false);
    setAnswered(false);
    setUserAnswer(null);
  };

  const themeChange = (check) => {
    setDark(check);
  };

  useEffect(() => {
    if (dark) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [dark]);
  return (
    <div className="flex flex-col items-center w-full max-w-100% mx-auto bg-gray-50 min-h-screen font-sans dark:bg-gray-800 ">
      <div className="w-full max-w-4xl px-6 pt-12 pb-4">
        <div className="flex items-center">
          <div className="h-6 w-6 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-600"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            {topic}
          </h1>
          <div className="absolute top-10 right-90 z-10">
            <Switch onChange={themeChange} checked={dark} />
          </div>
        </div>
      </div>

      {quizFinished ? (
        <div className="flex flex-col items-center bg-gradient-to-r  rounded-lg ">
          <h2 className="text-3xl font-bold text-white mb-4">
            Quiz Complited!
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full">
            <h3 className="text-2xl font-semibold text-center text-purple-700 mb-6">
              Your Final Score
            </h3>
            <div className="flex justify-center items-center mb-4">
              <div className="text-5xl font-bold text-purple-600">{score}</div>
              <div className="text-xl text-gray-600 ml-2">
                / {question.questions.length}
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <button
                className="bg-purple-800 text-white px-6 py-2 rounded-lg w-40 hover:bg-purple-600"
                onClick={handleRestartQuiz}
              >
                Restart Quiz
              </button>
              <button
                className="bg-gray-600 text-white px-6 py-2 rounded-lg w-40 hover:bg-gray-500"
                onClick={() => setDisplayState("home")}
              >
                Go Back Home
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-4xl px-6 pb-12">
          <p className="text-gray-600 text-sm font-medium mb-4">
            Question {step + 1} of {question.questions.length}
          </p>

          <div className="flex flex-col md:flex-row md:space-x-12 mb-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 leading-tight">
                {question.questions[step].question}
              </h2>
            </div>

            <div className="md:w-1/2 space-y-3">
              {question.questions[step].options.map((el, index) => {
                const isCorrect = el === question.questions[step].answer;
                const isSelected = el === userAnswer;
                const letters = ["A", "B", "C", "D"];

                return (
                  <div
                    key={el}
                    className={`flex items-center border border-gray-200 rounded-md p-4 cursor-pointer transition-colors
                      ${isSelected ? "border-purple-500" : ""} 
                      ${
                        !answered &&
                        "hover:bg-gray-400 bg-gray-200  dark:bg-gray-800 hover:dark:bg-gray-700"
                      } 
                      ${
                        answered && isCorrect
                          ? "bg-green-600 border-green-800"
                          : ""
                      } 
                      ${
                        answered && isSelected && !isCorrect
                          ? "bg-red-600 border-red-800"
                          : ""
                      }`}
                    onClick={() => !answered && setUserAnswer(el)}
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 mr-3 font-medium text-gray-700 bg-gray-50">
                      {letters[index]}
                    </div>
                    <span className="text-gray-800 dark:text-white">{el}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-1/2">
              <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-600 transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <button
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors"
                onClick={answered ? handleNextQuestion : handleSubmit}
              >
                {answered ? "Next Question" : "Submit Answer"}
              </button>

              {errorTxt && (
                <p className="text-red-500 text-sm mt-2">{errorTxt}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
