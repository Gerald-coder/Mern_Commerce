import React from "react";
import { data } from "./HomeInfoBox";
import "./Home.scss";

const HomeInfo = () => {
  return (
    <div className="infoboxes --mb2">
      {data.map((item, ind) => {
        return (
          <div className="infobox" key={ind}>
            <div className="icon">{item.icon}</div>
            <div className="text">
              <h2>{item.heading}</h2>
              <p className="--text-sm">{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeInfo;
