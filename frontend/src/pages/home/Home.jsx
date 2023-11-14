import React from "react";
import Slider from "../../components/slider/Slider";
import HomeInfo from "../../components/homeInfo/HomeInfo";

export function ProductHeading({ heading, btnText }) {
  return (
    <>
      <div className="--flex-between">
        <h2 className="--fw-thin">{heading}</h2>
        <button className="--btn">{btnText}</button>
      </div>
      <div className="--hr"></div>
    </>
  );
}

function Home() {
  return (
    <>
      <Slider />
      <section>
        <div className="container">
          <HomeInfo />
          <ProductHeading heading={"Recent Products"} btnText={"Buy now>>>>"} />
        </div>
      </section>
    </>
  );
}

export default Home;
