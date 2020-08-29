// import { ICoords } from "../constants/types";

// gameboard container sizes
export const BOARD_WIDTH: number = 800;
export const BOARD_HEIGHT: number = 600;
export const GRID_GAP: number = 1; // px

// num of tiles
export const MAX_ROWS: number = 10;
export const MAX_COLUMS: number = 10;

// tils sizes
export const TILE_WIDTH: number = BOARD_WIDTH / MAX_COLUMS;
export const TILE_HEIGHT: number = BOARD_HEIGHT / MAX_ROWS;

// tile states
export const EMPTY_TILE: string = "EMPTY_TILE"; // empty tiles
export const WALL_TILELstring = "WALL_TILE"; // wall
export const START_TILELstring = "START_TILE"; // start tile
export const FINISH_TILELstring = "FINISH_TILE"; // finish

// export const START_COORDS: ICoords = {
//   x: 0,
//   y: 0,
// };

// export const END_COORDS: ICoords = {
//   x: BOARD_WIDTH - ,
//   y: BOARD_HEIGHT,
// };
