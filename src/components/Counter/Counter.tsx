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
      <div className="flex items-center">
        <button
          className="m-1 border-2 px-4"
          aria-label="Increment Counter"
          onClick={() => setCount((prev) => prev + incrementor)}
        >
          +
        </button>
        <div className="">Current Count: {count}</div>
        <button
          className="m-1 border-2 px-4"
          aria-label="Decrement Counter"
          onClick={() =>
            setTimeout(() => setCount((prev) => prev - incrementor), 200)
          }
        >
          -
        </button>
      </div>
    </div>
  );
};
export default Counter;
