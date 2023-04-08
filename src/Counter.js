import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const IncrementHandler = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Counter component mounted successfully");
  }, [count]);
  return (
    <>
      {console.log("Counter component mounted successfully")}
      <h1>Count {count}</h1>
      <button onClick={IncrementHandler}>Increment</button>
    </>
  );
};

export default Counter;
