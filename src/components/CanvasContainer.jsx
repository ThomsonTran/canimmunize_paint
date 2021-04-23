import React, { useState } from "react";

import ColorPicker from "./ColorPicker";
import CanvasSizePicker from "./CanvasSizePicker";
import GridSizePicker from "./GridSizePicker";
import ToolPicker from "./ToolPicker";

import Canvas from "./canvas/Canvas";

function CanvasContainer() {
  const [color, setColor] = useState("#ff0000");
  const [width, setWidth] = useState("500");
  const [height, setHeight] = useState("500");
  const [tool, setTool] = useState(1);
  const [gridSize, setGridSize] = useState(100);

  const props = {
    color: color,
    width: width,
    height: height,
    tool: tool,
    gridSize: gridSize,
  };

  return (
    <div className="container">
      <ColorPicker onChange={(value) => setColor(value)} />
      <CanvasSizePicker changeHeight={setHeight} changeWidth={setWidth} />
      <GridSizePicker setGridSize={setGridSize} />
      <ToolPicker onChange={(value) => setTool(value)} />
      <Canvas {...props} />
    </div>
  );
}

export default CanvasContainer;