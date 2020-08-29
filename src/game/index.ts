/* Util */
import { drawUtils } from "../util/canvasDrawHelpers";
import { configUtils } from "../util/gameConfigHelpers";
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
  FPS,
} from "../constants/gameConfig";
import { IBoardCoords, ICoords } from "../constants/types";

export class Game {
  // html canvas context used for drawing
  ctx: CanvasRenderingContext2D;
  // game board coordinates
  boardCoords: IBoardCoords = configUtils().createTileArray();
  // canvas draw utils
  _drawUtils: {
    rect: (x: number, y: number, w: number, h: number) => void;
    drawTiles: (coords: IBoardCoords) => void;
  };

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this._drawUtils = drawUtils(this.ctx);
  }

  // game loop
  init = () => {
    console.log("Initializing game...");
    return setInterval(this.draw, FPS);
  };

  // clear canvas
  clear = () => {
    this.ctx.clearRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT);
  };

  // draw/update tiles and their state
  draw = () => {
    this.clear();
    this._drawUtils.drawTiles(this.boardCoords);
  };

  // set bg of tile depending on its state
  markTile = (coords: ICoords) => {
    console.log("Clicked tiles..", coords);
    const clicked_x = coords.x;
    const clicked_y = coords.y;

    // loop through board coords...
    for (let row = 0; row < this.boardCoords.length; row++) {
      for (let col = 0; col < this.boardCoords[row].length; col++) {
        const { x, y } = this.boardCoords[row][col].coords;

        // if current coord is within range of click coord...
        if (
          clicked_x > x &&
          clicked_x < x + TILE_WIDTH &&
          clicked_y > y &&
          clicked_y < y + TILE_HEIGHT
        ) {
          // ...toggle WALL/EMPTY
          this.boardCoords[row][col].state = WALL_TILE;
          break;
        }
      }
    }
  };
}
