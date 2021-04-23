import React, { useRef } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const color = props.color;
  const width = props.width;
  const height = props.height;
  const tool = props.tool;
  const gridSize = props.gridSize;

  return <canvas ref={canvasRef} height={height} width={width} />;
};

export default Canvas;
