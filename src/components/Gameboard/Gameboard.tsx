import React, { useRef, useEffect } from "react";
/* Styles */
import "./Gameboard.css";
/* Subcomponents */
import { Tile } from "../";
/* Constants */
import { BOARD_WIDTH, BOARD_HEIGHT } from "../../constants/gameConfig";
/* Pixi */
// import * as Pixi from "pixi.js";
import { gameHandlers } from "../../game/gameHandlers";
import { Game } from "../../game/";

const Gameboard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let game = useRef<Game>();

  useEffect(() => {
    if (null !== canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (context) {
        game.current = new Game(context)!;
        game.current.init();
      }
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const x = e.clientX - e.currentTarget.offsetLeft;
    const y = e.clientY - e.currentTarget.offsetTop;

    game.current?.markTile({ x, y });
  };

  return (
    <div>
      <h3>from Gameboard.tsx</h3>

      <canvas
        onClick={handleClick}
        height={BOARD_HEIGHT}
        width={BOARD_WIDTH}
        style={{ background: "black" }}
        ref={canvasRef}
      ></canvas>
    </div>
  );
};

export default Gameboard;
