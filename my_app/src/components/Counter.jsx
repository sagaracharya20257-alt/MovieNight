import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 20) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="counter">
      <h2>🍿 Snack Counter</h2>
      <button
        className="counter-btn"
        onClick={decrement}
        disabled={count === 0}
      >
        -
      </button>
      <span className="counter-value">{count}</span>
      <button
        className="counter-btn"
        onClick={increment}
        disabled={count === 20}
      >
        +
      </button>
      {count > 15 && <p>Snack Overload!</p>}
    </div>
  );
}
