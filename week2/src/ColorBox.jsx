function ColorBox({ children, bgColor }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default ColorBox;