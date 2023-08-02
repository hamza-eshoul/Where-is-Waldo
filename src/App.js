import React, { useRef, useState } from "react";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EgorImg from "./components/EgorImg";

const App = () => {
  const [isGameStatusOn, setIsGameStatusOn] = useState(false);
  const [timerOn, setTimerOn] = useState(false);
  const timerRef = useRef(null);

  return (
    <div className="overflow-scroll font-inter font-medium">
      {" "}
      <BrowserRouter basename="/">
        <Header
          isGameStatusOn={isGameStatusOn}
          setIsGameStatusOn={setIsGameStatusOn}
          timerOn={timerOn}
          setTimerOn={setTimerOn}
          timerRef={timerRef}
        />
        <Routes>
          <Route path="/" element={<Showcase setTimerOn={setTimerOn} />} />
          <Route
            path="/egor"
            element={
              <EgorImg
                isGameStatusOn={isGameStatusOn}
                setTimerOn={setTimerOn}
                timerRef={timerRef}
              />
            }
          />
        </Routes>{" "}
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
