import { START_INDICES, FINISH_INDICES } from "../constants/gameConfig";
import { IIndices } from "../constants/types";

// return list of indices
const getNeighbours = (tileIndices: IIndices) => {
  const { row_i, col_i } = tileIndices;
  const result: Array<IIndices> = [];

  console.log("Neighbours:", result);
  return result;
};

export const findPath = () => {
  console.log("Finding path...");
  // getNeighbours();
};
