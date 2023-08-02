import React from "react";
import ConsoleCard from "./ConsoleCard";
import { DiCodeigniter } from "react-icons/di";
import { Link } from "react-router-dom";

const Console = ({
  imgName,
  characName1,
  characDesc1,
  characName2,
  characDesc2,
  characName3,
  characDesc3,
}) => {
  return (
    <div
      className="flex flex-col gap-5 rounded-xl border-red-500 bg-zinc-800 p-7 
     text-zinc-50"
    >
      <div className="flex gap-6 ">
        <div className="h-[540px] w-[620px]">
          <img
            src="https://res.cloudinary.com/dfrd9rf2c/image/upload/v1690974163/photo_tagging_app/merged-egor_ekwb1e.png"
            className="h-full w-full rounded-xl object-cover duration-500 ease-in-out hover:scale-[1.02]"
          />
        </div>

        <div className="flex h-[480px] w-[400px] flex-col items-center gap-5">
          <h1 className="border-b-2 border-red-500 pb-2 text-center text-3xl font-semibold">
            {" "}
            {imgName} :
          </h1>
          <ConsoleCard
            characImg="https://res.cloudinary.com/dfrd9rf2c/image/upload/v1690973751/photo_tagging_app/alienqueen_yhwukt.png"
            characName={characName1}
            characDesc={characDesc1}
          />
          <ConsoleCard
            characImg="https://res.cloudinary.com/dfrd9rf2c/image/upload/v1690973751/photo_tagging_app/ghostbuster_izcuuq.png"
            characName={characName2}
            characDesc={characDesc2}
          />
          <ConsoleCard
            characImg="https://res.cloudinary.com/dfrd9rf2c/image/upload/v1690973751/photo_tagging_app/amongus_qo41fi.png"
            characName={characName3}
            characDesc={characDesc3}
          />
        </div>
      </div>
      <div className="flex h-[10%] items-center gap-2">
        <div className="flex w-3/4 items-center justify-center gap-5 text-3xl">
          <DiCodeigniter className="text-red-400" />
          <p className="border-b-2 border-red-500 pb-1 font-cinzel "> Image</p>
          <DiCodeigniter className="text-red-400" />
        </div>

        <Link to="/egor">
          <button className="btn w-[180px] bg-red-500 text-xl duration-500 ease-in-out hover:scale-[1.15] hover:bg-zinc-400">
            {" "}
            Start{" "}
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Console;
