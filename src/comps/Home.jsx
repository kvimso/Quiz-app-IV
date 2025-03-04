import React, { useState } from "react";

export default function Home({ data, setDisplayState, setTopic }) {
  console.log("data", data);

  const handleClick = (topic) => {
    setDisplayState("questions");
    setTopic(topic)

  };


  return (
    <div className="flex gap-5 w-60">
      <div>
        <h1 className=" text-bold text-2xl">quiz app</h1>
      </div>
      <div className=" widht-full">
        {data.map((el) => (
          <div
            onClick={() => handleClick(el.title)}
            className=" cursor-pointer h-10 w-60 border-2 hover:bg-blue-800"
          >
            {el.title}
          </div>
        ))}
      </div>
    </div>
  );
}
