// todo: rename to tileHelpers? To get info on each tile
import { ICoords, IIndices } from "../constants/types";
import {
  TILE_WIDTH,
  TILE_HEIGHT,
  GRID_GAP,
  MAX_COLUMS,
  MAX_ROWS,
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

export const isValidIndices = (indices: IIndices) => {
  const { row_i, col_i } = indices;
  console.log("Validating", indices);

  // no negative index, or index greater than total row/col
  if (row_i < 0 || row_i >= MAX_ROWS || col_i < 0 || col_i >= MAX_COLUMS) {
    console.log("Invalid.");
    return false;
  }
  console.log("Valid.");
  return true;
};
