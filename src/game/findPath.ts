import {
  START_INDICES,
  FINISH_INDICES,
  WALL_TILE,
  OPEN_TILE,
  CLOSE_TILE,
} from "../constants/gameConfig";
import { IIndices, IBoardCoords } from "../constants/types";
import {
  isValidIndices,
  isSameTile,
  indicesInArray,
} from "../util/validationHelpers";

// indices constructor
const indices = (row: number, col: number) => {
  return { row_i: row, col_i: col };
};

// return list of indices
const getNeighbours = (
  boardCoords: IBoardCoords,
  tileIndices: IIndices
): Array<IIndices> => {
  const { row_i, col_i } = tileIndices;
  const result: Array<IIndices> = [];
  let _indices: IIndices;

  // north
  const north_row = row_i + 1;
  const north_col = col_i + 0;
  _indices = indices(north_row, north_col);
  isValidIndices(boardCoords, _indices) && result.push(_indices);

  // ne
  const ne_row = row_i + 1;
  const ne_col = col_i + 1;
  _indices = indices(ne_row, ne_col);
  isValidIndices(boardCoords, _indices) && result.push(_indices);

  // nw
  const nw_row = row_i + 1;
  const nw_col = col_i - 1;
  _indices = indices(nw_row, nw_col);
  isValidIndices(boardCoords, _indices) && result.push(_indices);

  // south
  const south_row = row_i - 1;
  const south_col = col_i + 0;
  _indices = indices(south_row, south_col);
  isValidIndices(boardCoords, _indices) && result.push(_indices);

  // se
  const se_row = row_i - 1;
  const se_col = col_i + 1;
  _indices = indices(se_row, se_col);
  isValidIndices(boardCoords, _indices) && result.push(_indices);

  // sw
  const sw_row = row_i - 1;
  const sw_col = col_i - 1;
  _indices = indices(sw_row, sw_col);
  isValidIndices(boardCoords, _indices) && result.push(_indices);

  // east
  const east_row = row_i + 0;
  const east_col = col_i + 1;
  _indices = indices(east_row, east_col);
  isValidIndices(boardCoords, _indices) && result.push(_indices);

  // west
  const west_row = row_i + 0;
  const west_col = col_i - 1;
  _indices = indices(west_row, west_col);
  isValidIndices(boardCoords, _indices) && result.push(_indices);

  console.log("Neighbours:", result);
  return result;
};

const distanceBetween2points = (pointA: IIndices, pointB: IIndices) => {
  const ySquared = Math.pow(pointB.row_i - pointA.row_i, 2);
  const xSquared = Math.pow(pointB.col_i - pointA.col_i, 2);
  return Math.sqrt(ySquared + xSquared);
};

const moveFromArrayAtoB = (
  arrayA: IIndices[],
  arrayB: IIndices[],
  obj: IIndices
) => {
  const index = arrayA.findIndex(
    (e) => e.col_i === obj.col_i && e.row_i === obj.row_i
  );

  // remove from A
  arrayA.splice(index, 1);

  // add to B
  arrayB.push(obj);
};

export const findPath = (boardCoords: IBoardCoords | undefined) => {
  if (!boardCoords) return;
  console.log("Finding path...");
  let openedTiles: Array<IIndices> = [START_INDICES]; // 'neighbours' to the current tile
  let closedTiles: Array<IIndices> = []; // tiles that have been explored and won't be revisited
  let lowestFcost: number;
  let currentTile: IIndices = openedTiles[0];
  let found: boolean = false;
  let maxLoops = 500;
  let parent: IIndices = START_INDICES;

  while (maxLoops > 0 && !found) {
    // if end point is within neighbor, end loop
    if (indicesInArray(FINISH_INDICES, openedTiles)) {
      found = true;
      return;
    }

    parent = currentTile;

    // remove current tile and add to closed
    moveFromArrayAtoB(openedTiles, closedTiles, currentTile);

    // populate list with neighbours
    openedTiles = getNeighbours(boardCoords, currentTile);

    // find lowest F cost out of all neighbours
    openedTiles.forEach((tile, i) => {
      // if current tile is in closed, ignore
      if (indicesInArray(tile, closedTiles)) return;

      const tileObj = boardCoords[tile.col_i][tile.row_i];

      // mark opened tile yellow
      tileObj.state = OPEN_TILE;

      const g_cost = distanceBetween2points(tile, START_INDICES);
      const h_cost = distanceBetween2points(tile, FINISH_INDICES);
      const f_cost = g_cost + h_cost;

      // update lowest f cost to current
      if (i === 0) {
        lowestFcost = f_cost;
        currentTile = tile;
      } else if (f_cost < lowestFcost && !isSameTile(currentTile, parent)) {
        lowestFcost = f_cost;
        currentTile = tile;
      }
    });

    // mark lowest F cost as red
    boardCoords[currentTile.col_i][currentTile.row_i].state = CLOSE_TILE;

    // debugging
    console.log("Current tile:", currentTile);
    console.log("Closed list:", closedTiles);
    console.log("Open list:", openedTiles);

    maxLoops--;
  }

  // while (maxLoops > 0) {
  //   // generate neighbours array
  //   const neighbours = getNeighbours(openendTiles[openendTiles.length - 1]);

  //   // change neighbours bg color
  //   neighbours.forEach((neighbour) => {
  //     const { row_i, col_i } = neighbour;
  //     const currentTile = boardCoords[col_i][row_i];

  //     // change tile bg color to yellow
  //     currentTile.state = OPEN_TILE;

  //     // highlight tile with greatest H cost - distance to end
  //     const h_cost = distanceBetween2points(neighbour, FINISH_INDICES);
  //     if (h_cost <= lowestH) {
  //       currentTile.state = CLOSE_TILE;
  //       lowestH = h_cost;
  //     }

  //     const g_cost = distanceBetween2points(neighbour, START_INDICES);

  //     const f_cost = h_cost+ g_cost;

  //     // end loop once end tile is within neighbor vicinity
  //     if (isSameTile(neighbour, FINISH_INDICES)) {
  //       alert("Found!");
  //       return;
  //     }
  //   });

  //   maxLoops--;
  // }
};
