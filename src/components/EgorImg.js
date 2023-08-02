import { useState, useRef, useEffect } from "react";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const EgorImg = ({ isGameStatusOn, setTimerOn, timerRef }) => {
  const cursorRef = useRef(null);

  const [xCord, setxCord] = useState(0);
  const [yCord, setyCord] = useState(0);

  const [isQueenFound, setIsQueenFound] = useState(false);
  const [isGhostFound, setIsGhostFound] = useState(false);
  const [isAmongUsFound, setIsAmongUsFound] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState("");

  const [validationFail, setValidationFail] = useState(false);
  const [validationSuccess, setValidationSuccess] = useState(false);
  const [foundCharacter, setFoundCharacter] = useState("");

  const [isCursorClicked, setIsCursorClicked] = useState(false);

  let checkXCord = 0;
  let checkYCord = 0;

  useEffect(() => {
    setTimerOn(true);
  }, []);

  useEffect(() => {
    checkXCord = xCord;
    checkYCord = yCord;
  }, [xCord, yCord]);

  useEffect(() => {
    if (
      isQueenFound == true &&
      isGhostFound == true &&
      isAmongUsFound == true
    ) {
      setIsGameOver(true);
    }
  }, [isQueenFound, isGhostFound, isAmongUsFound]);

  useEffect(() => {
    if (isGameOver == true) {
      setFinalScore(timerRef.current.innerText);
      setTimerOn(false);
    }
  }, [isGameOver]);

  const displayNegativeFeedback = () => {
    setValidationFail(true);

    setTimeout(() => {
      setValidationFail(false);
    }, 2500);
  };

  const displayPositiveFeedback = () => {
    setValidationSuccess(true);

    setTimeout(() => {
      setValidationSuccess(false);
    }, 2500);
  };

  const cursor = (e) => {
    cursorRef.current.style.top = e.pageY + "px";
    cursorRef.current.style.left = e.pageX + "px";
  };

  const captureClick = (e) => {
    isCursorClicked ? setIsCursorClicked(false) : setIsCursorClicked(true);

    setxCord(e.pageX);
    setyCord(e.pageY);
  };

  const validateQueen = () => {
    let xQueenMatch = false;
    let yQueenMatch = false;

    const colRef = collection(db, "defaultCoordinates");

    getDocs(colRef).then((snapshot) => {
      const storedQueenX = snapshot.docs[2].data().AlienQueenX;
      const storedQueenY = snapshot.docs[2].data().AlienQueenY;

      storedQueenX.map((X) => {
        if (checkXCord == X) {
          xQueenMatch = true;
        }
      });

      storedQueenY.map((Y) => {
        if (checkYCord == Y) {
          yQueenMatch = true;
        }
      });

      if (xQueenMatch == true && yQueenMatch == true) {
        setIsQueenFound(true);
        setFoundCharacter("Alien Queen");
        displayPositiveFeedback();
      } else {
        displayNegativeFeedback();
      }
    });
  };

  const validateGhost = () => {
    let xGhostMatch = false;
    let yGhostMatch = false;

    const colRef = collection(db, "defaultCoordinates");

    getDocs(colRef).then((snapshot) => {
      const storedGhostX = snapshot.docs[1].data().GhostBusterX;
      const storedGhostY = snapshot.docs[1].data().GhostBusterY;

      storedGhostX.map((X) => {
        if (checkXCord == X) {
          xGhostMatch = true;
        }
      });

      storedGhostY.map((Y) => {
        if (checkYCord == Y) {
          yGhostMatch = true;
        }
      });

      if (xGhostMatch == true && yGhostMatch == true) {
        setIsGhostFound(true);
        setFoundCharacter("Ghost Buster");
        displayPositiveFeedback();
      } else {
        displayNegativeFeedback();
      }
    });
  };

  const validateAmongUs = () => {
    let xAmongUsMatch = false;
    let yAmongUsMatch = false;

    const colRef = collection(db, "defaultCoordinates");

    getDocs(colRef).then((snapshot) => {
      const storedAmongUsX = snapshot.docs[0].data().AmongUsX;
      const storedAmongUsY = snapshot.docs[0].data().AmongUSY;

      storedAmongUsX.map((X) => {
        if (checkXCord == X) {
          xAmongUsMatch = true;
        }
      });

      storedAmongUsY.map((Y) => {
        if (checkYCord == Y) {
          yAmongUsMatch = true;
        }
      });

      if (xAmongUsMatch == true && yAmongUsMatch == true) {
        setIsAmongUsFound(true);
        setFoundCharacter("Among Us");
        displayPositiveFeedback();
      } else {
        displayNegativeFeedback();
      }
    });
  };

  return (
    <div
      className="mt-[80px] mb-[28px]"
      onMouseMove={cursor}
      onClick={captureClick}
    >
      <img
        src="https://res.cloudinary.com/dfrd9rf2c/image/upload/v1690974163/photo_tagging_app/merged-egor_ekwb1e.png"
        className="h-full w-full object-cover"
      />{" "}
      {/* Score Modal */}
      <div
        className={`fixed top-[300px] left-[580px] ${
          isGameOver ? "flex" : "hidden"
        } z-10 flex-col gap-12 rounded-xl bg-zinc-50 px-20 py-10 text-2xl`}
      >
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="border-b-2 border-red-500 font-cinzel font-bold">
            {" "}
            Highest Scores :{" "}
          </h1>
          <ul className="flex flex-col gap-2 font-inter font-light">
            <li className="flex justify-center gap-2">
              <p className="w-80 text-center">1. Bolt </p>: <p>00 : 00 : 01</p>
            </li>
            <li className="flex justify-center gap-2">
              <p className="w-80 text-center">2. Great Performance </p>:{" "}
              <p>00 : 00 : 10</p>
            </li>{" "}
            <li className="flex justify-center gap-2">
              <p className="w-80 text-center">3. Decent Performance </p>:{" "}
              <p>00 : 00 : 04</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="border-b-2 border-red-500">
              The Time You Achieved !{" "}
            </h1>
            <p className="font-cinzel text-4xl"> {finalScore} </p>
          </div>

          <div className="flex gap-6 text-xl">
            {" "}
            <button
              onClick={() => {
                window.location.reload();
              }}
              className="rounded-lg bg-red-500 p-3 text-zinc-50 hover:bg-red-300"
            >
              {" "}
              Play Again ?{" "}
            </button>
            <Link
              to="/"
              onClick={() => {
                setTimerOn(false);
              }}
            >
              {" "}
              <button className="rounded-lg bg-red-500 p-3 text-zinc-50 hover:bg-red-300">
                {" "}
                Back To Menu{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Investigation Status Card */}
      <div
        className={`${
          isGameStatusOn ? "flex flex-col gap-5" : "hidden"
        } fixed top-[80px] left-[960px] h-[430px] w-[400px] rounded-xl bg-zinc-400 p-6`}
      >
        {/* Alien Queen */}
        <div className="flex h-[120px] w-full gap-3 transition duration-500 ease-in-out hover:scale-110">
          <div className="h-full w-[200px]">
            <img
              src="https://res.cloudinary.com/dfrd9rf2c/image/upload/v1690973751/photo_tagging_app/alienqueen_yhwukt.png"
              className="h-full w-full rounded-lg object-contain"
            />
          </div>

          <div>
            <div
              className={`${
                isQueenFound ? "line-through" : ""
              } flex h-full w-full flex-col items-center justify-center gap-2`}
            >
              {" "}
              <h1 className="text-center font-robotoMono text-2xl font-bold">
                Alien Queen
              </h1>
              <p className="text-center text-xl">Xenomorph Queen </p>
            </div>
          </div>
        </div>

        {/* Ghost Buster */}
        <div className="flex h-[120px] w-full gap-3 transition duration-500 ease-in-out hover:scale-110">
          <div className="h-full w-[200px]">
            <img
              src="https://res.cloudinary.com/dfrd9rf2c/image/upload/v1690973751/photo_tagging_app/ghostbuster_izcuuq.png"
              className="h-full w-full rounded-lg object-contain"
            />
          </div>

          <div>
            <div
              className={`${
                isGhostFound ? "line-through" : ""
              } flex h-full w-full flex-col items-center justify-center gap-2`}
            >
              {" "}
              <h1 className="text-center font-robotoMono text-2xl font-bold">
                Ghost Buster
              </h1>
              <p className="text-center text-xl">Ghost Buster Slimer </p>
            </div>
          </div>
        </div>

        {/* Among Us */}
        <div className="flex h-[120px] w-full gap-3 transition duration-500 ease-in-out hover:scale-110">
          <div className="h-full w-[200px]">
            <img
              src="https://res.cloudinary.com/dfrd9rf2c/image/upload/v1690973751/photo_tagging_app/amongus_qo41fi.png"
              className="h-full w-full rounded-lg object-contain"
            />
          </div>

          <div>
            <div
              className={`${
                isAmongUsFound ? "line-through" : ""
              } flex h-full w-full flex-col items-center justify-center gap-2`}
            >
              {" "}
              <h1 className="text-center font-robotoMono text-2xl font-bold">
                Among Us
              </h1>
              <p className="text-center text-xl"> Space Betrayal </p>
            </div>
          </div>
        </div>
      </div>
      {/* Feedback Message */}
      {/* Negative Feedback */}
      <div
        className={`${
          validationFail ? "flex" : "hidden"
        } fixed top-24 left-[45%] items-center justify-center gap-3 rounded-lg bg-red-500 px-4 py-2 text-lg text-white drop-shadow-xl`}
      >
        <p> Keep Looking ! </p>
      </div>
      {/* Positive Feedback */}
      <div
        className={`${
          validationSuccess ? "flex" : "hidden"
        } fixed top-24 left-[45%] items-center justify-center gap-3 rounded-lg bg-green-500 px-4 py-2 text-lg text-white drop-shadow-xl`}
      >
        <p> You found {foundCharacter} ! </p>
      </div>
      <div>
        {/* Dropdown menu {" "} */}
        <div
          style={{
            position: "absolute",
            left: xCord + "px",
            top: yCord + "px",
          }}
          className={`${isCursorClicked ? "" : "hidden"} text-sm text-white`}
        >
          <button
            className={`${
              isQueenFound ? "hidden" : "flex"
            } h-10 w-28 items-center justify-center rounded-sm border-[1px] border-zinc-400 bg-zinc-800 transition duration-300 ease-in-out hover:bg-zinc-600`}
            onClick={validateQueen}
          >
            {" "}
            <p className="transition duration-300 ease-in-out hover:scale-105">
              {" "}
              Alien Queen{" "}
            </p>
          </button>
          <button
            className={`${
              isGhostFound ? "hidden" : "flex"
            } h-10 w-28 items-center justify-center rounded-sm border-[1px] border-zinc-400 bg-zinc-800 transition duration-300 ease-in-out hover:bg-zinc-600`}
            onClick={validateGhost}
          >
            {" "}
            <p className="transition duration-300 ease-in-out hover:scale-105">
              {" "}
              Ghost Buster{" "}
            </p>
          </button>
          <button
            className={`${
              isAmongUsFound ? "hidden" : "flex"
            } h-10 w-28 items-center justify-center rounded-sm border-[1px] border-zinc-400 bg-zinc-800 transition duration-300 ease-in-out hover:bg-zinc-600`}
            onClick={validateAmongUs}
          >
            {" "}
            <p className="transition duration-300 ease-in-out hover:scale-105">
              {" "}
              Among Us{" "}
            </p>
          </button>
        </div>
        ; {/* Cursor */}
        <div
          ref={cursorRef}
          className={`
          pointer-events-none absolute h-24 w-24 -translate-x-[3.08rem] -translate-y-[3.2rem] rounded-[50%] border-4 border-dashed border-white  bg-gray-300/30`}
        >
          <div className="h-ful relative w-full">
            <div className="absolute top-[42px] left-[42px] h-1.5 w-1.5 rounded-[50%] bg-red-600">
              {" "}
            </div>
          </div>
        </div>
      </div>
      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 ${
          isGameOver ? "" : "hidden"
        } bg-black/70`}
      ></div>
    </div>
  );
};

export default EgorImg;
