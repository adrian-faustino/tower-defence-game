import React from "react";
/* Constants */
import { tilePath } from "../../constants/imagePaths";
import { TILE_WIDTH, TILE_HEIGHT } from "../../constants/gameConfig";
import { ICoords } from "../../constants/types";

interface TileProps {
  coords: ICoords;
}

const Tile: React.FC<TileProps> = ({ coords }) => {
  const tileStyles = {
    width: TILE_WIDTH,
    height: TILE_HEIGHT,
  };

  return (
    <div style={tileStyles}>
      <img src={tilePath} alt="tile" />
      <span>x:{coords.x}</span>
      <span>y:{coords.y}</span>
    </div>
  );
};

export default Tile;
