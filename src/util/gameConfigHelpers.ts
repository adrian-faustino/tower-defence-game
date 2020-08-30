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
import { isWithinParentTile, isSameTile } from "../util/validationHelpers";
import { newTile } from "../constructors/TileObject";

export const configUtils = () => {
  // generate tile 2d array that will be stored in new Game class
  const createTileArray = () => {
    const tiles: IBoardCoords = [];
    for (let col = 0; col < MAX_COLUMS; col++) {
      tiles[col] = [];
      for (let row = 0; row < MAX_ROWS; row++) {
        const x = col * (TILE_WIDTH + GRID_GAP);
        const y = row * (TILE_HEIGHT + GRID_GAP);
        const currentIndices = { row_i: row, col_i: col };
        const currentTile = { x, y };

        // initialize new tile object
        tiles[col][row] = newTile({
          indices: currentIndices,
          coords: currentTile,
          state: EMPTY_TILE,
        });

        // if tile is start or finish tile, change tile state
        if (isSameTile(START_INDICES, currentIndices)) {
          tiles[col][row].state = START_TILE;
        } else if (isSameTile(FINISH_INDICES, currentIndices)) {
          tiles[col][row].state = FINISH_TILE;
        }
      }
    }
    console.log("Generated tiles:", tiles);
    return tiles;
  };

  return {
    createTileArray,
  };
};
