/* Util */
import { drawUtils } from "../util/canvasDrawHelpers";
import { gameConfigUtils } from "../util/gameConfigHelpers";
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
import { IBoardCoords, ICoords } from "../constants/types";

export class Game {
  // html canvas context used for drawing
  ctx: CanvasRenderingContext2D;
  // game logic utils
  _gameConfigUtils = gameConfigUtils();
  // game board coordinates
  boardCoords: IBoardCoords = this._gameConfigUtils.createTileArray();
  // canvas draw utils
  _drawUtils: {
    rect: (x: number, y: number, w: number, h: number) => void;
    drawTiles: (coords: IBoardCoords) => void;
  };

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this._drawUtils = drawUtils(this.ctx);
  }

  init = () => {
    console.log("Initializing game...");
    return setInterval(this.draw, 500);
  };

  clear = () => {
    this.ctx.clearRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT);
  };

  draw = () => {
    this.clear();
    this._drawUtils.drawTiles(this.boardCoords);
  };

  markTile = (coords: ICoords) => {
    console.log("Marking tiles..", coords);
    const clicked_x = coords.x;
    const clicked_y = coords.y;
    // loop through board coords
    for (let row = 0; row < this.boardCoords.length - 1; row++) {
      for (let col = 0; col < this.boardCoords[row].length - 1; col++) {
        const { x, y } = this.boardCoords[row][col].coords;

        if (
          clicked_x < x &&
          clicked_x > x - TILE_WIDTH &&
          clicked_y < y &&
          clicked_y > y - TILE_HEIGHT
        ) {
          console.log("match!", this.boardCoords[row][col].coords);
          this.boardCoords[row][col].state = WALL_TILE;
          break;
        }
      }
    }

    // if current coord is within range of click coord

    // if Wall, change to Empty

    // vice versa
  };
}
