import React from "react";
import React, { useState } from "react";

export default function Home(data) {
  const [displayState, setDisplayState] = useState("home");
  console.log("data", data);
  return (
    <div className="flex gap-5 w-full">
      <div>
        <h1 className=" text-bold text-2xl">quiz app</h1>
      </div>
      <div className=" widht-full">
        {data.map((el) => (
          <div className=" cursor-pointer h-10 w-1/2 border-2 hover:bg-blue-850">
            {el.title}
          </div>
        ))}
      </div>
    </div>
  );
}
