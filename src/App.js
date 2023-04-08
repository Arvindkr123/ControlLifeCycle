import "./styles.css";
import React, { useState } from "react";
import Counter from "./Counter";

export default function App() {
  const [show, setShow] = useState(true);
  const removeCount = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      <button onClick={removeCount}>Remove Counter</button>
      {show && <Counter />}
    </div>
  );
}
