/* Constants */
import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  TILE_WIDTH,
  TILE_HEIGHT,
  WALL_TILE,
  EMPTY_TILE,
  START_TILE,
  FINISH_TILE,
} from "../constants/gameConfig";
import { IBoardCoords } from "../constants/types";

export const drawUtils = (ctx: CanvasRenderingContext2D) => {
  // draw rectangle
  const rect = (x: number, y: number, w: number, h: number) => {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
  };
  const getMarkColor = (state: string) => {
    switch (state) {
      case EMPTY_TILE:
        return "lightblue";
      case WALL_TILE:
        return "blue";
      case START_TILE:
        return "green";
      case FINISH_TILE:
        return "red";
      default:
        return "black";
    }
  };

  // draw rectangles
  const drawTiles = (coords: IBoardCoords) => {
    coords.forEach((rows) => {
      rows.forEach((tile) => {
        const { x, y } = tile.coords;
        ctx.fillStyle = getMarkColor(tile.state).toString();

        rect(x, y, TILE_WIDTH, TILE_HEIGHT);
      });
    });
  };

  return {
    rect,
    drawTiles,
  };
};
