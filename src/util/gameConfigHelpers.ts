/* Constants */
import {
  MAX_ROWS,
  MAX_COLUMS,
  EMPTY_TILE,
  TILE_WIDTH,
  TILE_HEIGHT,
  GRID_GAP,
} from "../constants/gameConfig";
import { IBoardCoords } from "../constants/types";

export const gameConfigUtils = () => {
  const createTileArray = () => {
    const tiles: IBoardCoords = [];
    for (let col = 0; col < MAX_COLUMS; col++) {
      tiles[col] = [];
      for (let row = 0; row < MAX_ROWS; row++) {
        tiles[col][row] = {
          coords: {
            x: col * (TILE_WIDTH + GRID_GAP),
            y: row * (TILE_HEIGHT + GRID_GAP),
          },
          state: EMPTY_TILE,
        };
      }
    }
    console.log("Generated tiles:", tiles);
    return tiles;
  };

  return {
    createTileArray,
  };
};
