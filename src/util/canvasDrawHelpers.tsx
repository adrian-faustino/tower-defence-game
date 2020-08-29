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
  START_TILE_COLOR,
  FINISH_TILE_COLOR,
  EMPTY_TILE_COLOR,
  WALL_TILE_COLOR,
  CANVAS_BG,
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

  // return BG color of each tile depending on its state
  const getMarkColor = (state: string) => {
    switch (state) {
      case EMPTY_TILE:
        return EMPTY_TILE_COLOR;
      case WALL_TILE:
        return WALL_TILE_COLOR;
      case START_TILE:
        return START_TILE_COLOR;
      case FINISH_TILE:
        return FINISH_TILE_COLOR;
      default:
        return CANVAS_BG;
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
