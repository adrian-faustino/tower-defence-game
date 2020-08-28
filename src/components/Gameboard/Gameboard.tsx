import React, { useEffect, useRef } from "react";
/* Subcomponents */
import { Tile } from "../";
/* Pixi */
import * as Pixi from "pixi.js";
/* Constants */
import { BOARD_WIDTH, BOARD_HEIGHT } from "../../constants/gameConfig";
import { tilePath } from "../../constants/imagePaths";

const Gameboard = () => {
  const boardContainerRef = useRef<HTMLDivElement>(null);
  let app = useRef<Pixi.Application>(
    new Pixi.Application({
      width: BOARD_WIDTH,
      height: BOARD_HEIGHT,
    })
  );

  // when component mounts, initialize board
  useEffect(() => {
    if (boardContainerRef.current && app.current) {
      boardContainerRef.current.appendChild(app.current.view);
    }
  }, []);

  const handleClick = (e: any) => {
    e.preventDefault();
    app.current && app.current.stage.addChild(Pixi.Sprite.from(tilePath));
  };

  console.log("Mounted");

  return (
    <div>
      <h3>from Gameboard.tsx</h3>
      <Tile />

      <button onClick={handleClick}>Add tower</button>

      <div ref={boardContainerRef}></div>
    </div>
  );
};

export default Gameboard;
