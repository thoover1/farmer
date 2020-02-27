import React from "react";
import './Farmer.scss'

const Farmer = props => {
  return (
    <div className="Farmer">
      <h1>Farmer</h1>
      <h3>Current Crops: {props.count}</h3>
      <button onClick={() => props.setCount(props.count + 1)}>
        Farm Crops
      </button>
    </div>
  );
};

export default Farmer;
