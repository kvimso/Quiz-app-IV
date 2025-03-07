import React from "react";

export default function Home({ data, setDisplayState, setTopic }) {
  console.log("data", data);

  const handleClick = (topic) => {
    setDisplayState("questions");
    setTopic(topic);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col md:flex-row justify-center items-center p-6">
      {/* Content Container */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start gap-16 md:gap-32 pt-12 md:pt-20">
        {/* Left Column - Text */}
        <div className="w-full md:w-1/2 max-w-md">
          <h1 className="text-4xl md:text-5xl font-normal text-slate-700 leading-tight">Welcome to the</h1>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">Frontend Quiz!</h1>
          <p className="text-slate-500 italic">Pick a subject to get started.</p>
        </div>

        {/* Right Column - Topic Options */}
        <div className="w-full md:w-1/2 space-y-6">
          {data.map((topic, index) => (
            <div
              key={index}
              onClick={() => handleClick(topic.title)}
              className="flex items-center w-full p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              {/* Placeholder for icon - you'll add these later */}
              <div className="flex justify-center items-center w-12 h-12 rounded-md mr-6">
                {/* Icon will go here */}
              </div>
              <span className="text-lg md:text-xl font-medium text-slate-800">
                {topic.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}