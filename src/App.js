import React, { useState } from "react";
import "./App.scss";
import Farmer from "./Components/Farmer/Farmer";
import Silo from "./Components/Silo/Silo";

function App() {
  const [count, setCount] = useState(0);
  const [storedCrops, setStoredCrops] = useState(0);

  let renderedComponent;

  if (count < 10 && storedCrops < 10) {
    renderedComponent = null;
  } else {
    renderedComponent = (
      <Silo
        storedCrops={storedCrops}
        setStoredCrops={setStoredCrops}
        count={count}
        setCount={setCount}
      />
    )
  }

  return (
    <div className="App">
      <Farmer count={count} setCount={setCount} />
      {renderedComponent}
    </div>
  );
}

export default App;
