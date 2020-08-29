/* Util */
import { drawUtils } from "../util/canvasDrawHelpers";
import { gameConfigUtils } from "../util/gameConfigHelpers";
/* Constants */
import { BOARD_WIDTH, BOARD_HEIGHT } from "../constants/gameConfig";
import { IBoardCoords, ICoords } from "../constants/types";

export class Game {
  ctx: CanvasRenderingContext2D;
  _gameConfigUtils = gameConfigUtils();
  boardCoords: IBoardCoords = this._gameConfigUtils.createTileArray();
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
    this.ctx.fillStyle = "red";
    this._drawUtils.drawTiles(this.boardCoords);
  };

  markTile = (coords: ICoords) => {
    console.log("Marking tiles..", coords);
  };
}
