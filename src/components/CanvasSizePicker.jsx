function CanvasSizePicker({ changeHeight, changeWidth }) {
  return (
    <div className="size-container">
      Width
      <input type="number" onChange={(e) => changeWidth(e.target.value)} />
      Height
      <input type="number" onChange={(e) => changeHeight(e.target.value)} />
    </div>
  );
}

export default CanvasSizePicker;
