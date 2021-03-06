/* Util */
import { drawUtils } from "../util/canvasDrawHelpers";
import { configUtils } from "../util/gameConfigHelpers";
import { isWithinParentTile } from "../util/validationHelpers";
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
  isDrawing: boolean = false;
  currentSelectedCell: ICoords | null = null;

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
    // only draw if mouse is held down
    if (!this.isDrawing) return;

    // loop through board coords...
    for (let row = 0; row < this.boardCoords.length; row++) {
      for (let col = 0; col < this.boardCoords[row].length; col++) {
        const parentTile = this.boardCoords[row][col];

        // if current coord is within range of click coord...
        if (isWithinParentTile(parentTile.coords, coords)) {
          // if current tile is start/finish tile, do not mark
          if (
            parentTile.state === START_TILE ||
            parentTile.state === FINISH_TILE
          )
            return;

          // if current coord is still within current tile, do not mark
          if (
            this.currentSelectedCell &&
            isWithinParentTile(this.currentSelectedCell, coords)
          )
            return;

          // ... if all validation passes then draw (toggle WALL/EMPTY)
          const updateTo =
            parentTile.state === WALL_TILE ? EMPTY_TILE : WALL_TILE;
          parentTile.state = updateTo;
          // set clicked coords to new current coords
          this.currentSelectedCell = parentTile.coords;
          console.log("Updated parent tile:", parentTile);
          return;
        }
      }
    }
  };

  toggleDraw = () => {
    console.log();
    this.isDrawing = !this.isDrawing;
  };
}
