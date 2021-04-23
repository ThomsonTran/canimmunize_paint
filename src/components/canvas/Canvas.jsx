import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const color = props.color;
  const width = props.width;
  const height = props.height;
  const tool = props.tool;
  const gridSize = props.gridSize;

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const createGrid = (gridSize) => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      context.clearRect(0, 0, width, height);
      context.beginPath();
      context.lineWidth = "1";
      context.strokeStyle = "blue";

      for (let y = 0; y < height; y += gridSize) {
        context.moveTo(0, y);
        context.lineTo(width, y);
      }

      for (let x = 0; x < width; x += gridSize) {
        context.moveTo(x, 0);
        context.lineTo(x, height);
      }
      context.stroke();
    };

    createGrid(gridSize);
  }, [height, width, gridSize]);

  return <canvas ref={canvasRef} height={height} width={width} />;
};

export default Canvas;
