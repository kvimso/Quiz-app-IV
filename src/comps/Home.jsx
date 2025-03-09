import React, { useState, useEffect } from "react";
import Switch from "react-switch";

export default function Home({ data, setDisplayState, setTopic }) {
  console.log("data", data);

  const [dark, setDark] = useState(false);

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

  const handleClick = (topic) => {
    setDisplayState("questions");
    setTopic(topic);
  };

  return (
    <div className=" h-200 dark:bg-gray-800">
      <div className="absolute top-10 right-60 z-10">
        <Switch onChange={themeChange} checked={dark} />
      </div>
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start gap-16 md:gap-32 pt-12 md:pt-20 mx-auto p-6 dark:bg-gray-800">
        <div className="w-full md:w-1/2 max-w-md">
          <h1 className="text-4xl md:text-5xl font-normal text-slate-700 leading-tight dark:text-white ">
            Welcome to the
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6 dark:text-white">
            Frontend Quiz!
          </h1>
          <p className="text-slate-500 italic dark:text-white">
            Pick a subject to get started.
          </p>
        </div>

        <div className="w-full md:w-1/2 space-y-6 dark:text-white">
          {data.map((topic, index) => (
            <div
              key={index}
              onClick={() => handleClick(topic.title)}
              className="flex items-center w-full p-5 bg-white rounded-2xl shadow-sm hover:shadow-md dark:hover:bg-gray-900 transition-all duration-200 cursor-pointer dark:bg-gray-700 "
            >
              <div className="flex justify-center items-center w-12 h-12 rounded-md mr-6 "></div>
              <span className="text-lg md:text-xl font-medium text-slate-800 dark:text-white">
                {topic.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
