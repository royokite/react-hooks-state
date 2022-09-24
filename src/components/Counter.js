import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [ user ] = useState('Rokyt')

  function increment() {
    setCount(count + 1);
  }

  return <button onClick={increment}>{user} has been clicked {count} times</button>;
}

export default Counter;
