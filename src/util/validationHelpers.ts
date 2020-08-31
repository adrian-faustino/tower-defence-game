// todo: rename to tileHelpers? To get info on each tile
import { ICoords, IIndices, IBoardCoords } from "../constants/types";
import {
  TILE_WIDTH,
  TILE_HEIGHT,
  GRID_GAP,
  MAX_COLUMS,
  MAX_ROWS,
  WALL_TILE,
  CLOSE_TILE,
} from "../constants/gameConfig";

export const isWithinParentTile = (parent: ICoords, child: ICoords) => {
  const { x, y } = parent;
  const clicked_x = child.x;
  const clicked_y = child.y;

  if (
    clicked_x > x &&
    clicked_x < x + TILE_WIDTH &&
    clicked_y > y &&
    clicked_y < y + TILE_HEIGHT
  )
    return true;
  return false;
};

export const isSameTile = (objA: IIndices, objB: IIndices) => {
  const KEYS = Object.keys(objA);

  // for (let key of KEYS) {
  //   if (objA[key] !== objB[key]) {
  //     console.log("not the same");
  //     return false;
  //   }
  // }
  if (objA.col_i !== objB.col_i || objA.row_i !== objB.row_i) return false;

  return true;
};

export const isValidIndices = (
  boardCoords: IBoardCoords,
  indices: IIndices
) => {
  const { row_i, col_i } = indices;

  // no negative index, or index greater than total row/col
  if (
    row_i < 0 ||
    row_i >= MAX_ROWS ||
    col_i < 0 ||
    col_i >= MAX_COLUMS ||
    boardCoords[col_i][row_i].state === WALL_TILE ||
    boardCoords[col_i][row_i].state === CLOSE_TILE
  ) {
    return false;
  }
  return true;
};

export const indicesInArray = (indices: IIndices, arr: Array<IIndices>) => {
  const result = arr.find(({ col_i, row_i }) => {
    if (col_i === indices.col_i && row_i === indices.row_i) {
      return true;
    }
  });
  return result;
};
