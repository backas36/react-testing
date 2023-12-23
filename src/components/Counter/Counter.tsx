"use client";
import { useState } from "react";

interface IProps {
  defaultCount: number;
  desc: string;
}
const Counter = ({ defaultCount, desc }: IProps) => {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);
  return (
    <div>
      <h2>{desc}</h2>
      <label htmlFor="incrementor">
        Incrementor:
        <input
          type="text"
          id="incrementor"
          className="border-2"
          value={incrementor}
          onChange={(e) => setIncrementor(parseInt(e.target.value) || 0)}
        />
      </label>
      <br />
      <button
        aria-label="Increment Counter"
        onClick={() => setCount((prev) => prev + incrementor)}
      >
        +
      </button>
      <div className="">Current Count: {count}</div>
      <button
        aria-label="Decrement Counter"
        onClick={() => setCount((prev) => prev - incrementor)}
      >
        -
      </button>
    </div>
  );
};
export default Counter;
