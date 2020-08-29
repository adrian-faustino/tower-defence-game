/* Util */
import { drawUtils } from "../util/canvasDrawHelpers";
import { gameConfigUtils } from "../util/gameConfigHelpers";
/* Constants */
import { BOARD_WIDTH, BOARD_HEIGHT } from "../constants/gameConfig";
import { IBoardCoords } from "../constants/types";

export default (ctx: CanvasRenderingContext2D) => {
  // constants
  const _drawUtils = drawUtils(ctx);
  const _gameConfigUtils = gameConfigUtils();
  const boardCoords: IBoardCoords = _gameConfigUtils.createTileArray();

  // clear board
  const clear = () => {
    ctx.clearRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT);
  };

  // draw tiles
  const draw = () => {
    clear();
    console.log("Drawing...");
    ctx.fillStyle = "red";
    _drawUtils.drawTiles(boardCoords);
  };

  const init = () => {
    console.log("Initializing game...");
    return draw();
    // return setInterval(draw, 500);
  };

  return init();
};
