import { ICoords } from "../constants/types";
import { TILE_WIDTH, TILE_HEIGHT, GRID_GAP } from "../constants/gameConfig";

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
