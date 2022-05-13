import React, { useState } from "react";
import "./stepProgress.css";
import tick from "./tick.png";

function StepProgress() {
  const [progressColor, setProgressColor] = useState("0%");

  const stepperArr = ["0", "25", "50", "75", "97.5"];

  const stepLabel = [
    "content1",
    "content2",
    "content3",
    "content4",
    "content5",
  ];

  function handleProgress(perc) {
    const percVal = parseInt(perc) + 2;
    setProgressColor(percVal + "%");
    // Parent component function
  }

  return (
    <div id="parentContainer">
      <div id="bar">
        <div id="progressColor" style={{ width: progressColor }} />
      </div>
      {stepperArr.map((perc, index) => {
        const percVal = perc + "%";
        let bgcolor = "grey";
        let imgsrc = "";
        const tickImgPerc = parseInt(perc) + 20;
        progressColor > perc ? (bgcolor = "#FCC216") : (bgcolor = "white");
        parseInt(progressColor) > parseInt(tickImgPerc)
          ? (imgsrc = tick)
          : (imgsrc = "none");

        return (
          <div
            className="stepper"
            onClick={() => handleProgress(perc)}
          >
            {imgsrc !== "none" && <img src={imgsrc} className="tickImg" />}
            <div className="dot" style={{ backgroundColor: bgcolor }} />
            {bgcolor !== "white" && (
              <p className="stepperLabel">{stepLabel[index]}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default StepProgress;
