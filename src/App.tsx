import "./App.css";
import React, { useEffect, useState } from 'react';
import { Header, RainDrop, SliderMenu } from './components';
import { DownCaret, WindowDimensions } from './definitions';
import * as d3 from "d3";
import Accordion from "@mui/material/Accordion";
import { AccordionDetails, AccordionSummary } from "@mui/material";

function App() {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () =>
      window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const getWindowDimensions = (): WindowDimensions => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  };

  const generateRandomRain = () => {
    const rain = [];
    for (let i = 0; i < 20; i++) {
      rain.push(i);
    }
    return rain.map((i, idx) => <RainDrop key={idx} windowDimensions={getWindowDimensions()} timerFunction={d3.timer} />);
  };

  return (
    <div>
      <Header screenWidth={width} />
      {generateRandomRain()}
    </div>
  );
}

export default App;
