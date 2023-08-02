import React, { useEffect, useState } from "react";

const Timer = ({ timerOn, timerRef }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      setTime(0);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div>
      <div ref={timerRef} className="font-inter text-3xl" id="time">
        {" "}
        {/* Hours */}
        <span> {("0" + Math.floor((time / 3600) % 24)).slice(-2)} :</span>
        {/* Minutes */}
        <span> {("0" + Math.floor((time / 60) % 60)).slice(-2)} :</span>
        {/* Seconds */}
        <span> {("0" + (time % 60)).slice(-2)} </span>
      </div>
    </div>
  );
};

export default Timer;
