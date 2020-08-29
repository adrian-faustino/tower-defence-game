import { ICoords } from "../constants/types";

// game
export const FPS: number = 60; // canvas refresh rate

// gameboard container sizes
export const BOARD_WIDTH: number = 500;
export const BOARD_HEIGHT: number = 500;
export const GRID_GAP: number = 0.1; // px

// num of tiles
export const MAX_ROWS: number = 10;
export const MAX_COLUMS: number = 10;

// tils sizes
export const TILE_WIDTH: number = BOARD_WIDTH / MAX_COLUMS;
export const TILE_HEIGHT: number = BOARD_HEIGHT / MAX_ROWS;

// tile states
export const EMPTY_TILE: string = "EMPTY_TILE"; // empty tiles
export const WALL_TILE: string = "WALL_TILE"; // wall
export const START_TILE: string = "START_TILE"; // start tile
export const FINISH_TILE: string = "FINISH_TILE"; // finish

// start/end point coords
export const START_COORDS: ICoords = { x: 1, y: 1 };
export const FINISH_COORDS: ICoords = {
  x: TILE_WIDTH * MAX_COLUMS,
  y: TILE_HEIGHT * MAX_ROWS,
};
