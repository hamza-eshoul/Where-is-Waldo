import React from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import { useLocation } from "react-router-dom";

const Navbar = ({
  isGameStatusOn,
  setIsGameStatusOn,
  timerOn,
  setTimerOn,
  timerRef,
}) => {
  let location = useLocation();

  const toggleGameStatus = () => {
    if (location.pathname == "/egor") {
      if (isGameStatusOn == false) {
        setIsGameStatusOn(true);
      } else {
        setIsGameStatusOn(false);
      }
    }
  };

  return (
    <div className="fixed top-0 flex w-full items-center justify-around gap-4 bg-zinc-800 py-5 px-8 text-zinc-50 shadow-2xl">
      <div className="flex items-center justify-center gap-2 text-xl">
        <p className="font-cinzel text-2xl">
          {" "}
          <span className="text-red-500"> Catch Me </span> If You Can !
        </p>
      </div>
      <Timer timerOn={timerOn} timerRef={timerRef} />{" "}
      <div className="flex items-center gap-9 text-lg">
        <button
          className="btn bg-zinc-200 text-zinc-900 hover:bg-zinc-50"
          onClick={toggleGameStatus}
        >
          {" "}
          Investigate{" "}
        </button>
        <Link
          to="/"
          onClick={() => {
            setTimerOn(false);
          }}
        >
          <button className="btn bg-zinc-500 hover:bg-zinc-400">
            {" "}
            Back To Menu{" "}
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
