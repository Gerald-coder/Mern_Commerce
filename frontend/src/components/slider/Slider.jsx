import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";

function Slider() {
  const [curSlide, setCurSlide] = useState(0);
  const prevSlide = () => {};
  const nextSlide = () => {};
  return (
    <div className="slider">
      <AiOutlineArrowLeft onClick={prevSlide} />
      <AiOutlineArrowRight onClick={nextSlide} />
      {sliderData.map((slider, ind) => {
        const { desc, heading, image } = slider;
        return (
          <div
            key={ind}
            className={ind === curSlide ? "slide current" : "slide"}
          ></div>
        );
      })}
    </div>
  );
}

export default Slider;
