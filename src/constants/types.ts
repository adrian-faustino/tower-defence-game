export interface ICoords {
  x: number;
  y: number;
}

export interface IIndices {
  row_i: number;
  col_i: number;
}

export interface ITile {
  indices: IIndices;
  coords: ICoords;
  state: string;
}

export type IBoardCoords = Array<Array<ITile>>;
