import React from "react";
import { AiFillGithub } from "react-icons/ai";

const footer = () => {
  return (
    <div className="fixed bottom-0 flex w-full items-center justify-center gap-2 bg-zinc-800 py-3 text-lg text-zinc-50 shadow-2xl">
      <p> Built by : </p>
      <p className="text-red-500"> Hamza Eshoul {""}</p>
      {"|"}
      <div className="flex items-center justify-center gap-2">
        <AiFillGithub className="text-2xl hover:text-red-400" />
        <a
          href="https://github.com/skynter/Photo-Tagging-App"
          target={"_blank"}
          className="text-red-500"
        >
          {" "}
          Github Repo{" "}
        </a>
      </div>
    </div>
  );
};

export default footer;
