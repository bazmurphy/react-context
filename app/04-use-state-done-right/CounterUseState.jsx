"use client";

import { useState } from "react";

// instead of setCounter, we do the same thing as we did with the Context Provider and we use "children"
const Container = ({ children }) => {
  // and we just render the children where we want them to go in this container hierarchy
  return <div>{children}</div>;
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

// and now you don't have the prop drilling because the CounterUseState component has everything needed at the top level
// you avoid prop drilling and get a nice small concise component
export default function CounterUseState() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {/* we want the container to be a generic container */}
      <Container>
        <AddOneButton setCounter={setCounter} />
      </Container>
      <Counter counter={counter} />
    </div>
  );
}
