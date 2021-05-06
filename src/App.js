import React, { useState } from "react";
import cx from "classnames";
import BubbleBackground from "./BubbleBackground";
import About from "./About";
import Instructions from "./Instructions";
import Discussion from "./Discussion";
import GamePieces from "./GamePieces";

import "./App.css";


const App = () => {
  const [selected, setSelected] = useState("About")
  return (
      <div className="App">
        <div className="App-navbar">
          <h1>⛈ un-natural disasters</h1>
          <div className="App-pageSelector">
            <span 
              className={cx("App-tab", selected == "About" ? "selected" : "")}
              onClick={() => setSelected("About")}>About</span>
            <span 
              className={cx("App-tab", selected == "How" ? "selected" : "")}
              onClick={() => setSelected("How")}>How to play</span>
            <span 
              className={cx("App-tab", selected == "Game" ? "selected" : "")}
              onClick={() => setSelected("Game")}>Game pieces</span>
            <span 
              className={cx("App-tab", selected == "Discussion" ? "selected" : "")}
              onClick={() => setSelected("Discussion")}>Discussion</span>
          </div>
        </div>
        {selected == "About" ? <About />: null}
        {selected == "How" ? <Instructions />: null}
        {selected == "Game" ? <GamePieces /> : null}
        {selected == "Discussion" ? <Discussion />: null} 
        <BubbleBackground />
      </div>
  );
};

export default App;
