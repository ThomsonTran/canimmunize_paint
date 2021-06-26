function ColorPicker({ currentValue }, props) {
  return (
    <div className="color-picker-container">
      <input
        type="color"
        value={currentValue}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}

export default ColorPicker;
