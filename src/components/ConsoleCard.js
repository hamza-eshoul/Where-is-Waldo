import React from "react";

const ConsoleCard = ({ characImg, characName, characDesc }) => {
  return (
    <div className="flex h-[30%] w-full items-center gap-3 pl-8 transition duration-500 ease-in-out hover:scale-110">
      <div className="h-full w-3/5">
        <img
          src={characImg}
          className="h-full w-full rounded-lg object-contain"
        />
      </div>

      <div className="flex h-full w-2/5 flex-col items-center justify-center gap-2">
        {" "}
        <h1 className="text-center font-robotoMono text-2xl font-bold">
          {" "}
          {characName}{" "}
        </h1>
        <p className="text-center text-xl"> {characDesc} </p>
      </div>
    </div>
  );
};

export default ConsoleCard;
