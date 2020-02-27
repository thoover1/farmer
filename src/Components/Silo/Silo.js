import React from "react";
import './Silo.scss'

const Silo = props => {
  let button = null;
  if (props.count > 9) {
    button = (
      <button
        onClick={
          (() => {props.setStoredCrops(props.storedCrops + 10); props.setCount(props.count - 10)})
        }
      >
        Store 10 Crops
      </button>
    );
  } else {
    button = <button disabled>Store Crops</button>;
  }

  return (
    <div className="Silo">
       <h1>Silo</h1>
      <h3>Stored Crops: {props.storedCrops}</h3>
      {button}
    </div>
  );
};

export default Silo;
