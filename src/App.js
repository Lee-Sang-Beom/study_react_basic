import React, { useEffect, useRef, useState } from "react";
import { Reset } from "styled-reset";

function App() {

  const [number,setNumber] = useState(1);
  const double = () => {
    // number*2*2한 값을 출력하고 싶음
    setNumber((prevState) => {
      return prevState*2;
    })
    setNumber((prevState) => {
      return prevState*2;
    })
    
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
