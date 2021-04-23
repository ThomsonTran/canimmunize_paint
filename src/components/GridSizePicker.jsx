import React, { useRef } from "react";

function GridSizePicker({ setGridSize }) {
  const timeoutRef = useRef(null);

  function waitThenSend(e) {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(
      () => setGridSize(Math.max(e.target.value, 1)),
      300
    );
  }

  return (
    <div className="size-container">
      Grid Size
      <input type="number" onChange={(e) => waitThenSend(e)} />
    </div>
  );
}

export default GridSizePicker;
