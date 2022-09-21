import React, { useEffect, useRef, useState } from "react";
import { Reset } from "styled-reset";

function App() {

  const countRef = useRef(0);
  const inputRef = useRef(0);

  const [countState, setCountState] = useState(0);

  useEffect(()=>{
    inputRef.current.focus();
  },[]);
  
  const upRef = () => {
    countRef.current += 1;
    console.log(countRef.current);
  }

  const focusUp = () => {
    console.log(inputRef.current.value);
  }

  const upState = () => {
    setCountState(countState + 1);
  }

  return (
    <React.Fragment>
      <Reset />
      <div>
        <p>ref: {countRef.current}</p>
        <p>state: {countState}</p>

        <button onClick = {upRef}> refUp </button>
        <button onClick = {upState}> stateUp </button>
        
        <input ref={inputRef} type='text' />
        <button onClick = {focusUp}> submit </button>

      </div>
    </React.Fragment>
  );
}

export default App;
