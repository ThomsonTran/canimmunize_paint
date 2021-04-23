import floodFill from "./Floodfill";
import pencil from "./Pencil.jsx";

const tools = [
  {
    name: "pencil",
    draw: (x, y, color, context, gridSize) => {
      pencil(x, y, color, context, gridSize);
    },
  },

  {
    name: "floodfill",
    draw: (x, y, color, context, gridSize) => {
      floodFill(x, y, color, context, gridSize);
    },
  },
];

export default tools;
