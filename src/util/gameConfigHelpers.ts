/* Constants */
import {
  MAX_ROWS,
  MAX_COLUMS,
  START_TILE,
  FINISH_TILE,
  EMPTY_TILE,
  TILE_WIDTH,
  TILE_HEIGHT,
  GRID_GAP,
  START_INDICES,
  FINISH_INDICES,
  WALL_TILE,
} from "../constants/gameConfig";
import { IBoardCoords } from "../constants/types";
/* Util */
import { isWithinParentTile } from "../util/validationHelpers";
import Tile from "../constructors/TileObject";

export const configUtils = () => {
  // generate tile 2d array that will be stored in new Game class
  const createTileArray = () => {
    const tiles: IBoardCoords = [];
    for (let col = 0; col < MAX_COLUMS; col++) {
      tiles[col] = [];
      for (let row = 0; row < MAX_ROWS; row++) {
        const x = col * (TILE_WIDTH + GRID_GAP);
        const y = row * (TILE_HEIGHT + GRID_GAP);
        const currentTile = { x, y };
        tiles[col][row] = Tile({
          indices: { row_i: row, col_i: col },
          coords: currentTile,
          state: EMPTY_TILE,
        });
      }
    }
    console.log("Generated tiles:", tiles);
    return tiles;
  };

  return {
    createTileArray,
  };
};
