export function pencilFill(x, y, color, context, gridSize) {
  context.strokeStyle = color;
  x = Math.floor(x / gridSize) * gridSize;
  y = Math.floor(y / gridSize) * gridSize;
  context.fillStyle = color;
  context.fillRect(x, y, gridSize, gridSize);
}

export default pencilFill;
