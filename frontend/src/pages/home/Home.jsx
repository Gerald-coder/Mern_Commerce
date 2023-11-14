import React from "react";
import Slider from "../../components/slider/Slider";
import HomeInfo from "../../components/homeInfo/HomeInfo";

function Home() {
  return (
    <>
      <Slider />
      <section>
        <div className="container">
          <HomeInfo />
        </div>
      </section>
    </>
  );
}

export default Home;
