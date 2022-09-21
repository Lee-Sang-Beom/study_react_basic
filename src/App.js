import React, { useEffect, useRef, useState } from "react";
import { Reset } from "styled-reset";

function App() {

  const [number,setNumber] = useState(1);
  const double = () => {
    const doubledNumber= number*2;
    setNumber(doubledNumber);
    console.log(doubledNumber);
  }
  return (
    <React.Fragment>
      <Reset />
      <div>
        <div>
          {number}
        </div>
        <button onClick={double}>update</button>

      </div>
    </React.Fragment>
  );
}

export default App;
