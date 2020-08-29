import { IBoardCoords } from "./../constants/types";

const handleCanvasClick = (
  e: React.MouseEvent<HTMLCanvasElement>,
  coords: IBoardCoords
) => {
  const x = e.clientX - e.currentTarget.offsetLeft;
  const y = e.clientY - e.currentTarget.offsetTop;
};

export const gameHandlers = {
  handleCanvasClick,
};
