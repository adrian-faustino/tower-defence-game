/* Constants */
import {
  MAX_ROWS,
  MAX_COLUMS,
  TILE_WIDTH,
  TILE_HEIGHT,
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

  // draw rectangles
  const drawTiles = (coords: IBoardCoords) => {
    coords.forEach((rows) => {
      rows.forEach((tile) => {
        const { x, y } = tile.coords;
        rect(x, y, TILE_WIDTH, TILE_HEIGHT);
      });
    });
  };

  return {
    rect,
    drawTiles,
  };
};
