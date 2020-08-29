const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
  const x = e.clientX - e.currentTarget.offsetLeft;
  const y = e.clientY - e.currentTarget.offsetTop;
  console.log("coords:", x, y);
};

export const gameHandlers = {
  handleCanvasClick,
};
