export interface ICoords {
  x: number;
  y: number;
}

export interface ITile {
  coords: ICoords;
  state: string;
}

export type IBoardCoords = Array<Array<ITile>>;
