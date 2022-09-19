import React, { useEffect } from "react";
import { Reset } from "styled-reset";

function App() {

  const onSubmit = (e) => {
    alert('submit');
  }
  const onKeyUp = (e) =>{
    if (e.keyCode === 13){
      onSubmit();
    }

  }

  return (
    <React.Fragment>
      <Reset />
      <div>
        <input onKeyUp={onKeyUp}/>
        <button onClick={onSubmit}>SUBMIT</button>
      </div>
    </React.Fragment>
  );
}

export default App;
