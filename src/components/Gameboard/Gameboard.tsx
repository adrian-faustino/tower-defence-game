import React, { useRef, useEffect } from "react";
/* Styles */
import "./Gameboard.css";
/* Subcomponents */
import { Tile } from "../";
/* Constants */
import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  CANVAS_BG,
} from "../../constants/gameConfig";
/* Pixi */
// import * as Pixi from "pixi.js";
import { gameHandlers } from "../../game/gameHandlers";
import { Game } from "../../game/";

const Gameboard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let game = useRef<Game>();

  useEffect(() => {
    // on mount set canvas context...
    if (null !== canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (context) {
        // ...and pass down to new Game instance
        game.current = new Game(context)!;
        game.current.init(); // start game
      }
    }
  }, []);

  // mark/toggle tile state (wall, empty, etc)
  const handleDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const x = e.clientX - e.currentTarget.offsetLeft;
    const y = e.clientY - e.currentTarget.offsetTop;
    game.current?.markTile({ x, y });
  };

  const handleMouseClick = () => {
    game.current?.toggleDraw();
  };

  return (
    <div>
      <h3>from Gameboard.tsx</h3>

      <canvas
        onMouseDown={handleMouseClick}
        onMouseUp={handleMouseClick}
        onMouseMove={handleDraw}
        height={BOARD_HEIGHT}
        width={BOARD_WIDTH}
        style={{ background: CANVAS_BG }}
        ref={canvasRef}
      ></canvas>
    </div>
  );
};

export default Gameboard;
