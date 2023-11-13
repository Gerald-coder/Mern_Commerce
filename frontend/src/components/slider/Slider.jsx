import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";
import { useNavigate } from "react-router-dom";
import "./Slider.scss";

function Slider() {
  const [curSlide, setCurSlide] = useState(0);
  const navigate = useNavigate();

  const autoScroll = true;
  const slideLength = sliderData.length;
  let slideInterval;
  const interval = 5000;

  const prevSlide = () => {
    setCurSlide((prev) => {
      return prev === 0 ? (prev = sliderData.length - 1) : prev - 1;
    });
  };
  const nextSlide = () => {
    setCurSlide((prev) => {
      return prev === sliderData.length - 1 ? (prev = 0) : prev + 1;
    });
  };

  // setInterval(() => {
  //    setCurSlide((prev) => {
  //      return prev === sliderData.length - 1 ? (prev = 0) : prev + 1;
  //    });
  // }, interval)

  useEffect(() => {
    setCurSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, interval);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [autoScroll, curSlide, interval]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft onClick={prevSlide} className="arrow prev" />
      <AiOutlineArrowRight onClick={nextSlide} className="arrow next" />
      {sliderData.map((slider, ind) => {
        const { desc, heading, image } = slider;
        return (
          <div
            key={ind}
            className={ind === curSlide ? "slide current" : "slide"}
          >
            {ind === curSlide && (
              <>
                <img src={image} alt={desc} />
                <div className="content">
                  <span className="span1"></span>
                  <span className="span2"></span>
                  <span className="span3"></span>
                  <span className="span4"></span>
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <button
                    className="--btn --btn-primary"
                    onClick={() => navigate("/shop")}
                  >
                    Buy now
                  </button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
