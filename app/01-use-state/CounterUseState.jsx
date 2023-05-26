"use client";

import { useState } from "react";

// this is called prop drilling
// container doesn't need to know about setCounter but the only reason its getting it
// is because AddOneButton needs it as a prop
const Container = ({ setCounter }) => {
  return (
    <div>
      <AddOneButton setCounter={setCounter} />
    </div>
  );
};

const AddOneButton = ({ setCounter }) => {
  return (
    <div>
      <button onClick={() => setCounter((value) => value + 1)}>Add One</button>
    </div>
  );
};

const Counter = ({ counter }) => {
  return <div>Counter: {counter}</div>;
};

export default function CounterUseState() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Container setCounter={setCounter} />
      <Counter counter={counter} />
    </div>
  );
}
