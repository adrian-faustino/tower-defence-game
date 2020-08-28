import React from "react";
/* Styles */
import "./App.css";
/* Subcomponents */
import { Gameboard, Controls } from "../";

function App() {
  return (
    <div className="App">
      <h3>from App.tsx</h3>
      <Gameboard />
      <Controls />
    </div>
  );
}

export default App;
