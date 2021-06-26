import React from "react";

function GridSizePicker({ setGridSize, currentValue }) {
  return (
    <div className="size-container">
      Grid Size
      <input
        type="number"
        value={currentValue}
        onChange={(e) => setGridSize(Math.max(e.target.value, 1))}
      />
    </div>
  );
}

export default GridSizePicker;
