import React from "react";
/* Constants */
import { tilePath } from "../../constants/imagePaths";

const Tile = () => {
  return (
    <div>
      <h3>from Tile.tsx</h3>
      <img src={tilePath} />
    </div>
  );
};

export default Tile;
