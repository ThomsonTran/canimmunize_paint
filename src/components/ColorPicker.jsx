function ColorPicker(props) {
  return (
    <div className="color-picker-container">
      <input
        type="color"
        onChange={(e) => props.onChange(e.target.value)}
        value="#ff0000"
      />
    </div>
  );
}

export default ColorPicker;
