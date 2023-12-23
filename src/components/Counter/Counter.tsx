import { useState } from "react";

interface IProps {
  defaultCount: number;
  desc: string;
}
const Counter = ({ defaultCount, desc }: IProps) => {
  const [count, setCount] = useState(defaultCount);
  return (
    <div>
      <h2>{desc}</h2>
      <div className="">Current Count: {count}</div>
    </div>
  );
};
export default Counter;
