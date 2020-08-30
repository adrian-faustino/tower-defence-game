import {
  START_INDICES,
  FINISH_INDICES,
  OPEN_TILE,
  CLOSE_TILE,
} from "../constants/gameConfig";
import { IIndices, IBoardCoords } from "../constants/types";
import { isValidIndices, isSameTile } from "../util/validationHelpers";

// indices constructor
const indices = (row: number, col: number) => {
  return { row_i: row, col_i: col };
};

// return list of indices
const getNeighbours = (tileIndices: IIndices) => {
  const { row_i, col_i } = tileIndices;
  const result: Array<IIndices> = [];
  let _indices: IIndices;

  // north
  const north_row = row_i + 1;
  const north_col = col_i + 0;
  _indices = indices(north_row, north_col);
  isValidIndices(_indices) && result.push(_indices);

  // ne
  const ne_row = row_i + 1;
  const ne_col = col_i + 1;
  _indices = indices(ne_row, ne_col);
  isValidIndices(_indices) && result.push(_indices);

  // nw
  const nw_row = row_i + 1;
  const nw_col = col_i - 1;
  _indices = indices(nw_row, nw_col);
  isValidIndices(_indices) && result.push(_indices);

  // south
  const south_row = row_i - 1;
  const south_col = col_i + 0;
  _indices = indices(south_row, south_col);
  isValidIndices(_indices) && result.push(_indices);

  // se
  const se_row = row_i - 1;
  const se_col = col_i + 1;
  _indices = indices(se_row, se_col);
  isValidIndices(_indices) && result.push(_indices);

  // sw
  const sw_row = row_i - 1;
  const sw_col = col_i - 1;
  _indices = indices(sw_row, sw_col);
  isValidIndices(_indices) && result.push(_indices);

  // east
  const east_row = row_i + 0;
  const east_col = col_i + 1;
  _indices = indices(east_row, east_col);
  isValidIndices(_indices) && result.push(_indices);

  // west
  const west_row = row_i + 0;
  const west_col = col_i - 1;
  _indices = indices(west_row, west_col);
  isValidIndices(_indices) && result.push(_indices);

  console.log("Neighbours:", result);
  return result;
};

const distanceBetween2points = (pointA: IIndices, pointB: IIndices) => {
  const ySquared = Math.pow(pointB.row_i - pointA.row_i, 2);
  const xSquared = Math.pow(pointB.col_i - pointA.col_i, 2);
  return Math.sqrt(ySquared + xSquared);
};

export const findPath = (boardCoords: IBoardCoords | undefined) => {
  if (!boardCoords) return;
  console.log("Finding path...");
  const openendTiles: Array<IIndices> = [START_INDICES];
  const closedtiles: Array<IIndices> = [];
  let lowestH: number = distanceBetween2points(START_INDICES, FINISH_INDICES);

  let maxLoops = 2;

  while (maxLoops > 0) {
    // generate neighbours array
    const neighbours = getNeighbours(openendTiles[openendTiles.length - 1]);

    // change neighbours bg color
    neighbours.forEach((neighbour) => {
      const { row_i, col_i } = neighbour;
      const currentTile = boardCoords[col_i][row_i];

      // change tile bg color to yellow
      currentTile.state = OPEN_TILE;

      // highlight tile with greatest H cost - distance to end
      const h_cost = distanceBetween2points(neighbour, FINISH_INDICES);
      if (h_cost <= lowestH) {
        currentTile.state = CLOSE_TILE;
        lowestH = h_cost;
      }

      // end loop once end tile is within neighbor vicinity
      if (isSameTile(neighbour, FINISH_INDICES)) {
        alert("Found!");
        return;
      }
    });

    maxLoops--;
  }

  console.log("Current board:", boardCoords);
};
