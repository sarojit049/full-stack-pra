import { useState } from "react";
import ColorBox from "./ColorBox";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <ColorBox bgColor="#2a6fe8">
      <h2>Counter Application</h2>
      <p>Counter Value: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>
    </ColorBox>
  );
}

export default Counter;