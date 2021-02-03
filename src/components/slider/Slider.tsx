import { useEffect, useState } from "react";
import "./Slider.css";

function Slider() {
  const [minSlider, setMin] = useState(5);
  const [maxSlider, setMax] = useState(20);

  const gap = 0.5;
  const updateSliders = (e: { target: { value: any } }, slider: string) => {
    let minVal = minSlider,
      maxVal = maxSlider;

    if (slider === "one") {
      minVal = e.target.value;
      maxVal = maxSlider;
    } else if (slider === "two") {
      minVal = minSlider;
      maxVal = e.target.value;
    }

    if (minVal >= maxVal) {
      setMin(maxVal - gap);
      setMax(maxVal);
    } else if (maxVal <= minVal) {
      setMin(minVal);
      setMax(maxVal + gap);
    } else {
      setMin(minVal);
      setMax(maxVal);
    }
    console.log(minSlider, minVal);
  };

  return (
    <>
      <div className={"slider"}>
        <input id={"slider-min"} type="range" min={0} max={100} step={0.5} value={minSlider} onChange={(e) => updateSliders(e, "one")}></input>
        <input id={"slider-max"} type="range" min={0} max={100} step={0.5} value={maxSlider} onChange={(e) => updateSliders(e, "two")}></input>
      </div>
      <div className="output">{`${minSlider}-${maxSlider}`}</div>
    </>
  );
}

export default Slider;
