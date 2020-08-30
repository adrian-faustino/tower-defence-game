import { IIndices } from "../constants/types";

// game
export const FPS: number = 60; // canvas refresh rate

// gameboard container sizes
export const BOARD_WIDTH: number = 500;
export const BOARD_HEIGHT: number = 500;
export const GRID_GAP: number = 0.1; // px

// num of tiles
export const MAX_ROWS: number = 5;
export const MAX_COLUMS: number = 5;

// tils sizes
export const TILE_WIDTH: number = BOARD_WIDTH / MAX_COLUMS;
export const TILE_HEIGHT: number = BOARD_HEIGHT / MAX_ROWS;

// tile states
export const EMPTY_TILE: string = "EMPTY_TILE"; // empty tiles
export const WALL_TILE: string = "WALL_TILE"; // wall
export const START_TILE: string = "START_TILE"; // start tile
export const FINISH_TILE: string = "FINISH_TILE"; // finish
// tile to be explored (neighbour)
export const OPEN_TILE: string = "OPEN_TILE";
// explored tile
export const CLOSE_TILE: string = "CLOSE_TILE";

// tile colors
export const START_TILE_COLOR: string = "green";
export const FINISH_TILE_COLOR: string = "purple";
export const EMPTY_TILE_COLOR: string = "lightblue";
export const WALL_TILE_COLOR: string = "black";
export const OPEN_TILE_COLOR: string = "yellow";
export const CLOSE_TILE_COLOR: string = "red";

export const CANVAS_BG: string = "grey";

// start/finish points
export const START_INDICES: IIndices = { row_i: 0, col_i: 1 };
export const FINISH_INDICES: IIndices = {
  row_i: MAX_COLUMS - 1,
  col_i: MAX_ROWS - 1,
};
