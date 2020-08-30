import { IIndices, ICoords, ITile } from "../constants/types";

const newTile = (params: ITile) => {
  // initial tile state
  let indices: IIndices = params.indices;
  let coords: ICoords = params.coords;
  let state: string = params.state;

  return {
    indices,
    coords,
    state,
  };
};

export default newTile;
