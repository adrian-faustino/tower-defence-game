import React, { useRef, useEffect } from "react";
/* Styles */
import "./Gameboard.css";
/* Subcomponents */
import { Tile } from "../";
/* Constants */
import { BOARD_WIDTH, BOARD_HEIGHT } from "../../constants/gameConfig";
/* Pixi */
// import * as Pixi from "pixi.js";
import init from "../../game";
import { gameHandlers } from "../../game/gameHandlers";

const Gameboard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (null !== canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      context && init(context);
    }
  }, []);

  return (
    <div>
      <h3>from Gameboard.tsx</h3>

      <canvas
        onClick={gameHandlers.handleCanvasClick}
        height={BOARD_HEIGHT}
        width={BOARD_WIDTH}
        style={{ background: "black" }}
        ref={canvasRef}
      ></canvas>
    </div>
  );
};

export default Gameboard;
