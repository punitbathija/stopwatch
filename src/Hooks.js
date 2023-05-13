import React, { useEffect, useState } from "react";
import Props from "./Props";
export const Hooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
      <Props onClick={handleClick} count={count} />
    </div>
  );
};
